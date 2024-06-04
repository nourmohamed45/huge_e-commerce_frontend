import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <Container style={{ minHeight: "680px" }}>
      <Row className="py-5 d-flex justify-content-center">
        <Col sm={12} className="d-flex flex-column">
          <h2 className="mx-auto title-login" id="login-heading">
            تسجيل الدخول
          </h2>
          <Form.Group controlId="formEmail">
            <Form.Label className="visually-hidden">الايميل:</Form.Label>
            <Form.Control
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
          <Form.Group controlId="formPassword">
            <Form.Label className="visually-hidden">كلمة السر:</Form.Label>
            <Form.Control
              type="password"
              placeholder="كلمة السر..."
              className="user-input my-3 text-center mx-auto"
              aria-labelledby="login-heading"
              aria-describedby="password-description"
            />
            <Form.Text id="password-description" className="visually-hidden">
              أدخل كلمة المرور الخاصة بك.
            </Form.Text>
          </Form.Group>
          <Button className="btn-login mx-auto mt-4" aria-label="تسجيل الدخول">
            تسجيل الدخول
          </Button>
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

          <div className="mx-auto my-4">
            <Link to={"/admin/allorders"} className="link-underline">
              <span
                style={{ cursor: "pointer" }}
                className="text-danger"
                aria-describedby="register-description"
              >
                دخول كأدمن
              </span>
            </Link>
          </div>
          <div className="mx-auto my-4">
            <Link to={"/user/allorders"} className="link-underline">
              <span
                style={{ cursor: "pointer" }}
                className="text-danger"
                aria-describedby="register-description"
              >
                دخول كمستخدم
              </span>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
