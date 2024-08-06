import { useEffect, useState, useCallback } from "react";
import notify from "../useNotification";
import { useDispatch, useSelector } from "react-redux";
import { getAllItemsInCart } from "../../Redux/actions/cartActions";

const GetLoggedUserCartHook = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [itemsNumber, setItemsNumber] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [totalCartPrice, setTotalCartPrice] = useState(0);
  const [cartID, setCartID] = useState("0");
  const allItemsInCart = useSelector((state) => state.cartReducer.cartItems);

  const getCartItems = useCallback(async () => {
    try {
      await dispatch(getAllItemsInCart());
    } catch (error) {
      if (error?.response?.status === 400) {
        notify(error.response.data.errors[0].msg, "error");
      }
    } finally {
      setLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    getCartItems();
  }, [getCartItems]);

  useEffect(() => {
    if (!loading && allItemsInCart) {
      setItemsNumber(
        allItemsInCart.status === "success" ? allItemsInCart.numOfCartItems : 0
      );
      setCartItems(
        allItemsInCart.status === "success" ? allItemsInCart.data.products : []
      );
      setTotalCartPrice(
        allItemsInCart.status === "success"
          ? allItemsInCart.data.totalCartPrice
          : 0
      );
      setCartID(
        allItemsInCart.status === "success"
          ? allItemsInCart.data._id
          : "0"
      );
    }
  }, [loading, allItemsInCart]);

  return [loading, allItemsInCart, itemsNumber, cartItems, totalCartPrice, cartID];
};

export default GetLoggedUserCartHook;
