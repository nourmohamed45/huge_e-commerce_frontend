import { Col, Row } from "react-bootstrap";
import UserAddressCard from "./UserAddressCard";
import { Link } from "react-router-dom";
import ViewAddressHook from "../../../Logic/user/view-address-hook";

const UserAllAddresses = () => {
  const [allAddress] = ViewAddressHook();

  return (
    <section>
      <h2 className="admin-content-text">العناوين الشخصية</h2>
      {allAddress?.data?.length === 0 ? (
        <h5 className=" fw-bold mt-5">لا يوجد عناوين حتي الأن</h5>
      ) : (
        allAddress?.data?.map((address) => (
          <UserAddressCard key={address._id} address={address} />
        ))
      )}

      <Row className="justify-content-center">
        <Col sm="5" className="d-flex justify-content-center">
          <Link to="/user/add-address" style={{ textDecoration: "none" }}>
            <button className="btn-add-address">إضافة عنوان</button>
          </Link>
        </Col>
      </Row>
    </section>
  );
};

export default UserAllAddresses;
