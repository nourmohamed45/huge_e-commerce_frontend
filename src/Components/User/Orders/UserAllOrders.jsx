import { Row } from "react-bootstrap"
import UserAllOrdersItem from "./UserAllOrdersItem"

const UserAllOrders = () => {
  return (
    <section>
      <h2 className="admin-content-text"> أهلا محمد علي </h2>

      <Row className="justify-content-between">
        <UserAllOrdersItem />
        <UserAllOrdersItem />
      </Row>
      
    </section>
  )
}

export default UserAllOrders