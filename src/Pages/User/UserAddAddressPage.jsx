
import { Col, Container, Row } from 'react-bootstrap'
import UserSideBar from '../../Components/User/UserSideBar'
import UserAddAddress from '../../Components/User/Address/UserAddAddress'
import { ToastContainer } from 'react-toastify'

const UserAddAddressPage = () => {
  return (
    <Container style={{ minHeight: "680px" }}>
      <Row className="my-4">
        <Col xs={0} sm={0} md={0} lg={2}>
          <UserSideBar />
        </Col>
        <Col xs={12} sm={12} md={12} lg={10}>
          <UserAddAddress />
        </Col>
      </Row>
      {/* Notifications */}
      <ToastContainer autoClose={2000} />
    </Container>
  )
}

export default UserAddAddressPage