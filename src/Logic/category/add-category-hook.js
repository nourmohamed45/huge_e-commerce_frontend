import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../useNotification";
import { createCategory } from "../../Redux/actions/categoryActions";

// Import Images
import avatar from "../../assets/images/avatar.png";

const AddCategoryHook = () => {
  // for dispatching actions
  const dispatch = useDispatch();

  // for recieving data from reducers
  const res = useSelector((state) => state.allCategory.category);

  // the whole states
  const [img, setImg] = useState(avatar);
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  //====================== Functions ===========================

  // to able typing on input field
  const onChangeName = (e) => {
    setName(e.target.value);
  };

  // when user select an image Save it
  const onImageChange = (e) => {
    const file = e.target?.files?.[0];
    if (file) {
      setImg(URL.createObjectURL(file));
      setSelectedFile(file);
    }
  };

  // save data on database
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (name === "" || selectedFile === null) {
        notify("من فضلك قم بملء البيانات", "warn");
        return; // Ensure early exit if there's an error
      }

      const formData = new FormData();
      formData.append("image", selectedFile);
      formData.append("name", name);

      setLoading(true);
      setIsPress(true);

      // Await the dispatch promise
      await dispatch(createCategory(formData));

      setLoading(false);
      setIsPress(false);
    } catch (error) {
      notify(error.response.data.message, "error");
      setIsPress(false);

      if (error?.response.status === 400) {
        notify(error.response.data.errors[0].msg, "error");
      }
    }
  };

  // Happen after loading and recieve response correctly
  useEffect(() => {
    if (!loading) {
      setName("");
      setSelectedFile(null);
      setImg(avatar);
      setLoading(true);
      if (res?.status === 201) {
        notify("تم الأضافة بنجاح", "success");
      }
    }
  }, [loading, res]);

  return [img, onImageChange, handleSubmit, name, onChangeName, isPress, loading];
};

export default AddCategoryHook;
