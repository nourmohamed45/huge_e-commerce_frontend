import { Col, Row, Spinner } from "react-bootstrap";
import AddAddressHook from "../../../Logic/user/add-address-hook";

const UserAddAddress = () => {
  const [formData, handleChange, handleSubmit, loading] = AddAddressHook();
  return (
    <section>
      <Row className="justify-content-start">
        <h2 className="admin-content-text pb-2">اضافة عنوان جديد</h2>
        <Col sm={8}>
          <label htmlFor="addressLabel" className="sr-only">
            Address Label
          </label>
          <input
            name="alias"
            value={formData.alias}
            onChange={handleChange}
            type="text"
            id="addressLabel"
            className="input-form d-block mt-3 px-3"
            placeholder="تسمية العنوان مثلا (المنزل - العمل)"
            aria-label="Address label"
          />
          <label htmlFor="detailedAddress" className="sr-only">
            Detailed Address
          </label>
          <textarea
            name="details"
            value={formData.details}
            onChange={handleChange}
            id="detailedAddress"
            className="input-form-area p-2 mt-3"
            rows="4"
            cols="50"
            placeholder="العنوان بالتفصيل"
            aria-label="Detailed address"
          />
          <label htmlFor="phoneNumber" className="sr-only">
            Phone Number
          </label>
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            type="tel"
            id="phoneNumber"
            className="input-form d-block mt-3 px-3"
            placeholder="رقم الهاتف"
            aria-label="Phone number"
          />
          <label htmlFor="city" className="sr-only">
            City
          </label>
          <input
            name="city"
            value={formData.city}
            onChange={handleChange}
            type="text"
            id="city"
            className="input-form d-block mt-3 px-3"
            placeholder="المدينة"
            aria-label="City"
          />
          <label htmlFor="postalCode" className="sr-only">
            Postal Code
          </label>
          <input
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            type="number"
            id="postalCode"
            className="input-form d-block mt-3 px-3"
            placeholder="الرمز البريدي"
            aria-label="Postal code"
          />
        </Col>
      </Row>
      <Row>
        <Col sm={8} className="d-flex justify-content-end">
          <button onClick={handleSubmit} className="btn-save d-inline mt-2">
            {
              loading? (
                <Spinner animation="border" variant="primary" />
              ) : (
                "اضافة عنوان"
              )
            }
          </button>
        </Col>
      </Row>
    </section>
  );
};

export default UserAddAddress;
