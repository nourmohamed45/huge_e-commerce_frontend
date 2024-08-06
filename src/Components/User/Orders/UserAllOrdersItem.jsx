import { Col, Row } from "react-bootstrap";
import UserAllOrderCard from "./UserAllOrderCard";

import PropTypes from "prop-types";

const UserAllOrdersItem = ({ orderData }) => {
  return (
    <div className="user-order mt-2">
      <Row>
        <div className="py-2 order-title">طلب رقم #{orderData.id || 0}</div>
      </Row>
      {orderData?.cartItems.length >= 1 ? (
        orderData?.cartItems?.map((item) => (
          <UserAllOrderCard key={item._id} item={item} />
        ))
      ) : (
        <h4>لا يوجد منتجات في طلبك</h4>
      )}
      <Row className="d-flex justify-content-between">
        <Col xs={12} className="d-flex">
          <div className=" fs-4 fw-bold my-2">
            <span className="d-inline"> التوصيل:</span>
            <span className="d-inline mx-2 stat">
              {orderData.isDelivered === true ? "تم التوصيل" : "قيد التنفيذ"}
            </span>
          </div>
          <div className=" fs-4 fw-bold my-2">
            <span className="d-inline"> الدفع:</span>
            <span className="d-inline mx-2 stat">
              {orderData.isPaid === true ? "تم الدفع" : "لم يتم الدفع"}
            </span>
          </div>
          <div className=" fs-4 fw-bold my-2">
            <span className="d-inline"> طريقة الدفع:</span>
            <span className="d-inline mx-2 stat">
              {orderData.paymentMethodType}
            </span>
          </div>
        </Col>
      </Row>
      <Row>
        <Col
          xs={12}
          className="d-flex justify-content-end align-items-center my-2"
        >
          <div>
            <span className="barnd-text">{orderData.totalOrderPrice} جنيه</span>
          </div>
        </Col>
      </Row>
    </div>
  );
};

UserAllOrdersItem.propTypes = {
  orderData: PropTypes.object,
};

export default UserAllOrdersItem;
