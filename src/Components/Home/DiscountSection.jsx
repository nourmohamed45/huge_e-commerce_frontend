import { Col, Container, Row } from "react-bootstrap"

import PropTypes from "prop-types";

// import images
import laptops from "../../assets/images/laptops.png"

const DiscountSection = ({ discountTitle }) => {
  return (
    <Container>
      <Row className="discount-backcolor my-3 mx-2 d-flex text-center align-items-center">
        <Col sm="6">
          <div className="discount-title">{discountTitle}</div>
        </Col>
        <Col sm="6">
          <img src={laptops} alt="Discount img" className="discount-img" />
        </Col>
      </Row>
    </Container>
  );
};

export default DiscountSection


DiscountSection.propTypes = {
  discountTitle: PropTypes.string,
};