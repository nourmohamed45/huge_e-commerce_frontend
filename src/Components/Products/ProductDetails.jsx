import { Col, Row } from "react-bootstrap";
import ProductGallery from "./ProductGallery";
import ProductText from "./ProductText";

const ProductDetails = () => {
  return (
    <div>
      <Row className="py-3 justify-content-center justify-content-sm-between">
        <Col
          lg="4"
          className="d-flex justify-content-center align-items-center"
        >
          <ProductGallery />
        </Col>
        <Col lg="8">
          <ProductText />
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetails;
