import { Col, Container, Row } from "react-bootstrap"
import UserSideBar from "../../Components/User/UserSideBar"
import UserProfile from "../../Components/User/UserProfile"
import { ToastContainer } from "react-toastify"

const UserProfilePage = () => {
  return (
    <Container style={{ minHeight: "680px" }}>
      <Row className="my-4">
        <Col xs={0} sm={0} md={0} lg={2}>
          <UserSideBar />
        </Col>
        <Col xs={12} sm={12} md={12} lg={10}>
          <UserProfile />
        </Col>
      </Row>
      {/* Notifications */}
      <ToastContainer autoClose={2000} />
    </Container>
  )
}

export default UserProfilePage