import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const CartCheckOut = () => {
  return (
    <Row className="my-1 d-flex justify-content-center cart-checkout pt-3" >
      <Col xs="12" className="d-flex  flex-column  ">
        <div className="d-flex">
          <label htmlFor="coupon-code" className="visually-hidden">كود الخصم</label>
          <input
            id="coupon-code"
            className="copon-input d-inline text-center "
            placeholder="كود الخصم"
            aria-label="Enter discount code"
          />
          <button className="copon-btn d-inline" aria-label="Apply discount code">تطبيق</button>
        </div>
        <div className="product-price d-inline w-100 my-3 border">
          34000 جنية
        </div>
        <Link
          to="/order/paymethods"
          style={{ textDecoration: "none" }}
          className="product-cart-add  d-inline mx-auto"
        >
          <button className="product-cart-add w-100 px-2 " aria-label="Proceed to purchase">
            {" "}
            شراء
          </button>
        </Link>
      </Col>
    </Row>
  );
}

export default CartCheckOut