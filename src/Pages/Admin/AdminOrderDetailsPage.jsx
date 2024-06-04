import { Col, Container, Row } from "react-bootstrap"
import AdminSideBar from "../../Components/Admin/AdminSideBar"
import AdminOrderDetails from "../../Components/Admin/AdminOrderDetails"

const AdminOrderDetailsPage = () => {
  return (
    <Container style={{ minHeight: "680px" }}>
      <Row className="my-4">
        <Col xs="0" sm="0" md="2">
          <AdminSideBar />
        </Col>
        <Col xs="12" sm="12" md="10">
          <AdminOrderDetails />
        </Col>
      </Row>
    </Container>
  )
}

export default AdminOrderDetailsPage