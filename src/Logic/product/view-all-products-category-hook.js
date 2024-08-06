import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsByCategory } from "../../Redux/actions/productActions";

const ViewAllProductsCategoryHook = (id) => {
  const limit = 8;
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetches all products from Redux
  const allProductsByCategoryData = useSelector(
    (state) => state.allProducts.allProductsByCategory
  );

  // to ensure that all products Data are available
  const items = useMemo(
    () => allProductsByCategoryData || [],
    [allProductsByCategoryData]
  );

  // useEffect(() => {
  //   if (allProductsByCategoryData) {
  //     console.log(allProductsByCategoryData);
  //   }
  // }, [allProductsByCategoryData]);

  useEffect(() => {
    const getAllProductsByCategoryData = async () => {
      setLoading(true);
      setError(null); // Reset error before fetching
      try {
        await dispatch(getAllProductsByCategory(id, "", limit));
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getAllProductsByCategoryData();
  }, [dispatch, id]);

  // to ensure that all products Data are available and get pagesNumber
  const pageCount = useMemo(() => {
    return items?.paginationResult?.numberOfPages || 0;
  }, [items]);

  const getPage = async (page) => {
    setError(null); // Reset error before fetching a new page
    await dispatch(getAllProductsByCategory(id, page, limit));
  };

  return [loading, items, pageCount, getPage, error];
};

export default ViewAllProductsCategoryHook;
