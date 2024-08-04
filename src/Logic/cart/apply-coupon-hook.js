import { useEffect, useState, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../useNotification";
import {
  applyCoupon,
  getAllItemsInCart,
} from "../../Redux/actions/cartActions";

const ApplyCouponHook = () => {
  const dispatch = useDispatch();
  const [couponCode, setCouponCode] = useState("");
  const [couponLoading, setCouponLoading] = useState(false);
  
  const couponResponse = useSelector((state) => state.cartReducer.cartItems);

  const { totalPriceBeforeCoupon, priceAfterCoupon, couponName } = useMemo(() => {
    if (couponResponse?.data?.coupon) {
      return {
        totalPriceBeforeCoupon: couponResponse.data.totalCartPrice,
        priceAfterCoupon: couponResponse.data.totalAfterDiscount,
        couponName: couponResponse.data.coupon,
      };
    }
    return { totalPriceBeforeCoupon: null, priceAfterCoupon: null, couponName: "" };
  }, [couponResponse]);

  // Update couponCode when couponName changes
  useEffect(() => {
    if (couponName) {
      setCouponCode(couponName);
    }
  }, [couponName]);

  const handleCouponChange = useCallback((e) => {
    setCouponCode(typeof e === 'string' ? e : e.target.value);
  }, []);

  const handleCouponSubmit = useCallback(async (e) => {
    e.preventDefault();
    setCouponLoading(true);
    if (couponCode === "") {
      notify("يرجى إدخال رمز الكوبون", "error");
      setCouponLoading(false);
      return;
    }
    try {
      await dispatch(applyCoupon({ couponName: couponCode }));
      notify("تم تطبيق كوبون الخصم بنجاح", "success");
      dispatch(getAllItemsInCart());
    } catch (error) {
      notify(error.response.data.message, "error");
      if (error?.response.status === 400) {
        notify(error.response.data.errors[0].msg, "error");
      }
    } finally {
      setCouponLoading(false);
    }
  }, [couponCode, dispatch]);

  useEffect(() => {
    dispatch(getAllItemsInCart());
  }, [dispatch]);

  return [
    couponCode,
    couponLoading,
    handleCouponChange,
    handleCouponSubmit,
    totalPriceBeforeCoupon,
    priceAfterCoupon,
    couponName,
  ];
};

export default ApplyCouponHook;