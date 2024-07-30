import { useCallback, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import notify from "../useNotification";
import { createCoupon } from "../../Redux/actions/couponsAction";

const AddCouponHook = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    code: "",
    discount: "",
    expiryDate: "",
  });
  const [loading, setLoading] = useState(false);
  const [isPress, setIsPress] = useState(false);

  const dateRef = useRef();

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

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

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
      setIsPress(true);

      // Await the dispatch promise
      await dispatch(
        createCoupon({
          name: formData.code,
          expire: formData.expiryDate,
          discount: formData.discount,
        })
      );
      notify("تم إضافة كوبون بنجاح", "success");

      // Clear form fields
      setFormData({
        code: "",
        discount: "",
        expiryDate: "",
      });

      setLoading(false);
      setIsPress(false);
    } catch (e) {
      notify(e.response.data.message, "error");
      setIsPress(false);

      if (e?.response.status === 400) {
        notify(e.response.data.errors[0].msg, "error");
      }
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    loading,
    isPress,
    dateRef,
  };
};

export default AddCouponHook;
