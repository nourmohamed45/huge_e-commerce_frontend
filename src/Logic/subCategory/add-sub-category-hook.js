// import react Hooks
import { useEffect, useState } from "react";

// import notification Alert component
import notify from "../useNotification";

// import Redux
import { useDispatch, useSelector } from "react-redux";
import { createSubCategory } from "../../Redux/actions/subCategoryActions";
import { getAllCategory } from "../../Redux/actions/categoryActions";

const AddSubCategoryHook = () => {
  const dispatch = useDispatch();

  // ================================= All Use Selectors =================================
  // get last category state from redux
  const categoryData = useSelector((state) => state.allCategory.category);

  // recieve response state from redux
  const subCategoryData = useSelector(
    (state) => state.allSubCategories.subCategory
  );

  // ================================= the whole states =================================
  const [subCategoryName, setSubCategoryName] = useState("");
  const [categoryId, setCategoryId] = useState("default");
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  // get all categories from redux
  useEffect(() => {
    if (!navigator.onLine) {
      notify("هناك مشكله في الاتصال بالانترنت", "warn");
      return;
    }

    dispatch(getAllCategory());
  }, [dispatch]);

  // on change drop down menu
  const handleChangeSelection = (e) => {
    const selectedCategoryId = e.target.value;
    setCategoryId(selectedCategoryId);
    console.log(selectedCategoryId);
  };

  // change subCategory name
  const onChangeSubCategoryName = (value) => {
    setSubCategoryName(value);
  };

  // to  handle submission on save data
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!navigator.onLine) {
      notify("هناك مشكله في الاتصال بالانترنت", "warn");
      return;
    }

    try {
      // the whole conditional validation
      if (subCategoryName === "" && categoryId === "default") {
        notify("من فضلك قم بإدخال البيانات", "error");
        return;
      } else if (categoryId === "default") {
        notify("من فضلك قم بإختيار التصنيف الرئيسي", "error");
        return;
      } else if (subCategoryName === "") {
        notify("من فضلك قم بإدخال اسم التصنيف الفرعي", "error");
        return;
      }

      setLoading(true);
      setIsPress(true);

      await dispatch(
        createSubCategory({ name: subCategoryName, category: categoryId })
      );

      setLoading(false);
      setIsPress(false);
    } catch (e) {
      // show  error notification
      notify(e.response.data.message, "error");
      setIsPress(false);
      // if response is 400 error
      if (e?.response.status === 400) {
        notify(e.response.data.errors[0].msg, "error");
      }
    }
  };

  // Happen after loading and recieve response correctly
  useEffect(() => {
    if (!loading) {
      // reset input fileds
      setSubCategoryName("");
      setCategoryId("default");
      setLoading(true);

      // showing success notification
      if (subCategoryData?.status === 201) {
        notify("تم الأضافة بنجاح", "success");
      }
    }
  }, [loading, subCategoryData]);

  // return to listen from AdminAddSubCategory.jsx component
  return [
    isPress,
    loading,
    subCategoryName,
    onChangeSubCategoryName,
    handleChangeSelection,
    categoryData,
    handleSubmit,
  ];
};

export default AddSubCategoryHook;
