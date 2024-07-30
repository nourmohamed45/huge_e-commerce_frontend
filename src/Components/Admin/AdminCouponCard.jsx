import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import deleteIcon from "../../assets/images/delete.png";
import editIcon from "../../assets/images/edit.png";

import PropTypes from "prop-types";

const AdminCouponCard = ({coupon}) => {
  // Convert date time stamp to custom format
  function getFormattedDate(isoString) {
    const date = new Date(isoString);
    
    const year = date.getUTCFullYear();
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
    const day = date.getUTCDate().toString().padStart(2, '0');
    
    return `${year}-${month}-${day}`;
  }
  const formattedDate = getFormattedDate(coupon.expire);
  return (
    <div className="admin-coupon-card my-3 p-2 pb-3" style={{background: "white", borderRadius: "10px"}}>
      <Row className="d-flex justify-content-between">
        <Col xs={8}>
          <div className="p-2 px-2" aria-label="admin coupon type">
            <span className="fw-bold">كود الكوبون: </span> {coupon.name}
          </div>
        </Col>
        <Col xs={4} className="d-flex justify-content-end">
          <div className="d-flex p-2">
            <Link
              to="/user/edit-address"
              style={{ textDecoration: "none" }}
              aria-label="Edit coupon"
            >
              <div className="d-flex mx-2">
                <img
                  alt="Edit icon"
                  className="ms-1 mt-2"
                  src={editIcon}
                  height="17px"
                  width="15px"
                />
                <p className="item-delete-edit mb-0">تعديل</p>
              </div>
            </Link>
            <div className="d-flex">
              <img
                alt="Delete icon"
                className="ms-1 mt-2"
                src={deleteIcon}
                height="17px"
                width="15px"
                aria-label="Delete coupon"
              />
              <p className="item-delete-edit mb-0">ازاله</p>
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
            <span className="fw-bold">قيمة الخصم: </span> %{coupon.discount}
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
            تاريخ الإنتهاء:
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
            {formattedDate}
          </div>
        </Col>
      </Row>
      
    </div>
  );
};

export default AdminCouponCard;


AdminCouponCard.propTypes = {
  coupon: PropTypes.object,
};