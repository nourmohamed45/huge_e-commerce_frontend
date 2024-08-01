import { Container, Row } from "react-bootstrap";
import SubTitle from "../utilities/SubTitle";
import ProductCard from "./ProductCard";

// import Proptypes
import PropTypes from "prop-types";
import GetLoggedUserWishlistHook from "../../Logic/wishlist/get-logged-user-wishlist-hook";


const ProductCardContainer = ({
  productsData,
  subtitle,
  subtitlebtn,
  path,
}) => {
  
  const [wishListData] = GetLoggedUserWishlistHook()

  return productsData ? (
    <Container>
      <SubTitle subtitle={subtitle} subtitlebtn={subtitlebtn} path={path} />
      <Row className="my-2 d-flex justify-content-start">
        {productsData.map((product) => (
          <ProductCard
            key={product._id}
            id={product._id}
            title={product.title}
            price={product.price}
            img={product.imageCover}
            rateAvg={product.ratingsAverage}
            wishListData={wishListData} // Add wishListData to ProductCard component for wishlist functionality.
          />
        ))}
      </Row>
    </Container>
  ) : null;
};

export default ProductCardContainer;

ProductCardContainer.propTypes = {
  productsData: PropTypes.array,
  subtitle: PropTypes.string,
  subtitlebtn: PropTypes.string,
  path: PropTypes.string,
};
