import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory, getAllCategoryPage } from "../../Redux/actions/categoryActions";

const AllCategoryPageHook = (categoryLimit) => {
  const dispatch = useDispatch();
  
  const allCategory = useSelector((state) => state.allCategory.category);
  const loading = useSelector((state) => state.allCategory.loading);
  const [category, setCategory] = useState([]);

  const getAllProductsByCategory = useCallback(async () => {
    try {
      await dispatch(getAllCategory(categoryLimit));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [dispatch, categoryLimit]);

  useEffect(() => {
    getAllProductsByCategory();
  }, [getAllProductsByCategory]);

  useEffect(() => {
    if (allCategory?.data) {
      // Filter categories if needed
      setCategory(allCategory);
    }
  }, [allCategory, categoryLimit]);

  // to get page count
  let pageCount = 0;
  if (category.paginationResult)
    pageCount = category.paginationResult.numberOfPages;

  // when press pagination
  const getPage = (page) => {
    dispatch(getAllCategoryPage(categoryLimit, page));
  };

  // useEffect(() => {
  //   console.log("Category:", pageCount);
  // }, [pageCount]);

  return [category, loading, pageCount, getPage];
};

export default AllCategoryPageHook;
