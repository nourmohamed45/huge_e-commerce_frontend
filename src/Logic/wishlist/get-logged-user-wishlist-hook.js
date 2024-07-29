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
          notify(error.response.data.message, "error");
          if (error?.response.status === 400) {
            notify(error.response.data.errors[0].msg, "error");
          }
        } finally {
          setLoading(false);
        }
      };
      getAllWishListProduct();
    }
  }, []);

  useEffect(() => {
    if (!loading && res.data) {
      if (localStorage.getItem("token")) {
        setWishListData(res.data.map((item) => item._id));
      }
    }
  }, [loading, res.data]);


  return [wishListData]
}

export default GetLoggedUserWishlistHook