import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";


const RegisterPage = () => {
  return (
    <Container style={{ minHeight: "680px" }}>
      <Row className="py-5 d-flex justify-content-center">
        <Col sm={12} className="d-flex flex-column">
          <h2 className="mx-auto title-login" id="login-heading">
            تسجيل حساب جديد
          </h2>
          {/* User Name */}
          <Form.Group controlId="formUserName">
            <Form.Label className="visually-hidden">اسم المستخدم:</Form.Label>
            <Form.Control
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
          <Form.Group controlId="formPassword">
            <Form.Label className="visually-hidden">كلمة السر:</Form.Label>
            <Form.Control
              type="password"
              placeholder="كلمة السر..."
              className="user-input my-3 text-center mx-auto"
              aria-labelledby="register-heading"
              aria-describedby="password-description"
            />
            <Form.Text id="password-description" className="visually-hidden">
              أدخل كلمة المرور الخاصة بك.
            </Form.Text>
          </Form.Group>
          {/* Register Button */}
          <Button className="btn-login mx-auto mt-4" aria-label="تسجيل الدخول">
            تسجيل الحساب
          </Button>
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
    </Container>
  );
}

export default RegisterPage