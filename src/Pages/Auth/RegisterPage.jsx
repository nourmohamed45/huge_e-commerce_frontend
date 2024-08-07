import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import RegisterHook from "../../Logic/auth/register-hook";
import { ToastContainer } from "react-toastify";
import openEye from "../../assets/images/openEye.png";
import closeEye from "../../assets/images/closeEye.png";

const RegisterPage = () => {
  const [
    formData,
    loading,
    handleChange,
    handleSubmit,
    togglePasswordVisibility,
    toggleConfirmPasswordVisibility,
    showPassword,
    showConfirmPassword,
  ] = RegisterHook();

  return (
    <Container style={{ minHeight: "680px" }}>
      <Row className="py-5 d-flex justify-content-center">
        <Col sm={12} className="d-flex flex-column">
          <h2 className="mx-auto title-login" id="login-heading">
            تسجيل حساب جديد
          </h2>
          <Form
            className="d-flex flex-column align-items-center"
            onSubmit={handleSubmit}
          >
            {/* User Name */}
            <Form.Group controlId="formUserName">
              <Form.Label className="visually-hidden">اسم المستخدم:</Form.Label>
              <Form.Control
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                placeholder="اسم المستخدم..."
                className="user-input my-3 text-center mx-auto"
                aria-labelledby="register-heading"
                aria-describedby="username-description"
              />
              <Form.Text id="username-description" className="visually-hidden">
                ادخل اسم المستخدم الخاص بك.
              </Form.Text>
            </Form.Group>
            {/* Email */}
            <Form.Group controlId="formEmail">
              <Form.Label className="visually-hidden">الايميل:</Form.Label>
              <Form.Control
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="الايميل..."
                className="user-input my-3 text-center mx-auto"
                aria-labelledby="register-heading"
                aria-describedby="email-description"
              />
              <Form.Text id="email-description" className="visually-hidden">
                أدخل عنوان البريد الإلكتروني الخاص بك.
              </Form.Text>
            </Form.Group>
            {/* Password */}
            <Form.Group
              controlId="formPassword"
              style={{ position: "relative" }}
            >
              <Form.Label className="visually-hidden">كلمة السر:</Form.Label>
              <div style={{ position: "relative", width: "fit-content" }}>
                <Form.Control
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  type={showPassword ? "text" : "password"}
                  placeholder="كلمة السر..."
                  className="user-input my-3 text-center mx-auto"
                  aria-labelledby="register-heading"
                  aria-describedby="password-description"
                  style={{ paddingRight: "40px" }}
                />
                <Button
                  type="button"
                  onClick={togglePasswordVisibility}
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "transparent",
                    border: "none",
                    padding: "0",
                  }}
                >
                  <img
                    src={showPassword ? closeEye : openEye}
                    style={{ width: "20px" }}
                    alt="Toggle Password Visibility"
                  />
                </Button>
              </div>
              <Form.Text id="password-description" className="visually-hidden">
                أدخل كلمة المرور الخاصة بك.
              </Form.Text>
            </Form.Group>
            {/* Confirm Password */}
            <Form.Group
              controlId="formConfirmPassword"
              style={{ position: "relative" }}
            >
              <Form.Label className="visually-hidden">
                تأكيد كلمة السر:
              </Form.Label>
              <div style={{ position: "relative", width: "fit-content" }}>
                <Form.Control
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="تأكيد كلمة السر..."
                  className="user-input my-3 text-center mx-auto"
                  aria-labelledby="register-heading"
                  aria-describedby="confirm-password-description"
                  style={{ paddingRight: "40px" }}
                />
                <Button
                  type="button"
                  onClick={toggleConfirmPasswordVisibility}
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "transparent",
                    border: "none",
                    padding: "0",
                  }}
                >
                  <img
                    src={showConfirmPassword ? closeEye : openEye}
                    style={{ width: "20px" }}
                    alt="Toggle Confirm Password Visibility"
                  />
                </Button>
              </div>
              <Form.Text
                id="confirm-password-description"
                className="visually-hidden"
              >
                يرجي تأكيد كلمة المرور الخاصة بك.
              </Form.Text>
            </Form.Group>
            {/* Phone Number */}
            <Form.Group controlId="phoneNumber">
              <Form.Label className="visually-hidden">رقم الهاتف:</Form.Label>
              <Form.Control
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                type="phone"
                placeholder="رقم الهاتف..."
                className="user-input my-3 text-center mx-auto"
                aria-labelledby="register-heading"
                aria-describedby="phone-number-description"
              />
              <Form.Text
                id="phone-number-description"
                className="visually-hidden"
              >
                أدخل رقم الهاتف.
              </Form.Text>
            </Form.Group>
            {/* Register Button */}
            <Button
              type="submit"
              className="btn-login mx-auto mt-4"
              aria-label="تسجيل الدخول"
            >
              {loading ? (
                <Spinner animation="border" variant="primary" />
              ) : (
                "تسجيل الحساب"
              )}
            </Button>
          </Form>
          {/* Login Link Instead */}
          <div className="mx-auto my-4">
            لديك حساب بالفعل؟{" "}
            <Link to={"/login"} className="link-underline">
              <span
                style={{ cursor: "pointer" }}
                className="text-danger"
                aria-describedby="login-description"
              >
                اضغط هنا
              </span>
            </Link>
            <div id="login-description" className="visually-hidden">
              انقر هنا لإنشاء حساب جديد.
            </div>
          </div>
        </Col>
      </Row>
      {/* Notification */}
      <ToastContainer />
    </Container>
  );
};

export default RegisterPage;
