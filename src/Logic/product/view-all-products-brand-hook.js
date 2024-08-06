import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsByBrand } from "../../Redux/actions/productActions";

const ViewAllProductsBrandHook = (id) => {
  const limit = 8;
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetches all products from Redux
  const allProductsByBrandData = useSelector(
    (state) => state.allProducts.allProductsByBrand
  );

  // to ensure that all products Data are available
  const items = useMemo(
    () => allProductsByBrandData || [],
    [allProductsByBrandData]
  );

  // useEffect(() => {
  //   if (allProductsByBrandData) {
  //     console.log(allProductsByBrandData);
  //   }
  // }, [allProductsByBrandData]);

  useEffect(() => {
    const getAllProductsByBrandData = async () => {
      setLoading(true);
      setError(null); // Reset error before fetching
      try {
        await dispatch(getAllProductsByBrand(id, "", limit));
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getAllProductsByBrandData();
  }, [dispatch, id]);

  // to ensure that all products Data are available and get pagesNumber
  const pageCount = useMemo(() => {
    return items?.paginationResult?.numberOfPages || 0;
  }, [items]);

  const getPage = async (page) => {
    setError(null); // Reset error before fetching a new page
    await dispatch(getAllProductsByBrand(id, page, limit));
  };

  return [loading, items, pageCount, getPage, error];
}

export default ViewAllProductsBrandHook