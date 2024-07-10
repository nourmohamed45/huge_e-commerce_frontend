import { useCallback, useEffect, useState } from "react";
import notify from "../useNotification";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { verifyResetCode } from "../../Redux/actions/authAction";

const VerifyPasswordHook = () => {
  const dispatch = useDispatch();
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const res = useSelector((state) => state.authReducer.verifyResetCode);

  const validateLoginInput = (code) => {
    const errors = {};
    if (!code.trim()) {
      errors.code = "كود التفعيل مطلوب";
    }

    return errors;
  };

  const handleChange = useCallback((e) => {
    setCode(e.target.value);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const errors = validateLoginInput(code);

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
        verifyResetCode({
          resetCode: code,
        })
      );
      setTimeout(() => {
        navigate("/user/resetPassword");
      }, 2000);
      notify("Code sent successfuly ", "success");
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
            navigate("/user/reset-password");
          }, 1500);
        }
        if (res?.data?.status === "fail") {
          notify("الكود خاطئ او انتهت صلاحيته", "error");
        }
      }
    }
  }, [loading]);

  return { code, handleChange, handleSubmit, loading };
};

export default VerifyPasswordHook;
