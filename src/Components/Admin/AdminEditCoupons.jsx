import { Col, Row, Spinner } from "react-bootstrap";
import EditCouponHook from "../../Logic/coupons/edit-coupon-hook";
import { useParams } from "react-router-dom";

const AdminEditCoupons = () => {
  const { id } = useParams();

  const [formData, handleChange, handleSubmit, loading, dateRef, loadingData] =
    EditCouponHook(id);
  return (
    <section>
      <h2 className="admin-content-text pb-4">قم بتعديل الكوبون</h2>

      {loadingData ? (
        <h4>Loading...</h4>
      ) : (
        <>
          <Row className="justify-content-start">
            <Col sm="8">
              <label htmlFor="coupon-name" className="sr-only">
                أضف كوبون جديد
              </label>
              <input
                name="code"
                type="text"
                id="coupon-name"
                className="input-form d-block mt-3 px-3"
                placeholder="اسم الكوبون"
                aria-label="اسم الكوبون"
                onChange={handleChange}
                value={formData.code}
              />
            </Col>
            <Col sm="8">
              <label htmlFor="expiry-date" className="sr-only">
                تاريخ الإنتهاء
              </label>
              <input
                name="expiryDate"
                ref={dateRef}
                type="text"
                id="expiry-date"
                className="input-form d-block mt-3 px-3"
                placeholder="تاريخ الإنتهاء"
                aria-label="تاريخ الإنتهاء"
                onFocus={() => (dateRef.current.type = "date")}
                onBlur={() => (dateRef.current.type = "text")}
                onChange={handleChange}
                value={formData.expiryDate}
              />
            </Col>
            <Col sm="8">
              <label htmlFor="discount-percentage" className="sr-only">
                نسبة الخصم
              </label>
              <input
                name="discount"
                type="number"
                id="discount-percentage"
                className="input-form d-block mt-3 px-3"
                placeholder="نسبة الخصم"
                aria-label="نسبة الخصم"
                onChange={handleChange}
                value={formData.discount}
              />
            </Col>
          </Row>
          <Row>
            <Col sm="8" className="d-flex justify-content-end">
              <button onClick={handleSubmit} className="btn-save d-inline mt-2">
                {loading ? (
                  <Spinner animation="border" variant="primary" />
                ) : (
                  "إضافة"
                )}
              </button>
            </Col>
          </Row>
        </>
      )}
    </section>
  );
};

export default AdminEditCoupons;
