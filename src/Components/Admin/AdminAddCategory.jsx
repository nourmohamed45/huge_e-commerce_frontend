// Bootstrap
import { Col, Row, Spinner } from "react-bootstrap";

// External Libraries
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Import Logic
import AddCategoryHook from "../../Logic/category/add-category-hook";

const AdminAddCategory = () => {
  const [
    img,
    onImageChange,
    handleSubmit,
    name,
    onChangeName,
    isPress,
    loading,
  ] = AddCategoryHook();

  return (
    <section>
      <h2 className="admin-content-text pb-4">اضافه تصنيف جديد</h2>
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
                    alt="Category Avatar"
                    id="category-image"
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
              <label htmlFor="category-name" className="sr-only">
                اسم التصنيف
              </label>
              <input
                type="text"
                id="category-name"
                className="input-form d-block mt-3 px-3"
                placeholder="اسم التصنيف"
                aria-label="اسم التصنيف"
                onChange={onChangeName}
                value={name}
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
      {/* Notifications */}
      <ToastContainer autoClose={2000} />
    </section>
  );
};

export default AdminAddCategory;
