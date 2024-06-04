import { Col, Row } from "react-bootstrap"
import UserAddressCard from "./UserAddressCard"
import { Link } from "react-router-dom"

const UserAllAddresses = () => {
  return (
    <section>
      <h2 className="admin-content-text"> العناوين الشخصية</h2>
      <UserAddressCard />
      <UserAddressCard />
      <UserAddressCard />

      <Row className="justify-content-center">
          <Col sm="5" className="d-flex justify-content-center">
            <Link to="/user/add-address" style={{ textDecoration: "none" }}>
              <button className="btn-add-address">اضافه عنوان جديد</button>
            </Link>
          </Col>
        </Row>
    </section>
  )
}

export default UserAllAddresses