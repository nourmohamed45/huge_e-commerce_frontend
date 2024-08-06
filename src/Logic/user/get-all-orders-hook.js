import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../../Redux/actions/orderActions";
import notify from "../useNotification";

const GetAllOrdersHook = () => {
  const orderLimit = 3;
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(0);
  const [paginate, setPaginate] = useState(0);
  const [ordersData, setOrdersData] = useState(0);
  const allOrders = useSelector((state) => state.orderReducer.getAllOrders);

  let userName = "";
  if (user != null) {
    userName = user.name;
  }

  const handleGetAllOrders = async () => {
    try {
      setLoading(true);
      await dispatch(getAllOrders(orderLimit, paginate?.currentPage));
    } catch (error) {
      notify(
        error.message || "An error occurred while fetching orders",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetAllOrders();
  }, []);

  useEffect(() => {
    if (allOrders?.results) {
      setResult(allOrders.results);
      console.log(allOrders);
    }
    if (allOrders?.paginationResult) {
      setPaginate(allOrders.paginationResult);
      console.log(allOrders.paginationResult);
    }
    if (allOrders?.data) {
      setOrdersData(allOrders.data);
      console.log(allOrders.data);
    }
  }, [allOrders]);

  const onPress = async (page) => {
    setLoading(true);

    try {
      await dispatch(getAllOrders(orderLimit, page));
    } catch (error) {
      notify(error.response?.data?.message || "An error occurred", "error");
      if (error?.response?.status === 400) {
        notify(error.response.data.errors[0]?.msg || "Invalid request", "error");
      }
    } finally {
      setLoading(false);
    }
  };

  return [loading, userName, result, paginate, ordersData, onPress];
};

export default GetAllOrdersHook;
