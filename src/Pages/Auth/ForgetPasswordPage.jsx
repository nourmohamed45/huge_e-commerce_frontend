import { Col, Container, Row, Form, Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ForgetPasswordHook from "../../Logic/auth/forget-password-hook";

const ForgetPasswordPage = () => {
  const { email, handleChange, handleSubmit, loading } = ForgetPasswordHook();
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
                value={email}
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
            {/* ================== Submit Button ================== */}
            <Button
              type="submit"
              className="btn-login mx-auto mt-4"
              aria-label="أرسل كود التأكيد"
            >
              {loading ? (
                <Spinner animation="border" variant="primary" />
              ) : (
                "أرسل كود التأكيد"
              )}
            </Button>
          </Form>
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
        </Col>
      </Row>
      {/* Notification */}
      <ToastContainer />
    </Container>
  );
};

export default ForgetPasswordPage;
