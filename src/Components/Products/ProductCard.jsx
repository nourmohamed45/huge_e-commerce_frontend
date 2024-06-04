import { Card, Col } from "react-bootstrap";

import PropTypes from "prop-types";

// import images
import prod1 from "../../assets/images/item.png";
import favoff from "../../assets/images/fav-off.png";
import rate from "../../assets/images/rate.png";
import { Link } from "react-router-dom";

const ProductCard = ({ title }) => {
  return (
    <Col className="d-flex" xs="12" sm="6" md="4" lg="3">
      <Card
        className="my-2"
        style={{
          width: "100%",
          height: " 345px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#FFFFFF",
          boxShadow: "0 2px 2px 0 rgba(151, 151, 151, 0.5",
        }}
      >
        <Link to={`/product/:id`}>
          <Card.Img
            variant="top"
            src={prod1}
            style={{ height: "228px", width: "100%" }}
          />
        </Link>
        <div className="d-flex justify-content-end mx-2">
          <img
            src={favoff}
            alt=""
            className="text-center"
            style={{
              height: "24px",
              width: "26px",
            }}
          />
        </div>
        <Card.Body>
          <Card.Title>
            <div className="card-title mb-3">{title}</div>
          </Card.Title>
          <Card.Text>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex">
                <img
                  className=""
                  src={rate}
                  alt=""
                  height="16px"
                  width="16px"
                />
                <div className="card-rate mx-2">4.5</div>
              </div>
              <div className="d-flex">
                <div className="card-price">880</div>
                <div className="card-currency mx-1">جنيه</div>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  title: PropTypes.string,
};
