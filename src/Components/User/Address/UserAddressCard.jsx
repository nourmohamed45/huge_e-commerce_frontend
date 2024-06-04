import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import deleteicon from "../../../assets/images/delete.png";

const UserAddressCard = () => {
  return (
    <div className="user-address-card my-3">
      <Row className="d-flex justify-content-between">
        <Col xs={1}>
          <div className="p-2 px-2" aria-label="Address type">المنزل</div>
        </Col>
        <Col xs={4} className="d-flex justify-content-end">
          <div className="d-flex p-2">
            <div className="d-flex mx-2">
              <img
                alt="Edit icon"
                className="ms-1 mt-2"
                src={deleteicon}
                height="17px"
                width="15px"
              />
              <Link to="/user/edit-address" style={{ textDecoration: "none" }} aria-label="Edit address">
                <p className="item-delete-edit">تعديل</p>
              </Link>
            </div>
            <div className="d-flex">
              <img
                alt="Delete icon"
                className="ms-1 mt-2"
                src={deleteicon}
                height="17px"
                width="15px"
                aria-label="Delete address"
              />
              <p className="item-delete-edit">ازاله</p>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs={12} className="px-4">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "14px",
            }}
          >
            القاهرة مدينه نصر شارع التسعين عماره ١٤
          </div>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col xs={12} className="d-flex px-4">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
            aria-label="Phone number label"
          >
            رقم الهاتف:
          </div>
          <div
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
            className="mx-2"
            aria-label="Phone number"
          >
            0021313432423
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default UserAddressCard;
