import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBrands } from "../../Redux/actions/brandActions";

// for brand section in home page
const BrandCardContainerHook = () => {
  const bransLimit = 6;

  const dispatch = useDispatch();

  // get last brand state from redux
  const brand = useSelector((state) => state.allBrands.brands);
  // get last loading state from redux
  const loading = useSelector((state) => state.allBrands.loading);

  useEffect(() => {
    dispatch(getAllBrands(bransLimit));
  }, [dispatch]);

  return [brand, loading];
};

export default BrandCardContainerHook;
