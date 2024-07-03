import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductDetails,
  getProductsBySpecialCategory,
} from "../../Redux/actions/productActions";
import notify from "../useNotification";
import noImageAvailable from "../../assets/images/no-image-available.jpg";
import { getSpecialCategory } from "../../Redux/actions/categoryActions";
import { getSpecialBrand } from "../../Redux/actions/brandActions";

const ViewProductDetailsHook = (id) => {
  const dispatch = useDispatch();
  // Recieving special product details and products by specific category and loading details on mount

  const {
    specialProducts: specialProductData,
    productByCategory: specialProductsByCategoryData,
    loading,
  } = useSelector((state) => state.allProducts);

  // Recieving special category details on mount
  const { specialCategory: specialCategoryData } = useSelector((state) => state.allCategory);

  // Recieving special brand details on mount
  const { specialBrand: specialBrandData } = useSelector((state) => state.allBrands);

  // For sure that the product data is available

  const items = useMemo(
    () => specialProductData.data || [],
    [specialProductData.data]
  );

  // For Store images data when it is available
  const images = useMemo(() => {
    if (items.images && items.images.length > 0) {
      return items.images.map((image) => ({ original: image }));
    }
    return [{ original: noImageAvailable }];
  }, [items.images]);

  // For Store category data when it is available
  const categoryData = useMemo(
    () => specialCategoryData.data || "No category available",
    [specialCategoryData.data]
  );

  // For Store brand data when it is available
  const brandData = useMemo(
    () => specialBrandData.data || "No brand available",
    [specialBrandData.data]
  );

  // For Store products by category data when it is available
  const productsByCategoryData = useMemo(
    () => specialProductsByCategoryData.data || [],
    [specialProductsByCategoryData.data]
  );

  const productsData = useMemo(() => {
    return productsByCategoryData && productsByCategoryData.length > 0
      ? productsByCategoryData.slice(0, 4)
      : [];
  }, [productsByCategoryData]);

  // Fetch special product Details on component mount
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        await dispatch(getProductDetails(id));
      } catch (error) {
        const errorMessage =
          error?.response?.data?.errors?.[0]?.msg ||
          error?.response?.data?.message ||
          "An error occurred";
        notify(errorMessage, "error");
      }
    };

    fetchProductDetails();
  }, [dispatch, id]);

  // Fetch special category and special and products by special category Details on component mount
  useEffect(() => {
    if (items.category) {
      dispatch(getSpecialCategory(items.category));
      dispatch(getProductsBySpecialCategory(items.category));
    }
    if (items.brand) {
      dispatch(getSpecialBrand(items.brand));
    }
  }, [dispatch, items.category, items.brand]);

  

  return [
    items,
    images,
    loading,
    categoryData,
    brandData,
    productsByCategoryData,
    productsData
  ];
};

export default ViewProductDetailsHook;
