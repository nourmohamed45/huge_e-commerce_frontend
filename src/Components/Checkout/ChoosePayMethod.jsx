import { Col, Row, Spinner } from "react-bootstrap";
import ViewAddressHook from "../../Logic/user/view-address-hook";
import OrderPaymentCashHook from "../../Logic/checkout/order-payment-cash-hook";

const ChoosePayMethod = () => {
  const [allAddress] = ViewAddressHook();

  const [
    ,
    handleChangeSelection,
    addressDetails,
    handleCreateOrderCash,
    orderLoading
  ] = OrderPaymentCashHook();

  if(addressDetails.length !== 0)
    console.log(addressDetails)
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
            <div className="custom-radio" style={{ cursor: "pointer" }}>
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
            <div className="custom-radio" style={{ cursor: "pointer" }}>
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

        <Row className="mt-3">
          <Col xs="12" sm={8} md={6} lg="4" className="d-flex">
            <select
              id="addresses-select"
              name="addresses"
              className="select mt-3 px-2"
              aria-label="إختر التصنيف الرئيسي"
              onChange={handleChangeSelection}
              defaultValue={"default"}
            >
              <option value="default" disabled>
                إختر عنوان للشحن
              </option>
              {allAddress?.data?.length > 0 ? (
                allAddress.data.map((address) => (
                  <option key={address._id} value={address._id}>
                    {address.alias}
                  </option>
                ))
              ) : (
                <option disabled>لا توجد تصنيفات متاحة</option>
              )}
            </select>
          </Col>
        </Row>
      </section>

      <Row>
        <Col xs="12" className="d-flex justify-content-end">
          <div className="product-price d-inline border">34000 جنية</div>
          <button
            onClick={handleCreateOrderCash}
            className="product-cart-add px-3 pt-0 d-inline me-2"
            style={{ cursor: "pointer" }}
          >
            {orderLoading? (
              <Spinner animation="border" variant="primary" />
            ) : (
              "اتمام الشراء"
            )}
            
          </button>
        </Col>
      </Row>
    </>
  );
};

export default ChoosePayMethod;
