import { Col, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import { webBaseURL } from "../../../Api/baseURL";
import { Link } from "react-router-dom";

const UserAllOrderCard = ({ item }) => {
  return (
    <div>
      <Row className="d-flex mb-2">
        <Col xs={3} md={2} className="d-flex justify-content-start">
          <Link
            to={`/product/${item?.product?._id}`}
            style={{ textDecoration: "none" }}
          >
            <img
              width="93px"
              height="120px"
              src={(() => {
                if (item?.product?.imageCover.startsWith("http")) {
                  return item?.product?.imageCover;
                }
                return `${webBaseURL}/products/${item?.product?.imageCover}`;
              })()}
              alt="Mobile product"
            />
          </Link>
        </Col>
        <Col xs={8} md={6}>
          <div className="d-inline pt-2 cat-title">{item?.product?.title}</div>
          <div className="d-inline pt-2 cat-rate me-2">
            {item?.product?.ratingsAverage || 0}
          </div>
          <div className="rate-count d-inline p-1 pt-2">
            ({item.product.ratingsQuantity || 0}تقييم)
          </div>
          {item?.color ? (
            <div className="mt-3">
              <div className="cat-text d-inline">اللون: </div>
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  backgroundColor: item?.color,
                }}
              ></div>
            </div>
          ) : null}
          <div className="mt-3">
            <div className="cat-text d-inline">الكمية: </div>
            <span>{item?.count || 1}#</span>
          </div>
        </Col>
      </Row>
    </div>
  );
};

UserAllOrderCard.propTypes = {
  item: PropTypes.object,
};

export default UserAllOrderCard;
