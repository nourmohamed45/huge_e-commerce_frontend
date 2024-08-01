import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../useNotification";
import {
  updateUserPasswordProfile,
  updateUserProfile,
} from "../../Redux/actions/userProfileActions";

const EditUserProfileHook = () => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const userAfterChangePass = useSelector(
    (state) => state.userProfileReducer.updateUserPassword
  );

  const [show, setShow] = useState(false);
  const handleClose = useCallback(() => setShow(false), []);
  const handleShow = useCallback(() => setShow(true), []);

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: user?.name ?? "",
    phone: user?.phone ?? "",
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    password: "",
    passwordConfirm: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name,
        phone: user.phone,
      });
    }
  }, [user]);

  useEffect(() => {
    if (
      userAfterChangePass &&
      userAfterChangePass.data &&
      userAfterChangePass.data.token
    ) {
      localStorage.setItem(
        "token",
        userAfterChangePass.data.token
      );
    }
  }, [userAfterChangePass]);

  const validateInputs = useCallback((data) => {
    const errors = {};
    if (!data.name.trim()) errors.name = "Name is required";
    if (!data.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^(010|011|012|015)\d{8}$/.test(data.phone)) {
      errors.phone = "Invalid Egyptian phone number";
    }
    return errors;
  }, []);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }, []);

  const handlePasswordChange = useCallback((e) => {
    const { name, value } = e.target;
    setPasswordData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const errors = validateInputs(formData);
      if (Object.keys(errors).length > 0) {
        Object.values(errors).forEach((error) => notify(error, "error"));
        return;
      }

      try {
        setLoading(true);
        await dispatch(
          updateUserProfile({
            name: formData.name,
            phone: formData.phone,
          })
        );
        notify("تم تعديل البيانات بنجاح", "success");
        localStorage.setItem("user", JSON.stringify({ ...user, ...formData }));
        setUser({ ...user, ...formData });
        handleClose();
      } catch (error) {
        notify(
          error.message || "An error occurred while updating profile",
          "error"
        );
      } finally {
        setLoading(false);
      }
    },
    [formData, dispatch, user, handleClose, validateInputs]
  );

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      await dispatch(
        updateUserPasswordProfile({
          currentPassword: passwordData.currentPassword,
          password: passwordData.password,
          passwordConfirm: passwordData.passwordConfirm,
        })
      );
      notify("تم تعديل كلمة المرور بنجاح", "success");
      setPasswordData({
        currentPassword: "",
        password: "",
        passwordConfirm: "",
      });
    } catch (error) {
      notify(
        error.message || "An error occurred while updating profile",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  return [
    user,
    show,
    handleClose,
    handleShow,
    formData,
    handleChange,
    handleSubmit,
    loading,
    passwordData,
    handlePasswordChange,
    handlePasswordSubmit,
  ];
};

export default EditUserProfileHook;
