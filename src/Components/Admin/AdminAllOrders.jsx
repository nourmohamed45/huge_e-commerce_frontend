import { Row } from "react-bootstrap"
import AdminAllOrdersItem from "./AdminAllOrdersItem"

const AdminAllOrders = () => {
  return (
    <section >
      <h2 className="admin-content-text">إدارة الطلبات</h2>
      <Row className="justify-content-start">
        <AdminAllOrdersItem title={"Dell لابتوب "} />
        <AdminAllOrdersItem title={"Dell لابتوب "} />
        <AdminAllOrdersItem title={"Dell لابتوب "} />
        <AdminAllOrdersItem title={"Dell لابتوب "} />
        <AdminAllOrdersItem title={"Dell لابتوب "} />
      </Row>
    </section>
  )
}

export default AdminAllOrders