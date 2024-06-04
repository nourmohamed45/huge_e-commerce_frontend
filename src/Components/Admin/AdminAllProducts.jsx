import { Row } from "react-bootstrap";
import AdminAllProductsCard from "./AdminAllProductsCard";

const AdminAllProducts = () => {
  return (
    <section>
      <h2 className="admin-content-text">إدارة المنتجات</h2>
      <Row className="justify-content-center justify-content-sm-start">
        <AdminAllProductsCard title={"Dell لابتوب "} />
        <AdminAllProductsCard title={"Dell لابتوب "} />
        <AdminAllProductsCard title={"Dell لابتوب "} />
        <AdminAllProductsCard title={"Dell لابتوب "} />
        <AdminAllProductsCard title={"Dell لابتوب "} />
      </Row>
    </section>
  );
};

export default AdminAllProducts;
