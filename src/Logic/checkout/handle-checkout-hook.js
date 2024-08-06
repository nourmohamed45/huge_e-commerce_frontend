import { useNavigate } from "react-router-dom";
import notify from "../useNotification";

const HandleCheckoutHook = (cartItems) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (cartItems?.length >= 1) {
      navigate(`/order/paymethods`);
    } else {
      notify("يجب ان يكون هناك منتج علي الاقل في العربة", "warn");
    }
  };

  return [handleCheckout];
};

export default HandleCheckoutHook;
