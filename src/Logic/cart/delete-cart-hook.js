import { useDispatch } from "react-redux"
import { clearCart, deleteItemFromCart, getAllItemsInCart } from "../../Redux/actions/cartActions";
import notify from "../useNotification";
import { useState } from "react";

const DeleteCartHook = (itemID) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleDeleteCart = async () => {
    setLoading(true);
    try {
      await dispatch(clearCart());
      setTimeout(async () => {
        await dispatch(getAllItemsInCart())
      }, 0);
    } catch (error) {
      if (error?.response?.status === 400) {
        notify(error.response.data.errors[0].msg, "error");
      }
    } finally {
      setLoading(false);
    }
  }

  const handleDeleteSpecificItemFromCart = async () => {
    setLoading(true);
    try {
      await dispatch(deleteItemFromCart(itemID));
      notify("لقد تم حذف العنصر بنجاح", "success")
      setTimeout(async () => {
        await dispatch(getAllItemsInCart())
      }, 0);
    } catch (error) {
      if (error?.response?.status === 400) {
        notify(error.response.data.errors[0].msg, "error");
      }
    } finally {
      setLoading(false);
    }
  }


  return [loading, handleDeleteCart, handleDeleteSpecificItemFromCart];
}

export default DeleteCartHook