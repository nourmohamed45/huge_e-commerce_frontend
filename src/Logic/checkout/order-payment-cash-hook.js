import { useEffect, useState } from "react";
import notify from "../useNotification";
import { useDispatch, useSelector } from "react-redux";
import { getSpecificAddress } from "../../Redux/actions/userAddressAction";
import { useNavigate } from "react-router-dom";
import GetLoggedUserCartHook from "../cart/get-logged-user-cart-hook";
import { createOrderCash } from "../../Redux/actions/checkoutActions";
import { getAllItemsInCart } from "../../Redux/actions/cartActions";

const OrderPaymentCashHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [, , , , , cartID] = GetLoggedUserCartHook();

  console.log(cartID);

  const specificAddress = useSelector(
    (state) => state.userAddressReducer.specificAddress
  );

  const [addressDetails, setAddressDetails] = useState([]);

  const [loadingData, setLoadingData] = useState(false);
  const [orderLoading, setOrderLoading] = useState(false);

  // when change Address selection
  const handleChangeSelection = (e) => {
    setAddressDetails([]);

    if (e.target.value !== "default") {
      getSpecificAddressData(e.target.value);
    }
    console.log(e.target.value);
  };

  // get specific address data for the user
  const getSpecificAddressData = async (id) => {
    try {
      setLoadingData(true);
      await dispatch(getSpecificAddress(id));
    } catch (e) {
      console.log(e);
    } finally {
      setLoadingData(false);
    }
  };

  // Enter previous Address data into field
  useEffect(() => {
    if (specificAddress?.data) {
      setAddressDetails(specificAddress.data);
    } else {
      setAddressDetails([]);
    }
  }, [specificAddress]);

  console.log(addressDetails);

  // When the user clicks on Order Cash
  const handleCreateOrderCash = async () => {
    if (cartID === "0") {
      notify("من فضلك أضف منتجات الي العربة اولا", "warn");
      return;
    }

    if (addressDetails.length === 0) {
      notify("يجب تحديد عنوان الشحن", "warn");
      return;
    }

    try {
      setOrderLoading(true);
      await dispatch(
        createOrderCash(cartID, {
          shippingAddress: {
            details: addressDetails.details,
            phone: addressDetails.phone,
            city: addressDetails.city,
            postalCode: addressDetails.postalCode,
          },
        })
      );
      notify("تم إتمام الشراء بنجاح", "success");
      setTimeout(async () => {
        await dispatch(getAllItemsInCart())
      }, 0);

      setTimeout(() => {
        navigate(`/user/allorders`)
      }, 1500);
    } catch (error) {
      notify(error.response.data.message, "error");
      if (error?.response.status === 400) {
        notify(error.response.data.errors[0].msg, "error");
      }
    } finally {
      setOrderLoading(false);
    }
  };

  return [
    loadingData,
    handleChangeSelection,
    addressDetails,
    handleCreateOrderCash,
    orderLoading
  ];
};

export default OrderPaymentCashHook;
