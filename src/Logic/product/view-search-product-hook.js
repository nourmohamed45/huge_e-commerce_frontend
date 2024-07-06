// import react hooks
import { useEffect, useMemo } from "react";

// import redux hooks
import { useDispatch, useSelector } from "react-redux";
// import get all products function from redux using action
import { getAllProductsQuerySearch } from "../../Redux/actions/productActions";
// import  notifications alert
import notify from "../useNotification";

const ViewSearchProductHook = () => {
  const productsLimit = 8;
  // dispatch from redux
  const dispatch = useDispatch();
  // reciving the product data from redux reducer
  const allProductsData = useSelector((state) => state.allProducts.allProducts);

  // to ensure that all products Data are available
  const items = useMemo(() => allProductsData || [], [allProductsData]);

  // to ensure that all products Data are available and get pagesNumber
  const pageCount = useMemo(() => {
    return items?.paginationResult?.numberOfPages || 0;
  }, [items]);

  // handle sorting query
  let sortType = "";
  let sort = "";
  const sortData = () => {
    if (localStorage.getItem("sortType")) {
      sortType = localStorage.getItem("sortType");
    } else {
      sortType = "";
    }

    if (sortType === "السعر من الاقل للاعلي") {
      sort = "+price";
    } else if (sortType === "السعر من الاعلي للاقل") {
      sort = "-price";
    } else if (sortType === "") {
      sort = "";
    } else if (sortType === "الاكثر مبيعا") {
      sort = "-sold";
    } else if (sortType === "الاعلي تقييما") {
      sort = "-ratingsQuantity";
    } else if (sortType === "الأعلي كمية") {
      sort = "-quantity";
    }
  };

  // Method to get products data by special page
  const getPage = async (page) => {
    let word = "";
    if (localStorage.getItem("searchWord")) {
      word = localStorage.getItem("searchWord");
    }
    sortData();
    let queryCategory = "";
    if (localStorage.getItem("queryCategory")) {
      queryCategory = localStorage.getItem("queryCategory");
    }
    let queryBrand = "";
    if (localStorage.getItem("queryBrand")) {
      queryBrand = localStorage.getItem("queryBrand");
    }
    let priceFrom = "";
    if (localStorage.getItem("priceFrom")) {
      priceFrom = localStorage.getItem("priceFrom");
    }
    let priceTo = "";
    if (localStorage.getItem("priceTo")) {
      priceTo = localStorage.getItem("priceTo");
    }

    let priceFromString = ""
    if (priceFrom === "" || priceFrom <= 0) {
      priceFromString = "";
    } else {
      priceFromString = `&price[gte]=${priceFrom}`;
    }

    let priceToString = ""
    if (priceTo === "" || priceTo <= 0) {
      priceToString = "";
    } else {
      priceToString = `&price[lte]=${priceTo}`;
    }
    await dispatch(
      getAllProductsQuerySearch(
        `limit=${productsLimit}&sort=${sort}&page=${page}&keyword=${word}&${queryCategory}&${queryBrand}${priceFromString}${priceToString}`
      )
    );
  };

  // method to get products data from database by search query
  const getProducts = async () => {
    let word = "";
    if (localStorage.getItem("searchWord")) {
      word = localStorage.getItem("searchWord");
    }
    sortData();
    let queryCategory = "";
    if (localStorage.getItem("queryCategory")) {
      queryCategory = localStorage.getItem("queryCategory");
    }
    let queryBrand = "";
    if (localStorage.getItem("queryBrand")) {
      queryBrand = localStorage.getItem("queryBrand");
    }

    let priceFrom = "";
    if (localStorage.getItem("priceFrom")) {
      priceFrom = localStorage.getItem("priceFrom");
    }
    let priceTo = "";
    if (localStorage.getItem("priceTo")) {
      priceTo = localStorage.getItem("priceTo");
    }

    let priceFromString = ""
    if (priceFrom === "" || priceFrom <= 0) {
      priceFromString = "";
    } else {
      priceFromString = `&price[gte]=${priceFrom}`;
    }

    let priceToString = ""
    if (priceTo === "" || priceTo <= 0) {
      priceToString = "";
    } else {
      priceToString = `&price[lte]=${priceTo}`;
    }
    try {
      await dispatch(
        getAllProductsQuerySearch(
          `limit=${productsLimit}&sort=${sort}&keyword=${word}&${queryCategory}&${queryBrand}${priceFromString}${priceToString}`
        )
      );
    } catch (error) {
      if (error?.response.status === 400) {
        notify(error.response.data.errors[0].msg, "error");
        return;
      } else {
        notify(error.response.data.message, "error");
      }
    }
  };
  useEffect(() => {
    getPage();
  }, []);

  return [items, pageCount, getPage, getProducts];
};

export default ViewSearchProductHook;
