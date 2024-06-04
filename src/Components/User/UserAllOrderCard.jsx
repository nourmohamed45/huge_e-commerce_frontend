import { Col, Row } from "react-bootstrap";
import mobile from "../../assets/images/mobile.png";

const UserAllOrderCard = () => {
  return (
    <div>
      <Row className="d-flex mb-2">
        <Col xs={3} md={2} className="d-flex justify-content-start">
          <img width="93px" height="120px" src={mobile} alt="Mobile product" />
        </Col>
        <Col xs={8} md={6}>
          <div className="d-inline pt-2 cat-title">
            آيفون XR بذاكرة سعة 128 جيجابايت ويدعم تقنية 4G LTE مع تطبيق فيس
            تايم (برودكت) أحمر
          </div>
          <div className="d-inline pt-2 cat-rate me-2">4.5</div>
          <div className="rate-count d-inline p-1 pt-2">(160 تقييم)</div>
          <div className="mt-3">
            <label htmlFor="quantity" className="cat-text d-inline">الكمية</label>
            <input
              id="quantity"
              className="mx-2"
              type="number"
              style={{ width: "40px", height: "25px" }}
              aria-label="الكمية"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default UserAllOrderCard;
