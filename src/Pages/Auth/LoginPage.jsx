import { Col, Container, Row, Form, Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginHook from "../../Logic/auth/login-hook";
import openEye from "../../assets/images/openEye.png";
import closeEye from "../../assets/images/closeEye.png";
import { ToastContainer } from "react-toastify";

const LoginPage = () => {
  const [
    formData,
    loading,
    handleChange,
    handleSubmit,
    togglePasswordVisibility,
    showPassword,
  ] = LoginHook();

  return (
    <Container style={{ minHeight: "680px" }}>
      <Row className="py-5 d-flex justify-content-center">
        <Col sm={12} className="d-flex flex-column">
          <h2 className="mx-auto title-login" id="login-heading">
            تسجيل الدخول
          </h2>
          <Form
            onSubmit={handleSubmit}
            className="d-flex align-items-center flex-column"
          >
            {/* ================== email input ================== */}
            <Form.Group controlId="formEmail">
              <Form.Label className="visually-hidden">الايميل:</Form.Label>
              <Form.Control
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="الايميل..."
                className="user-input my-3 text-center mx-auto"
                aria-labelledby="login-heading"
                aria-describedby="email-description"
              />
              <Form.Text id="email-description" className="visually-hidden">
                أدخل عنوان البريد الإلكتروني الخاص بك.
              </Form.Text>
            </Form.Group>
            {/* ================== password input ================== */}
            <Form.Group
              controlId="formPassword"
              style={{ position: "relative" }}
            >
              <Form.Label className="visually-hidden">كلمة السر:</Form.Label>
              <div style={{ position: "relative", width: "100%" }}>
                <Form.Control
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  type={showPassword ? "text" : "password"}
                  placeholder="كلمة السر..."
                  className="user-input my-3 text-center mx-auto"
                  aria-labelledby="login-heading"
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
            {/* ================== Submit Button ================== */}
            <Button
              type="submit"
              className="btn-login mx-auto mt-4"
              aria-label="تسجيل الدخول"
            >
              {loading ? (
                <Spinner animation="border" variant="primary" />
              ) : (
                "تسجيل الدخول"
              )}
            </Button>
          </Form>
          {/* ================== Register link  ================== */}
          <div className="mx-auto my-4">
            ليس لديك حساب؟{" "}
            <Link to={"/register"} className="link-underline">
              <span
                style={{ cursor: "pointer" }}
                className="text-danger"
                aria-describedby="register-description"
              >
                اضغط هنا
              </span>
            </Link>
            <div id="register-description" className="visually-hidden">
              انقر هنا لإنشاء حساب جديد.
            </div>
          </div>
          {/*================== Forget password link ==================*/}
          <div className="mx-auto my-1">
            هل نسيت كلمة السر:{" "}
            <Link to={"/user/forgetPassword"} className="link-underline">
              <span
                style={{ cursor: "pointer" }}
                className="text-danger"
                aria-describedby="forget-password-description"
              >
                اضغط هنا
              </span>
            </Link>
            <div id="forget-password-description" className="visually-hidden">
              انقر هنا لإنشاء كلمة سر جديدة.
            </div>
          </div>
        </Col>
      </Row>
      {/* Notification */}
      <ToastContainer />
    </Container>
  );
};

export default LoginPage;
