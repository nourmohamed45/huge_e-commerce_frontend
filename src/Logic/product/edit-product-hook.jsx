// import React Hooks
import { useEffect, useMemo, useState } from "react";
// import notification Alert component
import notify from "../useNotification";

// Import Redux
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../Redux/actions/categoryActions";
import { getAllBrands } from "../../Redux/actions/brandActions";
import { getSubcategoriesByCategory } from "../../Redux/actions/subCategoryActions";
import {
  getProductDetails,
  updateProduct,
} from "../../Redux/actions/productActions";

// Custom hook for managing product addition logic
const EditProductHook = (id) => {
  const dispatch = useDispatch();

  // ================================= Variables =================================
  const colorLimit = 5;

  // ================================= Redux selectors =================================
  // get product details from Redux
  const specialProductData = useSelector(
    (state) => state.allProducts.specialProducts
  );
  // get last category state from redux
  const categoryData = useSelector((state) => state.allCategory.category);
  // get last subCategory state from redux
  const subCategoryByCategoryData = useSelector(
    (state) => state.allSubCategories.subCategory
  );
  // get last brand state from redux
  const brandData = useSelector((state) => state.allBrands.brands);

  // ================================= State declarations =================================
  // State declarations with initial values
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [priceBeforeDiscount, setPriceBeforeDiscount] = useState("");
  const [priceAfterDiscount, setPriceAfterDiscount] = useState("");
  const [quantityAvailable, setQuantityAvailable] = useState("");
  const [categoryID, setCategoryID] = useState("");
  const [brandID, setBrandID] = useState("");
  const [selectedSubCategoryID, setSelectedSubCategoryID] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [colors, setColors] = useState([]);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [loading, setLoading] = useState(true);

  // ================================= Functions =================================
  // Fetch product details on component mount =================================
  useEffect(() => {
    const fetchProductDetails = async () => {
      setLoading(true);
      try {
        await dispatch(getProductDetails(id));
      } catch (error) {
        const errorMessage =
          error?.response?.data?.errors?.[0]?.msg ||
          error?.response?.data?.message ||
          "An error occurred";
        notify(errorMessage, "error");
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [dispatch, id]);

  // Update state when product details are fetched
  useEffect(() => {
    if (specialProductData && specialProductData.data) {
      const productData = specialProductData.data;
      setProductName(productData.title || "");
      setProductDescription(productData.description || "");
      setPriceBeforeDiscount(productData.price?.toString() || "");
      setQuantityAvailable(productData.quantity?.toString() || "");
      setCategoryID(productData.category || "");
      setBrandID(productData.brand || "");
      setColors(productData.availableColors || []);

      console.log(productData.subcategory);

      // Handle images
      const images = [];
      if (productData.imageCover) {
        images.push({ url: productData.imageCover });
      }
      if (productData.images && productData.images.length > 0) {
        images.push(...productData.images.map((img) => ({ url: img })));
      }
      setSelectedImages(images);

      // Fetch subcategories for the selected category
      if (productData.category) {
        dispatch(getSubcategoriesByCategory(productData.category));
      }
    }
  }, [specialProductData, dispatch]);

  // Fetch subcategories from product
  useEffect(() => {
    if (
      specialProductData?.data?.subcategory &&
      subCategoryByCategoryData?.data
    ) {
      const productSubcategories = specialProductData.data.subcategory;
      const allSubcategories = subCategoryByCategoryData.data;

      // Match subcategory IDs with full subcategory objects
      const selectedSubcategories = productSubcategories
        .map((subcatId) =>
          allSubcategories.find((subcat) => subcat._id === subcatId)
        )
        .filter(Boolean); // Remove any undefined values

      setSelectedSubCategoryID(selectedSubcategories);
    }
  }, [specialProductData, subCategoryByCategoryData]);

  // Selected Images Functions =================================
  // When User Select Images
  const handleImageChange = (e) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      const remainingSlots = 10 - selectedImages.length;

      if (filesArray.length > remainingSlots) {
        notify("لا يمكن اضافة اكثر من 10 صور", "warn");
      }

      const newImages = filesArray.slice(0, remainingSlots).map((file) => ({
        url: URL.createObjectURL(file),
        file: file, // Store the actual file object
      }));

      setSelectedImages((prevImages) =>
        [...prevImages, ...newImages].slice(0, 10)
      );
    }
  };

  // When User Remove Image
  const removeImage = (index) => {
    setSelectedImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  // Render function for displaying selected images
  const renderPhotos = (source) => {
    return source.map((photo, index) => {
      return (
        <div
          key={photo.url}
          className="image-item"
          style={{
            position: "relative",
            display: "inline-block",
            margin: "10px",
          }}
        >
          <img
            src={photo.url}
            alt={`Product preview ${index + 1}`}
            style={{ width: "120px", height: "100px" }}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              removeImage(index);
            }}
            style={{
              position: "absolute",
              top: "-10px",
              right: "-10px",
              background: "white",
              border: "1px solid #ccc",
              borderRadius: "50%",
              padding: "2px",
              cursor: "pointer",
            }}
            aria-label={`Remove image ${index + 1}`}
          >
            <svg
              viewBox="0 0 512 512"
              fill="currentColor"
              height="1em"
              width="1em"
            >
              <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm86.63 272L320 342.63l-64-64-64 64L169.37 320l64-64-64-64L192 169.37l64 64 64-64L342.63 192l-64 64z" />
            </svg>
          </button>
        </div>
      );
    });
  };

  // CategoryID Function =================================
  // Fetch categories and brands on component mount
  useEffect(() => {
    const fetchCategoriesAndBrand = async () => {
      if (!navigator.onLine) {
        notify("هناك مشكله في الاتصال بالانترنت", "warn");
        return;
      }

      await dispatch(getAllCategory());

      // get all brands
      await dispatch(getAllBrands());
    };

    fetchCategoriesAndBrand();
  }, [dispatch]);

  // Handle category selection
  const handleChangeCategorySelection = (e) => {
    const selectedCategoryID = e.target.value;
    setCategoryID(selectedCategoryID);
    dispatch(getSubcategoriesByCategory(selectedCategoryID));
    setSelectedSubCategoryID([]); // Reset subcategories when category changes
  };

  // SubCategoryID Function =================================
  // Fetch subcategories when category changes
  useMemo(() => {
    // get subCategory by categoryID
    if (categoryID.length > 0) {
      dispatch(getSubcategoriesByCategory(categoryID));
    }
  }, [categoryID, dispatch]);

  // Handle subcategory selection and remove subCategory
  const onSelectSubCategory = (selectedList) => {
    setSelectedSubCategoryID(selectedList);
  };
  const onRemoveSubCategory = (selectedItem) => {
    setSelectedSubCategoryID(selectedItem);
  };

  // Brand Function =================================
  // get all brands from redux
  const handleChangeBrandSelection = (e) => {
    const selectedBrandID = e.target.value;
    setBrandID(selectedBrandID);
  };

  // Color Function =================================
  // Show & Hide Color Picker
  const handleShowColorPicker = () => {
    setShowColorPicker((prevState) => !prevState);
  };
  // When User Select Color
  const handleChangeColorComplete = (selected) => {
    // Color Number Limit
    if (colors.length >= colorLimit) {
      notify(`لا يمكنك إضافة أكثر من ${colorLimit} ألوان`, "warn");
      setShowColorPicker((prevState) => !prevState);
      return;
    }
    // Adding Color
    const selectedColor = selected.hex;
    setColors([...colors, selectedColor]);
    setShowColorPicker((prevState) => !prevState);
  };
  // Remove Color
  const handleRemoveColor = (index) => {
    setColors((prevColors) => prevColors.filter((_, i) => i !== index));
  };

  // Product Functions =================================
  // To convert base64 or blob to image file
  async function processImageData(imageData, filename) {
    if (!imageData) {
      console.error("No image data provided");
      return null;
    }

    let blob;
    if (imageData instanceof Blob) {
      // If it's already a Blob, use it directly
      blob = imageData;
    } else if (typeof imageData === "string") {
      // Check if it's a data URL
      const match = imageData.match(/^data:([A-Za-z-+/]+);base64,(.+)$/);
      if (match) {
        const mime = match[1];
        const base64Data = match[2];
        const binaryStr = atob(base64Data);
        const len = binaryStr.length;
        const arr = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
          arr[i] = binaryStr.charCodeAt(i);
        }
        blob = new Blob([arr], { type: mime });
      } else {
        // Handle URL case
        try {
          blob = await fetch(imageData).then((res) => res.blob());
        } catch (error) {
          console.error("Error fetching image from URL", error);
          return null;
        }
      }
    } else {
      console.error("Unsupported image data type");
      return null;
    }

    // Create a File object from the Blob
    return new File([blob], filename, { type: blob.type });
  }

  // Validation function for product input fields
  const validateProductInput = (productData) => {
    const errors = {};

    if (!productData.productName.trim()) {
      errors.productName = "اسم المنتج مطلوب";
    }

    if (!productData.productDescription.trim()) {
      errors.productDescription = "وصف المنتج مطلوب";
    }

    if (!productData.quantityAvailable || productData.quantityAvailable <= 0) {
      errors.quantityAvailable = "الكمية يجب أن تكون أكبر من صفر";
    }

    if (
      !productData.priceBeforeDiscount ||
      productData.priceBeforeDiscount <= 0
    ) {
      errors.priceBeforeDiscount = "السعر يجب أن يكون أكبر من صفر";
    }

    if (!productData.categoryID) {
      errors.categoryID = "يجب اختيار التصنيف الرئيسي";
    }

    if (!productData.brandID) {
      errors.brandID = "يجب اختيار الماركة";
    }

    if (productData.selectedSubCategoryID.length === 0) {
      errors.selectedSubCategoryID = "يجب اختيار تصنيف فرعي واحد على الأقل";
    }

    return errors;
  };

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Function to handle product submission
  const handleSubmitProduct = async (e) => {
    e.preventDefault();

    const productData = {
      productName,
      productDescription,
      quantityAvailable,
      priceBeforeDiscount,
      categoryID,
      brandID,
      selectedSubCategoryID,
    };

    const validationErrors = validateProductInput(productData);

    if (Object.keys(validationErrors).length > 0) {
      // Display validation errors
      Object.values(validationErrors).forEach((error) => {
        notify(error, "error");
      });
      scrollToTop(); // Scroll to top after showing validation errors
      return;
    }

    const formData = new FormData();

    // Append product data to FormData
    formData.append("title", productName);
    formData.append("description", productDescription);
    formData.append("quantity", quantityAvailable);
    formData.append("price", priceBeforeDiscount);
    formData.append("category", categoryID);
    formData.append("brand", brandID);

    // ==== this format for Append Arrays ====
    // Append colors and subcategories
    if (colors.length > 0) {
      colors.map((color) => formData.append("availableColors", color));
    }

    if (selectedSubCategoryID.length > 0) {
      selectedSubCategoryID.map((subCatID) =>
        formData.append("subcategory", subCatID._id)
      );
    }

    // Check if there are any selected images
    if (selectedImages.length > 0) {
      // Process and append the cover image first
      const imgCover = await processImageData(
        selectedImages[0].file || selectedImages[0].url,
        "cover_image.jpg"
      );
      if (imgCover) {
        formData.append("imageCover", imgCover);
      } else {
        notify(
          "Error processing cover image. Please try selecting the image again.",
          "error"
        );
        return;
      }

      // Process and append additional images
      const imagePromises = selectedImages
        .slice(1)
        .map(async (image, index) => {
          const imgFile = await processImageData(
            image.file || image.url,
            `product_image_${index + 1}.jpg`
          );
          if (imgFile) {
            return imgFile;
          } else {
            console.warn(
              `Failed to process image ${
                index + 1
              }. Please try selecting the image again.`
            );
            return null;
          }
        });

      const processedImages = await Promise.all(imagePromises);
      processedImages.forEach((img) => {
        if (img) {
          formData.append("images", img);
        }
      });
    } else {
      notify("Please select at least one image", "warn");
      return;
    }

    try {
      setLoading(true);

      await dispatch(updateProduct(id, formData));
      notify("Product updated successfully", "success");
      setLoading(false);

      scrollToTop(); // Scroll to top after showing validation errors
    } catch (error) {
      console.error(error);
      if (error?.response?.status === 400) {
        notify(error.response.data.errors[0].msg, "error");
      } else if (error?.response?.data?.message) {
        notify(error.response.data.message, "error");
      } else {
        notify("An unexpected error occurred. Please try again.", "error");
      }
    } finally {
      setLoading(false);
    }
  };

  // Return all necessary state and functions
  return [
    categoryData,
    subCategoryByCategoryData,
    brandData,
    priceAfterDiscount,
    showColorPicker,
    loading,
    handleImageChange,
    renderPhotos,
    handleChangeCategorySelection,
    onSelectSubCategory,
    onRemoveSubCategory,
    handleChangeBrandSelection,
    handleShowColorPicker,
    handleChangeColorComplete,
    handleRemoveColor,
    handleSubmitProduct,
    selectedImages,
    productName,
    setProductName,
    productDescription,
    setProductDescription,
    priceBeforeDiscount,
    setPriceBeforeDiscount,
    setPriceAfterDiscount,
    quantityAvailable,
    setQuantityAvailable,
    colors,
    categoryID,
    brandID,
    selectedSubCategoryID,
  ];
};

export default EditProductHook;
