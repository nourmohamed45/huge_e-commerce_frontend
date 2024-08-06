import { Row } from "react-bootstrap"
import UserAllOrdersItem from "./UserAllOrdersItem"
import GetAllOrdersHook from "../../../Logic/user/get-all-orders-hook"

import Pagination from "../../utilities/Pagination"

const UserAllOrders = () => {
  const [loading, userName, result, paginate, ordersData, onPress] = GetAllOrdersHook();
  return (
    <section>
      <h2 className="admin-content-text"> عدد الطلبات: #{result} </h2>

      <Row className="justify-content-between">
        {
          ordersData?.length >= 1 ? (

            ordersData.map((order) => (
              <UserAllOrdersItem key={order._id} orderData={order} />
            ))
          ) : (
            <h4>لا يوجد طلبات لديك</h4>
          )
        }
        <Pagination pageCount={paginate?.numberOfPages ||  0} onPress={onPress}/>
      </Row>
      
    </section>
  )
}

export default UserAllOrders