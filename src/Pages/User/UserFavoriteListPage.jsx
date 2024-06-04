import { Col, Container, Row } from "react-bootstrap"
import UserSideBar from "../../Components/User/UserSideBar"
import UserFavoriteList from "../../Components/User/UserFavoriteList"

const UserFavoriteListPage = () => {
  return (
    <Container style={{ minHeight: "680px" }}>
      <Row className="my-4">
        <Col xs={0} sm={0} md={0} lg={2}>
          <UserSideBar />
        </Col>
        <Col xs={12} sm={12} md={12} lg={10}>
          <UserFavoriteList />
        </Col>
      </Row>
    </Container>
  )
}

export default UserFavoriteListPage