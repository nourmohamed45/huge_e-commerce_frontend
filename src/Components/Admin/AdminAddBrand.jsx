import { Col, Row, Spinner } from "react-bootstrap";

import AddBrandHook from "../../Logic/brands/add-brand-hook";
import { ToastContainer } from "react-toastify";

const AdminAddBrand = () => {
  const [
    img,
    onChangeName,
    onImageChange,
    handlesubmit,
    name,
    isPress,
    loading,
  ] = AddBrandHook();

  return (
    <section>
      <h2 className="admin-content-text pb-4">أضف ماركة جديدة</h2>

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
              <div>
                <label htmlFor="upload-photo" style={{ cursor: "pointer" }}>
                  <img
                    src={img}
                    alt="Brand Avatar"
                    id="brand-image"
                    height="100px"
                    width="120px"
                  />
                  <input
                    type="file"
                    id="upload-photo"
                    placeholder="صورة التصنيف"
                    aria-label="صورة التصنيف"
                    className="sr-only"
                    onChange={onImageChange}
                  />
                </label>
              </div>
              <label htmlFor="brand-name" className="sr-only">
                اسم الماركه
              </label>
              <input
                type="text"
                id="brand-name"
                className="input-form d-block mt-3 px-3"
                placeholder="اسم الماركه"
                aria-label="اسم الماركه"
                value={name}
                onChange={onChangeName}
              />
            </Col>
          </Row>
          <Row>
            <Col sm="8" className="d-flex justify-content-end">
              <button onClick={handlesubmit} className="btn-save d-inline mt-2">
                حفظ التعديلات
              </button>
            </Col>
          </Row>
        </>
      )}
      {/* Notifications */}
      <ToastContainer autoClose={2000} />
    </section>
  );
};

export default AdminAddBrand;
