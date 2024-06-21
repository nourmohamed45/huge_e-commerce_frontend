import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory, getAllCategoryPage } from '../../Redux/actions/categoryActions';

const AllCategoryPageHook = () => {
  const categoryLimit = 6;
  const dispatch = useDispatch();

  // to get state from redux
  const category = useSelector((state) => state.allCategory.category);
  const loading = useSelector((state) => state.allCategory.loading);
  
  // when first load
  useEffect(() => {
    dispatch(getAllCategory(categoryLimit));
  }, [dispatch]);

  // to get page count
  let pageCount = 0;
  if (category.paginationResult)
    pageCount = category.paginationResult.numberOfPages;

  // when press pagination
  const getPage = (page) => {
    dispatch(getAllCategoryPage(categoryLimit, page));
  };

  return [category, loading, pageCount, getPage]
}

export default AllCategoryPageHook