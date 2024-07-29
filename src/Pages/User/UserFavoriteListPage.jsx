// UserFavoriteListPage.jsx
import { lazy, Suspense } from "react";
import { Col, Container, Row } from "react-bootstrap";

const UserSideBar = lazy(() => import("../../Components/User/UserSideBar"));
const UserFavoriteList = lazy(() => import("../../Components/User/UserFavoriteList"));

const UserFavoriteListPage = () => {
  return (
    <Container>
      <Row className="my-4">
        <Col xs={0} sm={0} md={0} lg={2}>
          <Suspense fallback={<div>Loading...</div>}>
            <UserSideBar />
          </Suspense>
        </Col>
        <Col xs={12} sm={12} md={12} lg={10}>
          <Suspense fallback={<div>Loading...</div>}>
            <UserFavoriteList />
          </Suspense>
        </Col>
      </Row>
    </Container>
  );
};

export default UserFavoriteListPage;