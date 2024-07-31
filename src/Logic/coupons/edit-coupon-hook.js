import { useCallback, useEffect, useRef, useState } from "react";
import notify from "../useNotification";
import { useDispatch, useSelector } from "react-redux";
import {
  getSpecificCoupon,
  updateSpecificCoupon,
} from "../../Redux/actions/couponsAction";
import { useNavigate } from "react-router-dom";
import FormatDateHook from "../general/format-date-hook";

const EditCouponHook = (id) => {
  const dispatch = useDispatch();
  const specificCoupon = useSelector(
    (state) => state.couponReducer.specificCoupon
  );

  const [formData, setFormData] = useState({
    code: "",
    discount: "",
    expiryDate: "",
  });
  const [loading, setLoading] = useState(false);
  const [loadingData, setLoadingData] = useState(true);
  const dateRef = useRef();

  const navigate = useNavigate();

  // Get Specific Coupon data to show it in input fields
  useEffect(() => {
    const getSpecificCouponData = async () => {
      try {
        setLoadingData(true);
        await dispatch(getSpecificCoupon(id));
      } catch (e) {
        notify(e.response?.data?.message || "An error occurred", "error");
        if (e?.response?.status === 400) {
          notify(e.response.data.errors[0].msg, "error");
        }
      } finally {
        setLoadingData(false);
      }
    };
    getSpecificCouponData();
  }, [dispatch, id]);

  // Enter previous coupon data into field
  useEffect(() => {
    if (specificCoupon?.data) {
      const [formattedDate] = FormatDateHook(specificCoupon?.data?.expire);
      setFormData({
        code: specificCoupon.data.name || "",
        discount: specificCoupon.data.discount || "",
        expiryDate: formattedDate || "",
      });
    }
  }, [specificCoupon]);

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

  // Handle submit input fields
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateCouponInputs(formData);
    if (Object.keys(errors).length > 0) {
      // There are validation errors
      Object.values(errors).forEach((error) => {
        notify(error, "error");
      });
      return;
    }
    try {
      setLoading(true);
      await dispatch(
        updateSpecificCoupon(id, {
          name: formData.code,
          expire: formData.expiryDate,
          discount: formData.discount,
        })
      );

      notify("تم تعديل الكوبون بنجاح", "success");

      setTimeout(() => {
        navigate(`/admin/addcoupons`);
      }, 1000);
      // setFormData({ code: "", discount: "", expiryDate: "" });
    } catch (e) {
      notify(e.response?.data?.message || "An error occurred", "error");
      if (e?.response?.status === 400) {
        notify(e.response.data.errors[0].msg, "error");
      }
    } finally {
      setLoading(false);
    }
  };

  return [formData, handleChange, handleSubmit, loading, dateRef, loadingData];
};

export default EditCouponHook;
