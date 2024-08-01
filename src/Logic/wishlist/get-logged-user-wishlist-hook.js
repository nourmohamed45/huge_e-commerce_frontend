import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductFromWishList } from "../../Redux/actions/wishlistAction";
import notify from "../useNotification";

const GetLoggedUserWishlistHook = () => {
  const [loading, setLoading] = useState(false);
  const [wishListData, setWishListData] = useState([]);
  const dispatch = useDispatch();
  const res = useSelector((state) => state.wishListReducer.getAllWishList);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const getAllWishListProduct = async () => {
        try {
          setLoading(true);
          await dispatch(getAllProductFromWishList());
        } catch (error) {
          notify(error.response?.data?.message || "An error occurred", "error");
          if (error?.response?.status === 400) {
            notify(error.response.data.errors[0]?.msg || "Invalid request", "error");
          }
        } finally {
          setLoading(false);
        }
      };
      getAllWishListProduct();
    }
  }, [dispatch]);

  useEffect(() => {
    if (!loading && res?.data) {
      if (localStorage.getItem("token")) {
        if (Array.isArray(res.data)) {
          setWishListData(res.data.map((item) => item._id));
        } else {
          notify("Invalid data format received", "error");
        }
      }
    }
  }, [loading, res]);

  return [wishListData];
};

export default GetLoggedUserWishlistHook;
