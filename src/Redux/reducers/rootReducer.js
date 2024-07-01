import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import brandReducer from "./brandReducer";
import subCategoryReducer from "./subCategoryReducer";
import productReducer from "./productReducer";

export default combineReducers({
  allCategory: categoryReducer,
  allBrands: brandReducer,
  allSubCategories: subCategoryReducer,
  allProducts: productReducer,
});
