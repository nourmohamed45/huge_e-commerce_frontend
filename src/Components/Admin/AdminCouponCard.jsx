import { Button, Col, Modal, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import deleteIcon from "../../assets/images/delete.png";
import editIcon from "../../assets/images/edit.png";

import PropTypes from "prop-types";
import DeleteCouponHook from "../../Logic/coupons/delete-coupon-hook";
import FormatDateHook from "../../Logic/general/format-date-hook";
import useScrollToTop from "../../Logic/general/scroll-to-top-hook";

const AdminCouponCard = ({ coupon }) => {
  const [show, handleClose, handleShow, handleDelete] = DeleteCouponHook();
  const [formattedDate] = FormatDateHook(coupon.expire);
  const scrollToTop = useScrollToTop();
  scrollToTop();
  return (
    <>
      {/* Start Modal Compoennt */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>هل تريد الحذف</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          سيتم حذف المنتج{" "}
          <span style={{ color: "green" }}>{`(${coupon.name})`}</span>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            إلغاء
          </Button>
          <Button variant="danger" onClick={() => handleDelete(coupon._id)}>
            حذف
          </Button>
        </Modal.Footer>
      </Modal>
      {/* End Modal Compoennt */}
      <div
        className="admin-coupon-card my-3 p-2 pb-3"
        style={{ background: "white", borderRadius: "10px" }}
      >
        <Row className="d-flex justify-content-between">
          <Col xs={8}>
            <div className="p-2 px-2" aria-label="admin coupon type">
              <span className="fw-bold">كود الكوبون: </span> {coupon.name}
            </div>
          </Col>
          <Col xs={4} className="d-flex justify-content-end">
            <div className="d-flex p-2">
              <Link
                to={`/admin/edit-coupon/${coupon._id}`}
                style={{ textDecoration: "none" }}
                aria-label="Edit coupon"
                onClick={() => scrollToTop()}
              >
                <div className="d-flex mx-2">
                  <img
                    alt="Edit icon"
                    className="ms-1 mt-2"
                    src={editIcon}
                    height="17px"
                    width="15px"
                  />
                  <button className="item-delete-edit border-0 bg-transparent mb-0">
                    تعديل
                  </button>
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
                <button
                  onClick={handleShow}
                  className="item-delete-edit border-0 bg-transparent mb-0"
                >
                  ازاله
                </button>
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
    </>
  );
};

export default AdminCouponCard;

AdminCouponCard.propTypes = {
  coupon: PropTypes.object,
};
