import { Col, Row, Spinner } from "react-bootstrap";
import AddCouponHook from "../../Logic/coupons/add-coupon-hook";
import AdminCouponCard from "./AdminCouponCard";
import Pagination from "../utilities/Pagination";

const AdminAddCoupons = () => {
  const [
    formData,
    handleChange,
    handleSubmit,
    loading,
    dateRef,
    allCoupons,
    onPress,
    pageCount,
  ] = AddCouponHook();

  return (
    <section>
      <h2 className="admin-content-text pb-4">أضف كوبون جديد</h2>

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

      {/* ================ Coupon Cards ================ */}
      <Row className="my-4">
        <Col sm={8}>
          {allCoupons.data && allCoupons.data.length >= 1 ? (
            allCoupons.data.map((coupon) => (
              <AdminCouponCard key={coupon._id} coupon={coupon} />
            ))
          ) : (
            <p className="admin-content-text">لا يوجد كوبونات حتي الأن</p>
          )}
        </Col>
      </Row>
      <Pagination pageCount={pageCount} onPress={onPress} />
    </section>
  );
};

export default AdminAddCoupons;
