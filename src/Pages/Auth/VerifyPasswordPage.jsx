import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import VerifyPasswordHook from "../../Logic/auth/verify-password-hook";

const VerifyPasswordPage = () => {
  const { code, handleChange, handleSubmit, loading } = VerifyPasswordHook();
  return (
    <Container style={{ minHeight: "680px" }}>
      <Row className="py-5 d-flex justify-content-center">
        <Col sm={12} className="d-flex flex-column">
          <h2 className="mx-auto title-login" id="login-heading">
            أدخل الكود
          </h2>
          <Form
            onSubmit={handleSubmit}
            className="d-flex align-items-center flex-column"
          >
            {/* ================== code input ================== */}
            <Form.Group controlId="formCode">
              <Form.Label className="visually-hidden">كود التفعيل:</Form.Label>
              <Form.Control
                name="code"
                value={code}
                onChange={handleChange}
                type="code"
                placeholder="كود التفعيل..."
                className="user-input my-3 text-center mx-auto"
                aria-labelledby="login-heading"
                aria-describedby="code-description"
              />
              <Form.Text id="code-description" className="visually-hidden">
                أدخل كود التأكيد المرسل لبريدك الإلكتروني.
              </Form.Text>
            </Form.Group>
            {/* ================== Submit Button ================== */}
            <Button
              type="submit"
              className="btn-login mx-auto mt-4"
              aria-label="التأكيد"
            >
              {loading ? (
                <Spinner animation="border" variant="primary" />
              ) : (
                "تأكيد"
              )}
            </Button>
          </Form>
        </Col>
      </Row>
      {/* Notification */}
      <ToastContainer />
    </Container>
  );
};

export default VerifyPasswordPage;
