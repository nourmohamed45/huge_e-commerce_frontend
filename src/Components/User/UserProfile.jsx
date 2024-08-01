import { Button, Col, Modal, Row } from "react-bootstrap";
import editicon from "../../assets/images/edit.png";
import EditUserProfileHook from "../../Logic/user/edit-user-profile-hook";

const UserProfile = () => {
  const [
    user,
    show,
    handleClose,
    handleShow,
    formData,
    handleChange,
    handleSubmit,
    loading,
    passwordData,
    handlePasswordChange,
    handlePasswordSubmit
  ] = EditUserProfileHook();
  return (
    <section>
      {/* Start Edit Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>تعديل البيانات الشخصية</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label htmlFor="userName" className="sr-only">
            User Name
          </label>
          <input
            value={formData.name}
            onChange={handleChange}
            name="name"
            type="text"
            id="userName"
            className="input-form d-block mt-1 px-3 text-right"
            placeholder="اسم المستخدم"
            aria-label="User Name"
          />
          <label htmlFor="phoneNumber" className="sr-only">
            Phone Number
          </label>
          <input
            value={formData.phone}
            onChange={handleChange}
            name="phone"
            type="text"
            id="phoneNumber"
            className="input-form d-block mt-1 px-3 text-right"
            placeholder="رقم الهاتف"
            aria-label="Phone Number"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            إلغاء
          </Button>
          <Button variant="success" onClick={handleSubmit}>
            تعديل
          </Button>
        </Modal.Footer>
      </Modal>
      {/* End Edit Modal */}
      <h2 className="admin-content-text">الصفحه الشخصية</h2>
      <div className="user-address-card my-3 px-2">
        <Row className="d-flex justify-content-between pt-2">
          <Col xs={6} className="d-flex align-items-center">
            <label htmlFor="name" className="p-2 fw-bold">
              الاسم:
            </label>
            <div id="name" className="p-1">
              {user.name}
            </div>
          </Col>
          <Col xs={6} className="d-flex justify-content-end">
            <div className="d-flex mx-2 item-delete-edit align-items-center">
              <img alt="edit icon" src={editicon} height="15px" width="15px" />
              <button
                onClick={handleShow}
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
            <label htmlFor="phone" className="p-2 fw-bold">
              رقم الهاتف:
            </label>
            <div id="phone" className="p-1">
              {user.phone}
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="d-flex align-items-center">
            <label htmlFor="email" className="p-2 fw-bold">
              الايميل:
            </label>
            <div id="email" className="p-1">
              {user.email}
            </div>
          </Col>
        </Row>
        {/* =================== Password =================== */}
        <Row className="mt-5">
          <Col xs={10} sm={8} md={6}>
            <h3 className="admin-content-text">تغير كملة المرور</h3>
            <label htmlFor="oldPassword" className="sr-only">
              Old Password
            </label>
            <input
              value={passwordData.currentPassword}
              onChange={handlePasswordChange}
              name="currentPassword"
              type="password"
              id="oldPassword"
              className="input-form d-block mt-1 px-3 text-right"
              placeholder="ادخل كلمة المرور القديمة"
              aria-label="Old Password"
            />
            <label htmlFor="newPassword" className="sr-only">
              New Password
            </label>
            <input
              value={passwordData.password}
              onChange={handlePasswordChange}
              name="password"
              type="password"
              id="newPassword"
              className="input-form d-block mt-3 px-3 text-right"
              placeholder="ادخل كلمة المرور الجديدة"
              aria-label="New Password"
            />
            <label htmlFor="confirmNewPassword" className="sr-only">
              Confirm New Password
            </label>
            <input
              value={passwordData.passwordConfirm}
              onChange={handlePasswordChange}
              name="passwordConfirm"
              type="password"
              id="confirmNewPassword"
              className="input-form d-block mt-3 px-3 text-right"
              placeholder="تأكيد كلمة المرور الجديدة"
              aria-label="Confirm New Password"
            />
          </Col>
        </Row>

        <Row>
          <Col xs={10} sm={8} md={6} className="d-flex justify-content-end">
            <button onClick={handlePasswordSubmit} className="btn-save d-inline mt-2">حفظ كلمة السر</button>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default UserProfile;
