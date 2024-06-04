import { Col, Row } from "react-bootstrap";
import CartItem from "../Cart/CartItem";

const AdminOrderDetails = () => {
  return (
    <section>
      <h2 className="admin-content-text">تفاصيل الطلب رقم #{5162135}</h2>
      <CartItem />
      <CartItem />

      <Row className="justify-content-center mt-4 user-data mx-1">
        <Col xs="12" className="d-flex">
          <h3 className="admin-content-text py-2">تفاصيل العميل</h3>
        </Col>
        <Col xs="12" className="d-flex">
          <p
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            <strong>الاسم:</strong>
          </p>
          <p
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
            className="mx-2"
          >
            احمد عبداللة
          </p>
        </Col>

        <Col xs="12" className="d-flex">
          <p
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            <strong>رقم الهاتف:</strong>
          </p>
          <p
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
            className="mx-2"
          >
            0021313432423
          </p>
        </Col>
        <Col xs="12" className="d-flex">
          <p
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            <strong>الايميل:</strong>
          </p>
          <p
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
            className="mx-2"
          >
            ahmed@gmail.com
          </p>
        </Col>
        <div className="d-inline px-4 text-center pt-2" aria-live="polite">
          <strong>المجموع:</strong> ٤٠٠٠ جنيه
        </div>
        <div className="d-flex mt-4 mb-2 justify-content-center">
          <label htmlFor="order-status" className="sr-only">حالة الطلب</label>
          <select
            name="order-status"
            id="order-status"
            className="select input-form-area mt-1 text-center px-2 w-50"
            aria-label="حالة الطلب"
          >
            <option value="val">حالة الطلب</option>
            <option value="val2">قيد التنفيذ</option>
            <option value="val3">تم الانتهاء</option>
            <option value="val4">الغاء</option>
          </select>
          <button className="btn-a px-3 d-inline mx-2">حفظ</button>
        </div>
      </Row>
    </section>
  );
}

export default AdminOrderDetails;
