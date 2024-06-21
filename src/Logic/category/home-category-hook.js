// Hooks
import { useEffect } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../Redux/actions/categoryActions";

const HomeCategoryHook = () => {
  const dispatch = useDispatch();

  // get last category state from redux
  const categoryData = useSelector((state) => state.allCategory.category);
  // get last loading state from redux
  const loading = useSelector((state) => state.allCategory.loading);

  // for category background color
  const color = ["red", "green", "blue", "yellow", "violet", "purple"];

  useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch]);

  return [categoryData, loading, color];
};

export default HomeCategoryHook;
