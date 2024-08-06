import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../useNotification";
import {
  getSpecificAddress,
  updateSpecificAddress,
} from "../../Redux/actions/userAddressAction";
import { useNavigate } from "react-router-dom";

const EditAddressHook = (id) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const specificAddress = useSelector(
    (state) => state.userAddressReducer.specificAddress
  );

  const [formData, setFormData] = useState({
    alias: "",
    details: "",
    phone: "",
    city: "",
    postalCode: "",
  });
  const [loading, setLoading] = useState(false);
  const [loadingData, setLoadingData] = useState(true);

  // Get Specific Address data to show it in input fields
  useEffect(() => {
    const getSpecificAddressData = async () => {
      try {
        setLoadingData(true);
        await dispatch(getSpecificAddress(id));
      } catch (e) {
        notify(e.response?.data?.message || "An error occurred", "error");
        if (e?.response?.status === 400) {
          notify(e.response.data.errors[0].msg, "error");
        }
      } finally {
        setLoadingData(false);
      }
    };
    getSpecificAddressData();
  }, [dispatch, id]);

  // Enter previous Address data into field
  useEffect(() => {
    if (specificAddress?.data) {
      setFormData({
        alias: specificAddress.data.alias || "",
        details: specificAddress.data.details || "",
        phone: specificAddress.data.phone || "",
        city: specificAddress.data.city || "",
        postalCode: specificAddress.data.postalCode || "",
      });
    }
  }, [specificAddress]);

  // Inputs Validation
  const validateAddressInputs = (formData) => {
    const errors = {};

    if (!formData.alias.trim()) {
      errors.alias = "الاسم المستعار مطلوب";
    }

    if (!formData.details.trim()) {
      errors.details = "التفاصيل مطلوبة";
    }

    if (!formData.phone.trim()) {
      errors.phone = "رقم الهاتف مطلوب";
    } else if (!/^(010|011|012|015)\d{4}\d{4}$/.test(formData.phone)) {
      errors.phone = "أرقام هواتف مصرية فقط";
    }

    if (!formData.city.trim()) {
      errors.city = "المدينة مطلوبة";
    }

    if (!formData.postalCode.trim()) {
      errors.postalCode = "الرمز البريدي مطلوب";
    } else if (!/^\d+$/.test(formData.postalCode)) {
      errors.postalCode = "الرمز البريدي يجب أن يحتوي على أرقام فقط";
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

    const errors = validateAddressInputs(formData);

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
        updateSpecificAddress(id, {
          alias: formData.alias,
          details: formData.details,
          phone: formData.phone,
          city: formData.city,
          postalCode: formData.postalCode,
        })
      );
      notify("تم إضافة العنوان بنجاح", "success");
      setTimeout(() => {
        navigate(`/user/alladdresses`);
      }, 1000);

      // Clear form fields
      setFormData({
        alias: "",
        details: "",
        phone: "",
        city: "",
        postalCode: "",
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

  return [formData, handleChange, handleSubmit, loading, loadingData];
};

export default EditAddressHook;
