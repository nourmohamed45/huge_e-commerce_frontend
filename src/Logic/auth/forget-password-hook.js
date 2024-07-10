import { useCallback, useEffect, useState } from "react";
import notify from "../useNotification";
import { useDispatch, useSelector } from "react-redux";
import { forgetPassword } from "../../Redux/actions/authAction";
import { useNavigate } from "react-router-dom";

const ForgetPasswordHook = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const res = useSelector((state) => state.authReducer.forgotPassword);

  const validateLoginInput = (email) => {
    const errors = {};
    if (!email.trim()) {
      errors.email = "البريد الإلكتروني مطلوب";
    }

    return errors;
  };

  const handleChange = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const errors = validateLoginInput(email);

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
        forgetPassword({
          email,
        })
      );
      localStorage.setItem("user-email", email);

      setTimeout(() => {
        navigate("/user/verifyPassword");
      }, 2000);
      notify("Password reset email sent", "success");
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
        console.log(res);
        if (res?.data?.status === "Success") {
          setTimeout(() => {
            navigate("/user/verify-code");
          }, 1000);
        }
        if (res?.data?.status === "fail") {
          notify("هذا الحساب غير موجود لدينا", "error");
        }
      }
    }
  }, [loading]);

  return { email, handleChange, handleSubmit, loading };
};

export default ForgetPasswordHook;
