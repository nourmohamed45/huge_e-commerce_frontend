import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import ResetPasswordHook from "../../Logic/auth/reset-password-hook";
import openEye from "../../assets/images/openEye.png";
import closeEye from "../../assets/images/closeEye.png";

const ResetPasswordPage = () => {
  const {
    formData,
    handleChange,
    handleSubmit,
    loading,
    showPassword,
    togglePasswordVisibility,
    showConfirmPassword,
    toggleConfirmPasswordVisibility,
  } = ResetPasswordHook();

  return (
    <Container style={{ minHeight: "680px" }}>
      <Row className="py-5 d-flex justify-content-center">
        <Col sm={12} className="d-flex flex-column">
          <h2 className="mx-auto title-login" id="login-heading">
            أدخل كلمة السر الجديدة
          </h2>
          <Form
            onSubmit={handleSubmit}
            className="d-flex align-items-center flex-column"
          >
            {/* ================== Password ================== */}
            <Form.Group
              controlId="formPassword"
              style={{ position: "relative" }}
            >
              <Form.Label className="visually-hidden">كلمة السر الجديدة:</Form.Label>
              <div style={{ position: "relative", width: "fit-content" }}>
                <Form.Control
                  name="newPassword"
                  value={formData.newPassword}
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
                أدخل كلمة المرور الجديدة.
              </Form.Text>
            </Form.Group>
            {/* ================== Confirm Password ================== */}
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

export default ResetPasswordPage;
