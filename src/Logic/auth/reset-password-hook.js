import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import notify from "../useNotification";
import { resetPassword } from "../../Redux/actions/authAction";

const ResetPasswordHook = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    newPassword: "",
  });
  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const navigate = useNavigate();

  const res = useSelector((state) => state.authReducer.resetPassword);

  const validateResetPasswordInput = (formData) => {
    const errors = {};
    
    if (!formData.newPassword) {
      errors.newPassword = "كلمة المرور مطلوبة";
    } else if (formData.newPassword.length < 8) {
      errors.newPassword = "يجب أن تكون كلمة المرور 8 أحرف على الأقل";
    }

    if (formData.newPassword !== formData.confirmPassword) {
      errors.confirmPassword = "كلمات المرور غير متطابقة";
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

    const errors = validateResetPasswordInput(formData);

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
        resetPassword({
          email: localStorage.getItem("user-email"),
          newPassword: formData.newPassword,
        })
      );
      setTimeout(() => {
        navigate("/login");
      }, 2000);
      notify("تم تغيير كلمة السر بنجاح", "success");
    } catch (error) {
      notify(error.response.data.message, "error");
      if (error?.response.status === 400) {
        notify(error.response.data.errors[0].msg, "error");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (loading === false) {
      if (res) {
        if (res?.data?.status === "fail") {
          notify("الكود خاطئ او انتهت صلاحيته", "error");
        }
      }
    }
  }, [loading]);

  return {
    formData,
    handleChange,
    handleSubmit,
    loading,
    showPassword,
    togglePasswordVisibility,
    showConfirmPassword,
    toggleConfirmPasswordVisibility,
  };
};

export default ResetPasswordHook;
