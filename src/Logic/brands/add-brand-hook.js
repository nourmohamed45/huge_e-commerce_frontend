import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// import images
import avatar from "../../assets/images/avatar.png";
import notify from "../useNotification";
import { createBrand } from "../../Redux/actions/brandActions";
const AddBrandHook = () => {
  // for dispatching actions
  const dispatch = useDispatch();

  // for recieving data from reducers
  const res = useSelector((state) => state.allBrands.brands);

  const [img, setImg] = useState(avatar);
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);


  // ============================== Functions =============================

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
  const handlesubmit = async (event) => {
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
      await dispatch(createBrand(formData));

      setLoading(false);
      setIsPress(false);
    } catch (e) {
      notify(e.response.data.message, "error");
      setIsPress(false);

      if (e?.response.status === 400) {
        notify(e.response.data.errors[0].msg, "error");
      }
    }
  };

  // Happen after loading and recieve response successfully
  useEffect(() => {
    if (!loading) {
      setImg(avatar);
      setName("");
      setSelectedFile(null);
      setLoading(true);
      if (res?.status === 201) {
        notify("تم الأضافة بنجاح", "success");
      }
    }
  }, [loading, res])
  
  return [img, onChangeName, onImageChange, handlesubmit, name, isPress, loading]
};

export default AddBrandHook;
