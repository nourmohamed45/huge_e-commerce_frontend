import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getAllProductsPage } from "../../Redux/actions/productActions";
import notify from "../useNotification";

const ViewProductAdminHook = () => {
  const viewProductsLimit = 9;
  const dispatch = useDispatch();

  const productsData = useSelector((state) => state.allProducts.allProducts);

  const items = useMemo(() => {
    return productsData || [];
  }, [productsData]);

  const pagination = useMemo(() => {
    return productsData?.paginationResult || null
  }, [productsData])

  const pageCount = useMemo(() => {
    return pagination?.numberOfPages || 0;
  }, [pagination])

  const getPage = (page) => {
    dispatch(getAllProductsPage(viewProductsLimit, page));
  };

  useEffect(() => {
    const fetchAllProductsData = async () => {
      try {
        await dispatch(getAllProducts(viewProductsLimit));
      } catch (error) {
        const errorMessage =
          error?.response?.data?.errors?.[0]?.msg ||
          error?.response?.data?.message ||
          "An error occurred while fetching";
        notify(errorMessage, "error");
      }
    };
    fetchAllProductsData();
  }, [dispatch]);

  return [items, pageCount, getPage];
};

export default ViewProductAdminHook;
