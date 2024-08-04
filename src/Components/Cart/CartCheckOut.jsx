import { Col, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import DeleteCartHook from "../../Logic/cart/delete-cart-hook";
import ApplyCouponHook from "../../Logic/cart/apply-coupon-hook";

const CartCheckOut = ({ totalCartPrice }) => {
  const [loading, handleDeleteCart] = DeleteCartHook();

  const [
    couponCode,
    couponLoading,
    handleCouponChange,
    handleCouponSubmit,
    totalPriceBeforeCoupon,
    priceAfterCoupon,
    couponName,
  ] = ApplyCouponHook();
  return (
    <Row className="my-1 d-flex justify-content-center cart-checkout pt-3">
      <Col xs="12" className="d-flex  flex-column  ">
        <div className="d-flex">
          <label htmlFor="coupon-code" className="visually-hidden">
            كود الخصم
          </label>
          <input
            value={couponCode}
            onChange={(e) => {handleCouponChange(e.target.value)}}
            id="coupon-code"
            className="copon-input d-inline text-center "
            placeholder="كود الخصم"
            aria-label="Enter discount code"
          />
          <button
            onClick={handleCouponSubmit}
            className="copon-btn d-inline"
            aria-label="Apply discount code"
          >
            {couponLoading ? (
              <Spinner animation="border" variant="primary" />
            ) : (
              "تطبيق"
            )}
          </button>
        </div>
        <div className="product-price d-inline w-100 my-3 border">
          {couponName ? (
            <>
              <span style={{textDecoration: "line-through"}}>{totalPriceBeforeCoupon}</span> {"-"} {priceAfterCoupon}
            </>
          ) : totalCartPrice && totalCartPrice !== 0 ? (
            totalCartPrice
          ) : (
            0
          )}{" "}
          جنية
        </div>
        <Link
          to="/order/paymethods"
          style={{ textDecoration: "none" }}
          className="product-cart-add  d-inline mx-auto"
        >
          <button
            className="product-cart-add w-100 px-2 "
            aria-label="Proceed to purchase"
          >
            {" "}
            شراء
          </button>
        </Link>

        <button
          onClick={handleDeleteCart}
          className="product-cart-remove mx-auto my-2 px-2 "
          aria-label="Proceed to purchase"
        >
          {" "}
          {loading ? (
            <span
              className="spinner-border spinner-border-sm mr-1"
              role="status"
              aria-hidden="true"
            />
          ) : (
            "مسح العربة"
          )}
        </button>
      </Col>
    </Row>
  );
};

export default CartCheckOut;

CartCheckOut.propTypes = {
  totalCartPrice: PropTypes.number,
};
