import { Card, Col } from "react-bootstrap";

import PropTypes from "prop-types";



const BrandCard = ({img}) => {
  return (
    <Col
      xs="6"
      sm="6"
      md="4"
      lg="2"
      className="my-4 d-flex justify-content-center"
    >
      <Card className="my-1" style={{ width: "100%", height: "151px", borderRadius: "8px", border: "none", backgroundColor: "#FFFFFF" }}>
        <Card.Img style={{ width: "100%", height: "inherit" }} src={img} />
      </Card>
    </Col>
  );
};

export default BrandCard;

BrandCard.propTypes = {
  img: PropTypes.string,
};