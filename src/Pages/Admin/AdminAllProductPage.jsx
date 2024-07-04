import { Col, Container, Row } from "react-bootstrap";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import AdminAllProducts from "../../Components/Admin/AdminAllProducts";
import Pagination from "../../Components/utilities/Pagination";
import ViewProductAdminHook from "../../Logic/admin/view-product-admin-hook";

const AdminAllProductPage = () => {
  const [items, pageCount, getPage] = ViewProductAdminHook();

  return (
    <Container style={{ minHeight: "680px" }}>
      <Row className="my-4">
        <Col xs={0} sm={0} md={0} lg={2}>
          <AdminSideBar />
        </Col>
        <Col xs={12} sm={12} md={12} lg={10}>
          <AdminAllProducts productsData={items?.data} />
        </Col>
        {pageCount > 1 && (
          <Pagination pageCount={pageCount} onPress={getPage} />
        )}
      </Row>
    </Container>
  );
};

export default AdminAllProductPage;
