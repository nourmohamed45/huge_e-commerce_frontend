import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  addToWishList,
  removeFromWishList,
} from "../../Redux/actions/wishlistAction";
import notify from "../useNotification";

const AddRemoveFromWishlistHook = (id, wishListData) => {
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(wishListData.includes(id));
  }, [wishListData, id]);

  const handleFav = useCallback(async () => {
    try {
      if (isFavorite) {
        await dispatch(removeFromWishList(id));
        

        notify("تم الإزالة من المفضلة", "warn");
      } else {
        await dispatch(addToWishList({ productId: id }));
        notify("تم الإضافة الي المفضلة", "success");
      }
      setIsFavorite(!isFavorite);
    } catch (error) {
      notify(
        error?.response.status === 401
          ? notify("You have to login first", "error")
          : error.response?.data?.message || "An error occurred",
        "error"
      );
      if (error?.response?.status === 400) {
        notify(error.response.data.errors[0].msg, "error");
      }
    }
  }, [dispatch, id, isFavorite]);

  return [isFavorite, handleFav];
};

export default AddRemoveFromWishlistHook;
