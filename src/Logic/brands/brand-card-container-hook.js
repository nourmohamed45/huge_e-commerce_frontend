import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBrands } from "../../Redux/actions/brandActions";

// for brand section in home page
const BrandCardContainerHook = () => {
  const brandsLimit = 6;

  const dispatch = useDispatch();

  // get last brand and loading state from redux
  const { brands, loading } = useSelector((state) => state.allBrands);

  useEffect(() => {
    if (!brands || brands.length === 0) {
      dispatch(getAllBrands(brandsLimit));
    }
  }, [dispatch, brands]);

  return { brands, loading };
};

export default BrandCardContainerHook;
