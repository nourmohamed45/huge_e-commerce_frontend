import { Col, Row, Spinner } from "react-bootstrap"
import AddCouponHook from "../../Logic/coupons/add-coupon-hook"

const AdminAddCoupons = () => {
  const {
    formData,
    handleChange,
    handleSubmit,
    loading,
    isPress,
    dateRef,
  } = AddCouponHook()
  return (
    <section>
      <h2 className="admin-content-text pb-4">أضف كوبون جديد</h2>

      {isPress ? (
        loading ? (
          <Spinner animation="border" variant="primary" />
        ) : (
          ""
        )
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
                onFocus={() => dateRef.current.type = "date"}
                onBlur={() => dateRef.current.type = "text"}
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
                حفظ التعديلات
              </button>
            </Col>
          </Row>
        </>
      )}
      
    </section>
  )
}

export default AdminAddCoupons