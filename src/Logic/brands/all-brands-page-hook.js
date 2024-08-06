import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllBrands, getAllBrandsPage } from "../../Redux/actions/brandActions";


// for showing all brands in brand page
const AllBrandsPageHook = () => {
  const brandLimit = 6;
  const dispatch = useDispatch();

  // to get state from redux
  const brand = useSelector((state) => state.allBrands.brands);
  const loading = useSelector((state) => state.allBrands.loading);
  
  // when first load
  useEffect(() => {
    dispatch(getAllBrands(brandLimit));
  }, [dispatch]);

  // to get page count
  let pageCount = 0;
  if (brand?.paginationResult)
    pageCount = brand?.paginationResult?.numberOfPages;

  // when press pagination
  const getPage = (page) => {
    dispatch(getAllBrandsPage(brandLimit, page));
  };

  return [brand, loading, pageCount, getPage]
  
}

export default AllBrandsPageHook