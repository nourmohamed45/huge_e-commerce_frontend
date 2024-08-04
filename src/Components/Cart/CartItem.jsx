import { Col, Row, Spinner } from "react-bootstrap";

import PropTypes from "prop-types";
import { webBaseURL } from "../../Api/baseURL";
import DeleteCartHook from "../../Logic/cart/delete-cart-hook";
import UpdateCartHook from "../../Logic/cart/update-cart-hook";

const CartItem = ({ item }) => {
  const itemID = item?._id;

  const [, , handleDeleteSpecificItemFromCart] = DeleteCartHook(itemID);

  const [itemCount, handleChange, updateLoading, applyItemCount] =
    UpdateCartHook(itemID, item);
  return (
    <Col xs="12" className="cart-item-body my-3 d-flex px-2 align-items-center">
      <div className="d-flex w-100">
        <div style={{ maxWidth: "160px", maxHeight: "197px", width: "160px" }}>
          <img
            width="100%"
            height="100%"
            src={`${webBaseURL}/products/${item.product.imageCover}`}
            alt="لا يوجد صورة"
          />
        </div>
        <div className="w-100">
          <Row className="justify-content-between">
            <Col
              sm="12"
              className=" d-flex flex-row justify-content-between align-items-start"
            >
              <div>
                <header className="d-inline pt-2 cat-text fs-6">
                  {item.product.title || "لا يوجد عنوان"}
                </header>
                <span
                  className="cat-rate  mt-2 d-flex align-items-center gap-2"
                  aria-label="Rating 4.5"
                  style={{ fontSize: "1rem" }}
                >
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    width={18}
                    height={18}
                    fill="#ffc107"
                  >
                    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                  </svg>{" "}
                  <div
                    className="d-flex align-items-center"
                    style={{ height: "fit-content", marginTop: "3px" }}
                  >
                    {item.product.ratingsAverage || 0}
                  </div>
                </span>
              </div>
              <button
                onClick={handleDeleteSpecificItemFromCart}
                className="d-flex align-items-center ps-2"
                style={{
                  cursor: "pointer",
                  backgroundColor: "transparent",
                  border: "none",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  width={20}
                  height={24}
                  fill="#979797"
                >
                  <path d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
                </svg>
                <div className="cat-text d-inline me-2">ازاله</div>
              </button>
            </Col>
          </Row>
          <Row className="justify-content-center mt-2"></Row>
          <Row>
            <Col sm="12" className="mt-1">
              <div className="cat-text d-inline">التصنيف :</div>
              <div className="barnd-text d-inline mx-1">
                {item.product.category.name || "لا يوجد تصنيف"}{" "}
              </div>
            </Col>
            <Col sm="12" className="mt-1">
              <div className="cat-text d-inline">الماركة :</div>
              <div className="barnd-text d-inline mx-1">
                {item.product.brand.name || "لا يوجد ماركة"}{" "}
              </div>
            </Col>
          </Row>
          <Row>
            {item.color && item.color.length >= 1 ? (
              <Col sm="12" className="mt-1 d-flex">
                <div
                  className="color ms-2 border"
                  style={{ backgroundColor: item.color }}
                ></div>
              </Col>
            ) : null}
          </Row>

          <Row className="justify-content-between">
            <Col sm="12" className=" d-flex  flex-row justify-content-between">
              <div className="d-inline pt-2 d-flex">
                <div className="cat-text  d-inline">الكميه</div>
                <input
                  value={itemCount}
                  onChange={handleChange}
                  className="mx-2 "
                  type="number"
                  style={{ width: "40px", height: "25px" }}
                />
                {updateLoading ? (
                  <Spinner animation="border" variant="primary" />
                ) : (
                  <button
                    onClick={applyItemCount}
                    className="copon-btn d-inline"
                    aria-label="Apply update count"
                  >
                    تطبيق
                  </button>
                )}
              </div>
              <div className="d-inline pt-2 barnd-text ps-2">
                {item.price || 0} جنية
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Col>
  );
};

export default CartItem;

CartItem.propTypes = {
  item: PropTypes.object,
};
