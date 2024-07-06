import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../Redux/actions/categoryActions";
import { useCallback, useEffect, useState } from "react";
import { getAllBrands } from "../../Redux/actions/brandActions";
import ViewSearchProductHook from "../product/view-search-product-hook";

const SideFilterHook = () => {
  const [, , , getProducts] = ViewSearchProductHook();

  const dispatch = useDispatch();

  // to get category and brand data from redux
  const allCategory = useSelector((state) => state.allCategory.category);
  const allBrand = useSelector((state) => state.allBrands.brands);
  const loading = useSelector((state) => state.allCategory.loading);

  // when first load get all categories and brands data
  useEffect(() => {
    const getAllCategoryAndBrand = async () => {
      await Promise.all([
        dispatch(getAllCategory()),
        dispatch(getAllBrands())
      ]);
    };
    getAllCategoryAndBrand();
  }, [dispatch]);

  // store category data when it is available
  let category = [];
  if (allCategory.data) {
    category = allCategory.data;
  }

  // store brand data when it is available
  let brand = [];
  if (allBrand.data) {
    brand = allBrand.data;
  }

  // handle checkboxes =========================
  const [categoryChecked, setCategoryChecked] = useState(
    JSON.parse(localStorage.getItem("categoryChecked")) || []
  );

  // to ensure that queryCategory updates correctly
  const updateQueryCategory = useCallback(
    (checkedCategories) => {
      const queryCategory = checkedCategories
        .map((el) => `category[in][]=${el}`)
        .join("&");
      localStorage.setItem("queryCategory", queryCategory);
      localStorage.setItem(
        "categoryChecked",
        JSON.stringify(checkedCategories)
      );
      setTimeout(() => {
        getProducts();
      }, 1000);
    },
    [getProducts]
  );

  // handle categories checkbox
  const handleCheckCategory = (e) => {
    const value = e.target.value;
    let newCategoryChecked;

    if (value === "0") {
      newCategoryChecked = [];
    } else {
      if (e.target.checked) {
        newCategoryChecked = [...categoryChecked, value];
      } else {
        newCategoryChecked = categoryChecked.filter((el) => el !== value);
      }
    }

    setCategoryChecked(newCategoryChecked);
    updateQueryCategory(newCategoryChecked);
  };

  // handle Brands checkbox
  const [brandChecked, setBrandChecked] = useState(
    JSON.parse(localStorage.getItem("brandChecked")) || []
  );
  // to ensure that queryBrand updates correctly
  const updateQueryBrand = useCallback(
    (checkedBrands) => {
      const queryBrand = checkedBrands
        .map((el) => `brand[in][]=${el}`)
        .join("&");
      localStorage.setItem("queryBrand", queryBrand);
      localStorage.setItem("brandChecked", JSON.stringify(checkedBrands));
      setTimeout(() => {
        getProducts();
      }, 1000);
    },
    [getProducts]
  );

  // handle Brand checkbox
  const handleCheckBrand = (e) => {
    let value = e.target.value;
    let newBrandChecked;
    if (value === "0") {
      newBrandChecked = [];
    } else {
      if (e.target.checked) {
        newBrandChecked = [...brandChecked, value];
      } else if (!e.target.checked) {
        newBrandChecked = brandChecked.filter((el) => el !== value);
      }
    }

    setBrandChecked(newBrandChecked);
    updateQueryBrand(newBrandChecked);
  };

  // handle price =========================
  const [priceFrom, setPriceFrom] = useState(
    localStorage.getItem("priceFrom") || ""
  );
  const [priceTo, setPriceTo] = useState(localStorage.getItem("priceTo") || "");
  const handlePriceFrom = (e) => {
    localStorage.setItem("priceFrom", e.target.value);
    setPriceFrom(e.target.value);
  }

  const handlePriceTo = (e) => {
    localStorage.setItem("priceTo", e.target.value);
    setPriceTo(e.target.value);
  }

  useEffect(() => {
    setTimeout(() => {
      getProducts()
    }, 1000);
  }, [priceFrom, priceTo])

  const priceFromStorage = localStorage.getItem("priceFrom") || "";
  const priceToStorage = localStorage.getItem("priceTo") || "";
  

  return [
    category,
    brand,
    loading,
    handleCheckCategory,
    handleCheckBrand,
    categoryChecked,
    brandChecked,
    handlePriceFrom,
    handlePriceTo,
    priceFromStorage,
    priceToStorage
  ];
};

export default SideFilterHook;
