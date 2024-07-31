import { useCallback, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import notify from "../useNotification";
import { useDispatch, useSelector } from "react-redux";
import { createNewUser } from "../../Redux/actions/authAction";

const RegisterHook = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const registerData = useSelector((state) => state.authReducer.createUser);

  const validateRegisterInput = (formData) => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = "اسم المستخدم مطلوب";
    }
    if (!formData.email.trim()) {
      errors.email = "البريد الإلكتروني مطلوب";
    } else if (
      !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(formData.email)
    ) {
      errors.email = "البريد الإلكتروني غير صالح";
    }
    if (!formData.password) {
      errors.password = "كلمة المرور مطلوبة";
    } else if (formData.password.length < 8) {
      errors.password = "يجب أن تكون كلمة المرور 8 أحرف على الأقل";
    }
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "كلمات المرور غير متطابقة";
    }
    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = "رقم الهاتف مطلوب";
    } else if (!/^(010|011|012|015)\d{4}\d{4}$/.test(formData.phoneNumber)) {
      errors.phoneNumber = "أرقام هواتف مصرية فقط";
    }
    return errors;
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
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

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }, []);

  // Save Data
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

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
        createNewUser({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          passwordConfirm: formData.confirmPassword,
          phone: formData.phoneNumber,
        })
      );
      notify("Registration successful", "success");
      setTimeout(() => {
        navigate(`/login`);
      }, 2000);
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
      if (registerData) {
        if (registerData?.data?.token) {
          localStorage.setItem("token", registerData.data.token);
        }
      }
    }
  }, [loading, registerData]);

  return [
    formData,
    loading,
    handleChange,
    handleSubmit,
    togglePasswordVisibility,
    toggleConfirmPasswordVisibility,
    showPassword,
    showConfirmPassword,
  ];
};

export default RegisterHook;
