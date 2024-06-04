import { Col, Row } from "react-bootstrap";

const AdminAddSubCategory = () => {
  return (
    <section>
      <h2 className="admin-content-text pb-4">اضافه تصنيف فرعي جديد</h2>
      <Row className="justify-content-start">
        <Col sm="8">
          <label htmlFor="sub-category-name" className="sr-only">
            اسم التصنيف الفرعي
          </label>
          <input
            type="text"
            id="sub-category-name"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم التصنيف الفرعي"
            aria-label="اسم التصنيف الفرعي"
          />
          <label htmlFor="category-select" className="sr-only">
            اختر التصنيف
          </label>
          <select
            id="category-select"
            name="categories"
            className="select mt-3 px-2"
            aria-label="اختر التصنيف"
          >
            <option value="val">التصنيف الاول</option>
            <option value="val2">التصنيف الثاني</option>
            <option value="val3">التصنيف الثالث</option>
            <option value="val4">التصنيف الرابع</option>
          </select>
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

export default AdminAddSubCategory;
