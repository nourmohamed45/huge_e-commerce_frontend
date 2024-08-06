import { useEffect, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import notify from "../useNotification";
import {
  getAllItemsInCart,
  updateItemCount,
} from "../../Redux/actions/cartActions";
import { getProductDetails } from "../../Redux/actions/productActions";

const UpdateCartHook = (itemID, item) => {
  const dispatch = useDispatch();
  const [itemCount, setItemCount] = useState(item.count);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [prodQuantity, setProdQuantity] = useState(0);

  const fetchProductDetails = useCallback(async () => {
    try {
      const response = await dispatch(getProductDetails(item?.product?._id));
      setProdQuantity(response.data.quantity);
    } catch (error) {
      const errorMessage =
        error?.response?.data?.errors?.[0]?.msg ||
        error?.response?.data?.message ||
        "An error occurred";
      notify(errorMessage, "error");
    }
  }, [dispatch, item?.product?._id]);

  useEffect(() => {
    fetchProductDetails();
  }, [fetchProductDetails]);

  const handleChange = (e) => {
    const newCount = parseInt(e.target.value, 10);
    if (!isNaN(newCount) && newCount > 0) {
      setItemCount(newCount);
    }
  };

  const applyItemCount = async () => {
    setUpdateLoading(true);
    try {
      if (itemCount > prodQuantity) {
        notify("الكمية المطلوبة أكبر من الكمية المتوفرة", "error");
        return;
      }

      await dispatch(
        updateItemCount(itemID, {
          count: itemCount,
        })
      );
      
      notify("تم تحديث الكمية بنجاح", "success");
      
      await dispatch(getAllItemsInCart());
    } catch (error) {
      const errorMessage =
        error?.response?.data?.errors?.[0]?.msg ||
        error?.response?.data?.message ||
        "An error occurred";
      notify(errorMessage, "error");
    } finally {
      setUpdateLoading(false);
    }
  };

  return [itemCount, handleChange, updateLoading, applyItemCount, prodQuantity];
};

export default UpdateCartHook;