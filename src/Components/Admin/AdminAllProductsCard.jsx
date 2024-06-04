import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

// import images
import prod1 from "../../assets/images/prod1.png";
import rate from "../../assets/images/rate.png";

const AdminAllProductsCard = ({ title }) => {
  return (
    <Col className="d-flex" xs="10" sm="6" md="4" lg="4">
      <Card
        className="my-2"
        style={{
          width: "100%",
          height: " 370px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#FFFFFF",
          boxShadow: "0 2px 2px 0 rgba(151, 151, 151, 0.5",
        }}
      >
        <Row className="d-flex justify-content-center p-2">
          <Col className=" d-flex justify-content-between">
            <button className="d-inline item-delete-edit" style={{backgroundColor: "transparent", border: "none"}}>إزالة</button>
            <button className="d-inline item-delete-edit" style={{backgroundColor: "transparent", border: "none"}}>تعديل</button>
          </Col>
        </Row>
        <Link to={`/product/:id`} style={{textDecoration: "none"}}>
          <Card.Img
            variant="top"
            src={prod1}
            style={{ height: "228px", width: "100%" }}
          />
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
        </Link>
      </Card>
    </Col>
  );
};

export default AdminAllProductsCard;

AdminAllProductsCard.propTypes = {
  title: PropTypes.string,
};
