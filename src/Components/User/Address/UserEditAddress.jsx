import { Col, Row, Spinner } from "react-bootstrap";
import EditAddressHook from "../../../Logic/user/edit-address-hook";
import { useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const UserEditAddress = () => {
  const { id } = useParams();
  const [formData, handleChange, handleSubmit, loading, loadingData] =
    EditAddressHook(id);

  return (
    <>
      {loadingData ? (
        <h4>جاري التحميل</h4>
      ) : (
        <section>
          <Row className="justify-content-start">
            <h2 className="admin-content-text pb-2"> تعديل العنوان </h2>
            <Col sm={8}>
              <label htmlFor="addressLabel" className="sr-only">
                Address Label
              </label>
              <input
                value={formData.alias}
                onChange={handleChange}
                name="alias"
                type="text"
                id="addressLabel"
                className="input-form d-block mt-3 px-3"
                placeholder="تسمية العنوان مثلا(المنزل - العمل)"
                aria-label="Address label"
              />
              <label htmlFor="detailedAddress" className="sr-only">
                Detailed Address
              </label>
              <textarea
                value={formData.details}
                onChange={handleChange}
                name="details"
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
                value={formData.phone}
                onChange={handleChange}
                name="phone"
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
                {loading ? (
                  <Spinner animation="border" variant="primary" />
                ) : (
                  "تعديل"
                )}
              </button>
            </Col>
          </Row>
          {/* Notifications */}
          <ToastContainer autoClose={2000} />
        </section>
      )}
    </>
  );
};

export default UserEditAddress;
