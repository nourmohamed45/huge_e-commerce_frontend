import { Col, Container, Row } from "react-bootstrap"
import AdminSideBar from "../../Components/Admin/AdminSideBar"
import { ToastContainer } from "react-toastify"
import AdminEditCoupons from "../../Components/Admin/AdminEditCoupons"

const AdminEditCouponPage = () => {
  return (
    <Container style={{ minHeight: "680px" }}>
      <Row className="my-4">
        <Col xs={0} sm={0} md={0} lg={2}>
          <AdminSideBar />
        </Col>
        <Col xs={12} sm={12} md={12} lg={10}>
          <AdminEditCoupons />
        </Col>
      </Row>
      
      {/* Notifications */}
      <ToastContainer />
    </Container>
  )
}

export default AdminEditCouponPage