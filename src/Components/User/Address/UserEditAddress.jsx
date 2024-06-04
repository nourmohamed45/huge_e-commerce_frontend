import { Col, Row } from "react-bootstrap"

const UserEditAddress = () => {
  return (
    <section>
      <Row className="justify-content-start">
        <h2 className="admin-content-text pb-2"> تعديل العنوان </h2>
        <Col sm={8}>
          <label htmlFor="addressLabel" className="sr-only">Address Label</label>
          <input
            type="text"
            id="addressLabel"
            className="input-form d-block mt-3 px-3"
            value={"المنزل"}
            placeholder="تسمية العنوان مثلا(المنزل - العمل)"
            aria-label="Address label"
          />
          <label htmlFor="detailedAddress" className="sr-only">Detailed Address</label>
          <textarea
            id="detailedAddress"
            className="input-form-area p-2 mt-3"
            rows="4"
            cols="50"
            value={"القاهرة 6 أكتوبر"}
            placeholder="العنوان بالتفصيل"
            aria-label="Detailed address"
          />
          <label htmlFor="phoneNumber" className="sr-only">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            className="input-form d-block mt-3 px-3"
            value={"0126560868"}
            placeholder="رقم الهاتف"
            aria-label="Phone number"
          />
        </Col>
      </Row>
      <Row>
        <Col sm={8} className="d-flex justify-content-end">
          <button className="btn-save d-inline mt-2"> تعديل </button>
        </Col>
      </Row>
    </section>
  )
}

export default UserEditAddress