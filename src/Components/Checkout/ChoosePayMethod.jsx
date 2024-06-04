import { Col, Row } from "react-bootstrap";


const ChoosePayMethod = () => {
  return (
    <>
      <h3
        className="admin-content-text pt-5"
        aria-label="Choose Payment Method"
      >
        اختر طريقة الدفع
      </h3>
      <section className="user-address-card my-3 px-3">
        <Row className="d-flex justify-content-between">
          <Col xs="12" className="my-4">
            <div className="custom-radio">
              <input
                name="group"
                id="group1"
                type="radio"
                value="الدفع عن طريق الفيزا"
                aria-label="Pay with visa"
              />
              <label htmlFor="group1">الدفع عن طريق الفيزا</label>
            </div>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col xs="12" className="d-flex">
            <div className="custom-radio">
              <input
                name="group"
                id="group2"
                type="radio"
                value="الدفع عند الاستلام"
                aria-label="Pay when receive"
              />
              <label htmlFor="group2">الدفع عند الاستلام</label>
            </div>
          </Col>
        </Row>
      </section>

      <Row>
        <Col xs="12" className="d-flex justify-content-end">
          <div className="product-price d-inline border">34000 جنية</div>
          <button className="product-cart-add px-3 pt-0 d-inline me-2">
            اتمام الشراء
          </button>
        </Col>
      </Row>
    </>
  );
};

export default ChoosePayMethod;
