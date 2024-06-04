import { Col, Row } from "react-bootstrap";
import editicon from "../../assets/images/edit.png";

const UserProfile = () => {
  return (
    <section>
      <h2 className="admin-content-text">الصفحه الشخصية</h2>
      <div className="user-address-card my-3 px-2">
        <Row className="d-flex justify-content-between pt-2">
          <Col xs={6} className="d-flex align-items-center">
            <label htmlFor="name" className="p-2 fw-bold">الاسم:</label>
            <div id="name" className="p-1">احمد عبداللة</div>
          </Col>
          <Col xs={6} className="d-flex justify-content-end">
            <div className="d-flex mx-2 item-delete-edit align-items-center">
              <img alt="edit icon" src={editicon} height="15px" width="15px" />
              <button
                aria-label="Edit name"
                style={{ backgroundColor: "transparent", border: "none" }}
              >
                تعديل
              </button>
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={12} className="d-flex align-items-center">
            <label htmlFor="phone" className="p-2 fw-bold">رقم الهاتف:</label>
            <div id="phone" className="p-1">0122314324</div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="d-flex align-items-center">
            <label htmlFor="email" className="p-2 fw-bold">الايميل:</label>
            <div id="email" className="p-1">ahmed@gmail.com</div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col xs={10} sm={8} md={6}>
            <h3 className="admin-content-text">تغير كملة المرور</h3>
            <label htmlFor="oldPassword" className="sr-only">Old Password</label>
            <input
              type="password"
              id="oldPassword"
              className="input-form d-block mt-1 px-3 text-right"
              placeholder="ادخل كلمة المرور القديمة"
              aria-label="Old Password"
            />
            <label htmlFor="newPassword" className="sr-only">New Password</label>
            <input
              type="password"
              id="newPassword"
              className="input-form d-block mt-3 px-3 text-right"
              placeholder="ادخل كلمة المرور الجديده"
              aria-label="New Password"
            />
          </Col>
        </Row>

        <Row>
          <Col xs={10} sm={8} md={6} className="d-flex justify-content-end">
            <button className="btn-save d-inline mt-2">حفظ كلمة السر</button>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default UserProfile;
