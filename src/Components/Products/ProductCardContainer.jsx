import { Container, Row } from "react-bootstrap";
import SubTitle from "../utilities/SubTitle";
import ProductCard from "./ProductCard";

// import Proptypes
import PropTypes from "prop-types";

const ProductCardContainer = ({
  productsData,
  subtitle,
  subtitlebtn,
  path,
}) => {
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
            ratenum={product.ratingsQuantity}
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
