import { Container } from "react-bootstrap";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import ProductDetails from "../../Components/Products/ProductDetails";
import RateContainer from "../../Components/Rate/RateContainer";
import ProductCardContainer from "../../Components/Products/ProductCardContainer";


const ProductDetailsPage = () => {
  return (
    <div style={{ minHeight: "680px" }}>
      <CategoryHeader />
      <Container>
        <ProductDetails />
        <RateContainer />
        <ProductCardContainer subtitle={"منتجات قد تعجبك"}/>
      </Container>
    </div>
  );
};

export default ProductDetailsPage;
