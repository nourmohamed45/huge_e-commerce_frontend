import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import brandReducer from "./brandReducer";
import subCategoryReducer from "./subCategoryReducer";
import productReducer from "./productReducer";
import authReducer from "./authReducer";
import reviewReducer from "./reviewReducer";
import wishlistReducer from "./wishlistReducer";
import couponReducer from "./couponReducer";
import userAddressReducer from "./userAddressReducer";

export default combineReducers({
  allCategory: categoryReducer,
  allBrands: brandReducer,
  allSubCategories: subCategoryReducer,
  allProducts: productReducer,
  authReducer: authReducer,
  reviewReducer: reviewReducer,
  wishListReducer: wishlistReducer,
  couponReducer: couponReducer,
  userAddressReducer: userAddressReducer,
});
