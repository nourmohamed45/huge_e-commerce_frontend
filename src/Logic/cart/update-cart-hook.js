import { useState } from "react";
import { useDispatch } from "react-redux";
import notify from "../useNotification";
import { getAllItemsInCart, updateItemCount } from "../../Redux/actions/cartActions";

const UpdateCartHook = (itemID, item) => {
  const dispatch = useDispatch();

  const [itemCount, setItemCount] = useState(item.count);
  const [updateLoading, setUpdateLoading] = useState(false);


  const handleChange = (e) => {
    setItemCount(e.target.value);
  }

  const applyItemCount = async () => {
    setUpdateLoading(true);

    try {
      await dispatch(
        updateItemCount(itemID, {
          count: itemCount,
        })
      );

      setTimeout(async () => {
        await dispatch(getAllItemsInCart())
      }, 0);
    } catch (error) {
      notify(error.response.data.message, "error");
      if (error?.response.status === 400) {
        notify(error.response.data.errors[0].msg, "error");
      }
    } finally {
      setUpdateLoading(false);
    }
  };


  return [itemCount, handleChange, updateLoading, applyItemCount]
};

export default UpdateCartHook;
