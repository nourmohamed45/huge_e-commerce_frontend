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
import userProfileReducer from "./userProfileReducer";
import cartReducer from "./cartReducer";
import checkoutReducer from "./checkoutReducer";
import orderReducer from "./orderReducer";

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
  userProfileReducer: userProfileReducer,
  cartReducer: cartReducer,
  checkoutReducer: checkoutReducer,
  orderReducer: orderReducer,
});
