import { Col, Row } from "react-bootstrap";

// import images
import avatar from "../../assets/images/avatar.png";

const AdminAddBrand = () => {
  return (
    <section>
        <h2 className="admin-content-text pb-4">اضف ماركه جديده</h2>
      <Row className="justify-content-start">
        <Col sm="8">
          <label htmlFor="brand-image" className="sr-only">
            صوره الماركه
          </label>
          <img
            src={avatar}
            alt="Brand avatar"
            id="brand-image"
            height="100px"
            width="120px"
          />
          <label htmlFor="brand-name" className="sr-only">
            اسم الماركه
          </label>
          <input
            type="text"
            id="brand-name"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم الماركه"
            aria-label="اسم الماركه"
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

export default AdminAddBrand;
