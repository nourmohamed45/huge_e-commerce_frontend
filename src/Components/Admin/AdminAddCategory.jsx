import { Col, Row } from "react-bootstrap";

// import images
import avatar from "../../assets/images/avatar.png";

const AdminAddCategory = () => {
  return (
    <section>
      <h2 className="admin-content-text pb-4">اضافه تصنيف جديد</h2>
      <Row className="justify-content-start">
        <Col sm="8">
          <label htmlFor="category-image" className="sr-only">
            صوره التصنيف
          </label>
          <img
            src={avatar}
            alt="Category avatar"
            id="category-image"
            height="100px"
            width="120px"
          />
          <label htmlFor="category-name" className="sr-only">
            اسم التصنيف
          </label>
          <input
            type="text"
            id="category-name"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم التصنيف"
            aria-label="اسم التصنيف"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end">
          <button className="btn-save d-inline mt-2">حفظ التعديلات</button>
        </Col>
      </Row>
    </section>
  );
};

export default AdminAddCategory;
