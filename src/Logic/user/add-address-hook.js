import { useCallback, useState } from "react";
import notify from "../useNotification";
import { useDispatch } from "react-redux";
import { createAddress } from "../../Redux/actions/userAddressAction";

const AddAddressHook = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    alias: "",
    details: "",
    phone: "",
    city: "",
    postalCode: "",
  });
  const [loading, setLoading] = useState(false);

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
    // setLoading(true);

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
        createAddress({
          alias: formData.alias,
          details: formData.details,
          phone: formData.phone,
          city: formData.city,
          postalCode: formData.postalCode,
        })
      );
      notify("تم إضافة العنوان بنجاح", "success");

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

  return [formData, handleChange, handleSubmit, loading];
};

export default AddAddressHook;
