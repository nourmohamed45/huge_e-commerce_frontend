import { useState } from "react";
import { useDispatch } from "react-redux";
import notify from "../useNotification";
import { addToCart, getAllItemsInCart } from "../../Redux/actions/cartActions";

const AddToCartHook = (productID, items) => {
  const dispatch = useDispatch();
  const [choosenColor, setChoosenColor] = useState("");
  const [colorText, setColorText] = useState("");
  const [loading, setLoading] = useState(false);

  const colorClick = (index, color) => {
    console.log(index, color);
    setChoosenColor(index);
    setColorText(color);
  };

  const handleAddToCart = async () => {
    setLoading(true);

    if(items.availableColors.length >= 1) {
      if (colorText === "") {
        notify("يجب تحديد اللون", "warn");
        setLoading(false);
        return;
      }
    } else {
      setColorText("");
    }

    try {
      // Your form submission logic here
      await dispatch(
        addToCart({
          productId: productID,
          color: colorText,
        })
      );
      notify("تمت إضافة المنتج الي العربة بنجاح", "success");
      setTimeout(async () => {
        await dispatch(getAllItemsInCart())
      }, 0);
    } catch (error) {
      notify(error.response.data.message, "error");
      if (error?.response.status === 400) {
        notify(error.response.data.errors[0].msg, "error");
      }
    } finally {
      setLoading(false);
    }
  };

  return [loading, choosenColor, colorClick, colorText, handleAddToCart];
};

export default AddToCartHook;
