import HomePage from "./Pages/Home/HomePage";
import NavBarLogin from "./Components/utilities/NavBarLogin";
import Footer from "./Components/utilities/Footer";

// React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/Auth/LoginPage";
import RegisterPage from "./Pages/Auth/RegisterPage";
import AllCategoryPage from "./Pages/Category/AllCategoryPage";
import AllBrandPage from "./Pages/Brand/AllBrandPage";
import ShopProductsPage from "./Pages/Products/ShopProductsPage";
import ProductDetailsPage from "./Pages/Products/ProductDetailsPage";
import CartPage from "./Pages/Cart/CartPage";
import ChoosePayMethodPage from "./Pages/Checkout/ChoosePayMethodPage";
import AdminAllProductPage from "./Pages/Admin/AdminAllProductPage";
import AdminAllOrdersPage from "./Pages/Admin/AdminAllOrdersPage";
import AdminOrderDetailsPage from "./Pages/Admin/AdminOrderDetailsPage";
import AdminAddBrandPage from "./Pages/Admin/AdminAddBrandPage";
import AdminAddCategoryPage from "./Pages/Admin/AdminAddCategoryPage";
import AdminAddSubCategoryPage from "./Pages/Admin/AdminAddSubCategoryPage";
import AdminAddProductsPage from "./Pages/Admin/AdminAddProductsPage";
import UserAllOrdersPage from "./Pages/User/UserAllOrdersPage";
import UserFavoriteListPage from "./Pages/User/UserFavoriteListPage";
import UserAllAddressesPage from "./Pages/User/UserAllAddressesPage";
import UserAddAddressPage from "./Pages/User/UserAddAddressPage";
import UserEditAddressPage from "./Pages/User/UserEditAddressPage";
import UserProfilePage from "./Pages/User/UserProfilePage";
import AdminEditProductPage from "./Pages/Admin/AdminEditProductPage";
import ForgetPasswordPage from "./Pages/Auth/ForgetPasswordPage";
import VerifyPasswordPage from "./Pages/Auth/VerifyPasswordPage";
import ResetPasswordPage from "./Pages/Auth/ResetPasswordPage";
import AdminAddCouponsPage from "./Pages/Admin/AdminAddCouponsPage";
import AdminEditCouponPage from "./Pages/Admin/AdminEditCouponPage";
import ProtectedRouteHook from "./Logic/auth/protected-route-hook";
import ProtectedRoute from "./Components/utilities/ProtectedRoute";
import ProductByCategoryPage from "./Pages/Products/ProductByCategoryPage";
import ProductByBrandPage from "./Pages/Products/ProductByBrandPage";

function App() {
  const [isUser, isAdmin, ] = ProtectedRouteHook();
  return (
    <div className="font">
      <NavBarLogin />
      <BrowserRouter>
        <Routes>
          {/* NavBar Pages */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/cart" element={<CartPage />} />
          {/* Home Pages */}
          <Route index element={<HomePage />} />
          <Route path="/allCategory" element={<AllCategoryPage />} />
          <Route path="/allBrand" element={<AllBrandPage />} />
          <Route path="/products" element={<ShopProductsPage />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
          <Route path="/order/paymethods" element={<ChoosePayMethodPage />} />
          {/* Other Pages */}
          <Route path="/products/category/:id" element={<ProductByCategoryPage />} />
          <Route path="/products/brand/:id" element={<ProductByBrandPage />} />
          {/* Admin Pages */}
          <Route element={<ProtectedRoute auth={isAdmin} />}>
            <Route
              path="/admin/allproducts"
              element={<AdminAllProductPage />}
            />
            <Route path="/admin/allorders" element={<AdminAllOrdersPage />} />
            <Route
              path="/admin/orders/:id"
              element={<AdminOrderDetailsPage />}
            />
            <Route path="/admin/addbrand" element={<AdminAddBrandPage />} />
            <Route
              path="/admin/addcategory"
              element={<AdminAddCategoryPage />}
            />
            <Route
              path="/admin/addsubcategory"
              element={<AdminAddSubCategoryPage />}
            />
            <Route
              path="/admin/addproducts"
              element={<AdminAddProductsPage />}
            />
            <Route path="/admin/addcoupons" element={<AdminAddCouponsPage />} />
            <Route
              path="/admin/edit-coupon/:id"
              element={<AdminEditCouponPage />}
            />
            <Route
              path="/admin/editproducts/:id"
              element={<AdminEditProductPage />}
            />
          </Route>
          {/* User Pages */}
          <Route element={<ProtectedRoute auth={isUser} />}>
            <Route path="/user/allorders" element={<UserAllOrdersPage />} />
            <Route
              path="/user/favoritelist"
              element={<UserFavoriteListPage />}
            />
            <Route
              path="/user/alladdresses"
              element={<UserAllAddressesPage />}
            />
            <Route path="/user/add-address" element={<UserAddAddressPage />} />
            <Route
              path="/user/edit-address/:id"
              element={<UserEditAddressPage />}
            />
            <Route path="/user/profile" element={<UserProfilePage />} />
          </Route>
          <Route path="/user/forgetPassword" element={<ForgetPasswordPage />} />
          <Route path="/user/verifyPassword" element={<VerifyPasswordPage />} />
          <Route path="/user/resetPassword" element={<ResetPasswordPage />} />
        </Routes>
      </BrowserRouter>
      <div className="my-5"></div>
      <Footer />
    </div>
  );
}

export default App;
