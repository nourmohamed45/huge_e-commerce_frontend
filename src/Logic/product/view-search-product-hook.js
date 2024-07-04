// import react hooks
import { useEffect, useMemo } from "react";

// import redux hooks
import { useDispatch, useSelector } from "react-redux";
// import get all products function from redux using action
import { getAllProducts, getAllProductsPage } from "../../Redux/actions/productActions";
// import  notifications alert
import notify from "../useNotification";

const ViewSearchProductHook = (productsLimit) => {
  // dispatch from redux
  const dispatch = useDispatch();
  // reciving the product data from redux reducer
  const allProductsData = useSelector((state) => state.allProducts.allProducts);

  

  const items = useMemo(
    () => allProductsData || [],
    [allProductsData]
  );

  const pageCount = useMemo(() => {
    return items?.paginationResult?.numberOfPages || 0;
  }, [items]) 

  const getPage = (page) => {
    dispatch(getAllProductsPage(productsLimit, page));
  };

  // to insure that all products will come from database every components rendered
  useEffect(() => {
    try {
      dispatch(getAllProducts(productsLimit));
    } catch (error) {
      if (error?.response.status === 400) {
        notify(error.response.data.errors[0].msg, "error");
        return;
      } else {
        notify(error.response.data.message, "error");
      }
    }
  }, [dispatch, productsLimit]);

  return [items, pageCount, getPage];
};

export default ViewSearchProductHook;
