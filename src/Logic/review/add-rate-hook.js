import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import notify from "../useNotification";
import { useParams } from "react-router-dom";
import { createReview, getAllReviewsProduct } from "../../Redux/actions/reviewAction";
import { getProductDetails } from "../../Redux/actions/productActions";

const AddRateHook = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState({});

  useEffect(() => {
    if (localStorage.getItem("user") !== null) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  const validateRegisterInput = (formData) => {
    const errors = {};
    if (!formData.reviewText.trim()) {
      errors.reviewText = "من فضلك أضف تعليق";
    }

    if (!formData.reviewValue) {
      errors.reviewValue = "من فضلك اختر تقييم من 1 الي 5 نجوم";
    }

    return errors;
  };

  const [formData, setFormData] = useState({
    reviewText: "",
    reviewValue: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRatingChange = (newValue) => {
    setFormData((prevData) => ({
      ...prevData,
      reviewValue: newValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // handle validation errors
    const errors = validateRegisterInput(formData);
    if (Object.keys(errors).length > 0) {
      // There are validation errors
      Object.values(errors).forEach((error) => {
        notify(error, "error");
      });
      setLoading(false);
      return;
    }

    try {
      // Your form submission logic here
      await dispatch(
        createReview(id, {
          review: formData.reviewText,
          rating: formData.reviewValue,
        })
      );
      notify("تمت إضافة تقييم بنجاح", "success");

      setTimeout(async () => {
        await dispatch(getAllReviewsProduct(id, 1, 4));
        await dispatch(getProductDetails(id));
      }, 1000);
    } catch (error) {
      notify(error.response.data.message, "error");
      if (error?.response.status === 400) {
        notify(error.response.data.errors[0].msg, "error");
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    handleChange,
    handleRatingChange,
    handleSubmit,
    loading,
    user,
  };
};

export default AddRateHook;
