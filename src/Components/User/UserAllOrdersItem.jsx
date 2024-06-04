import { Col, Row } from "react-bootstrap";
import UserAllOrderCard from "./UserAllOrderCard";

const UserAllOrdersItem = () => {
  return (
    <div className="user-order mt-2">
      <Row>
        <div className="py-2 order-title">طلب رقم #234556</div>
      </Row>
      <UserAllOrderCard />
      <UserAllOrderCard />
      <Row className="d-flex justify-content-between">
        <Col xs={6}>
          <div className=" fs-4 fw-bold my-2">
            <span className="d-inline">الحالة:</span>
            <span className="d-inline mx-2 stat">قيد التنفيذ</span>
          </div>
        </Col>
        <Col xs={6} className="d-flex justify-content-end align-items-center my-2">
          <div>
            <span className="barnd-text">4000 جنيه</span>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default UserAllOrdersItem;
