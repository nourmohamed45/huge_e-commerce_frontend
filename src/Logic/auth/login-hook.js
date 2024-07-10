import { useCallback, useEffect, useState } from "react";
import notify from "../useNotification";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../Redux/actions/authAction";

const LoginHook = () => {
  const dispatch = useDispatch();

  const loginData = useSelector((state) => state.authReducer.user);

  const validateLoginInput = (formData) => {
    const errors = {};
    if (!formData.email.trim()) {
      errors.email = "البريد الإلكتروني مطلوب";
    }
    if (!formData.password) {
      errors.password = "كلمة السر مطلوبة";
    } else if (formData.password.length < 7) {
      errors.password = "كلمة السر يجب أن تكون على الأقل 7 أحرف";
    }

    return errors;
  };
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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

    const errors = validateLoginInput(formData);

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
        loginUser({
          email: formData.email,
          password: formData.password,
        })
      );
      notify("Login successful", "success");
      setTimeout(() => {
        window.location.href = "/";
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
      if (loginData) {
        if (loginData?.data?.token) {
          localStorage.setItem("token", loginData.data.token);
          localStorage.setItem("user", JSON.stringify(loginData.data.data));
        } else {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
        }
      }
    }
  }, [loading, loginData]);

  return [
    formData,
    loading,
    handleChange,
    handleSubmit,
    togglePasswordVisibility,
    showPassword,
  ];
};

export default LoginHook;
