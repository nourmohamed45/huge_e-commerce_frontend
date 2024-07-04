import { Container, Spinner } from "react-bootstrap";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import ProductDetails from "../../Components/Products/ProductDetails";
import RateContainer from "../../Components/Rate/RateContainer";
import ProductCardContainer from "../../Components/Products/ProductCardContainer";
import { ToastContainer } from "react-toastify";
import ViewProductDetailsHook from "../../Logic/product/view-product-details-hook";
import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  // Extract the product ID from the URL parameters
  const { id } = useParams();

  // Use the custom hook to fetch product details and related products
  // Note: Unused variables are left in the array to maintain the hook's return structure and we will use them on other components
  const [, , loading, , , , productsData] = ViewProductDetailsHook(id);

  

  return (
    <div style={{ minHeight: "680px" }}>
      <CategoryHeader />
      <Container>
        <ProductDetails />
        <RateContainer />
        {loading ? (
          <Spinner animation="border" variant="primary" />
        ) : (
          <ProductCardContainer
            subtitle={"منتجات قد تعجبك"}
            productsData={productsData}
          />
        )}
      </Container>
      {/* Notification */}
      <ToastContainer />
    </div>
  );
};

export default ProductDetailsPage;
