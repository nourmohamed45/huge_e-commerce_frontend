import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import brandReducer from "./brandReducer";
import subCategoryReducer from "./subCategoryReducer";
import productReducer from "./productReducer";
import authReducer from "./authReducer";
import reviewReducer from "./reviewReducer";

export default combineReducers({
  allCategory: categoryReducer,
  allBrands: brandReducer,
  allSubCategories: subCategoryReducer,
  allProducts: productReducer,
  authReducer: authReducer,
  reviewReducer: reviewReducer,
});
