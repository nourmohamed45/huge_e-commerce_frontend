import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../useNotification";
import { createCoupon, getAllCoupons } from "../../Redux/actions/couponsAction";

const AddCouponHook = () => {
  const limitCouponsPerPage = 5;
  const dispatch = useDispatch();

  const allCoupons = useSelector((state) => state.couponReducer.coupons);

  const [formData, setFormData] = useState({
    code: "",
    discount: "",
    expiryDate: "",
  });
  const [loading, setLoading] = useState(false);

  const dateRef = useRef();

  // Inputs Validation
  const validateCouponInputs = (formData) => {
    const errors = {};

    if (!formData.code.trim()) {
      errors.code = "كود القسيمة مطلوب";
    }
    if (!formData.discount) {
      errors.discount = "تكلفة القسيمة مطلوبة";
    } else if (formData.discount < 1 || formData.discount > 100) {
      errors.discount = "تكلفة القسيمة يجب أن تكون بين 1 و 100";
    }

    if (!formData.expiryDate) {
      errors.expiryDate = "تاريخ الإنتهاء مطلوب";
    } else {
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Set time to beginning of the day
      const expiryDate = new Date(formData.expiryDate);

      if (expiryDate < today) {
        errors.expiryDate = "تاريخ الإنتهاء يجب أن يكون في المستقبل";
      }
    }

    return errors;
  };

  // Handle Input in writing
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }, []);

  // Handle submit input fileds
  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true);

    const errors = validateCouponInputs(formData);

    if (Object.keys(errors).length > 0) {
      // There are validation errors
      Object.values(errors).forEach((error) => {
        notify(error, "error");
      });
      setLoading(false);
      return;
    }

    try {
      setLoading(true);

      // Await the dispatch promise
      await dispatch(
        createCoupon({
          name: formData.code,
          expire: formData.expiryDate,
          discount: formData.discount,
        })
      );
      setTimeout(async () => {
        await dispatch(getAllCoupons(limitCouponsPerPage, 1));
      }, 500);
      notify("تم إضافة كوبون بنجاح", "success");

      // Clear form fields
      setFormData({
        code: "",
        discount: "",
        expiryDate: "",
      });

      setLoading(false);
    } catch (e) {
      notify(e.response.data.message, "error");

      if (e?.response.status === 400) {
        notify(e.response.data.errors[0].msg, "error");
      }
      setLoading(false);
    }
  };

  // Get All Coupons from Database
  useEffect(() => {
    const allcouponsAction = async () => {
      try {
        await dispatch(getAllCoupons(limitCouponsPerPage));
      } catch (e) {
        notify(e.response.data.message, "error");

        if (e?.response.status === 400) {
          notify(e.response.data.errors[0].msg, "error");
        }
      }
    };
    allcouponsAction();
  }, [dispatch]);

  // Get all coupons data by page
  const onPress = async (page) => {
    try {
      await dispatch(getAllCoupons(limitCouponsPerPage, page));
    } catch (e) {
      notify(e.response.data.message, "error");

      if (e?.response.status === 400) {
        notify(e.response.data.errors[0].msg, "error");
      }
    }
  };

  // Get current page count
  const pagination = useMemo(() => {
    return allCoupons?.paginationResult || null;
  }, [allCoupons]);

  const pageCount = useMemo(() => {
    return pagination?.numberOfPages || 0;
  }, [pagination]);

  return [
    formData,
    handleChange,
    handleSubmit,
    loading,
    dateRef,
    allCoupons,
    onPress,
    pageCount,
  ];
};

export default AddCouponHook;
