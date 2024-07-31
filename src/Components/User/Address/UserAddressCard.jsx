import { Button, Col, Modal, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import deleteIcon from "../../../assets/images/delete.png";
import editIcon from "../../../assets/images/edit.png";

import PropTypes from "prop-types";
import DeleteAddressHook from "../../../Logic/user/delete-address-hook";

const UserAddressCard = ({ address }) => {
  const [show, handleClose, handleShow, handleDelete] = DeleteAddressHook();

  return (
    <>
      {/* Start Delete Modal Compoennt */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>هل تريد الحذف</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          سيتم حذف العنوان{" "}
          <span style={{ color: "green" }}>{`(${address.alias})`}</span>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            إلغاء
          </Button>
          <Button variant="danger" onClick={() => handleDelete(address._id)}>
            حذف
          </Button>
        </Modal.Footer>
      </Modal>
      {/* End Delete Modal Compoennt */}
      <div className="user-address-card my-3 py-2 pb-3">
        <Row className="d-flex justify-content-between">
          <Col xs={8}>
            <div className="p-2 px-2" aria-label="Address type">
              <span style={{ fontWeight: "bold", fontSize: "16px" }}>
                العنوان:
              </span>{" "}
              {address.alias}
            </div>
          </Col>
          <Col xs={4} className="d-flex justify-content-end">
            <div className="d-flex p-2">
              <div className="d-flex mx-2">
                <img
                  alt="Edit icon"
                  className="ms-1 mt-2"
                  src={editIcon}
                  height="17px"
                  width="15px"
                />
                <Link
                  to={`/user/edit-address/${address._id}`}
                  style={{ textDecoration: "none" }}
                  aria-label="Edit address"
                >
                  <button
                    style={{ border: "none", background: "transparent" }}
                    className="item-delete-edit"
                  >
                    تعديل
                  </button>
                </Link>
              </div>
              <div className="d-flex">
                <img
                  alt="Delete icon"
                  className="ms-1 mt-2"
                  src={deleteIcon}
                  height="17px"
                  width="15px"
                  aria-label="Delete address"
                />
                <button
                  onClick={handleShow}
                  style={{ border: "none", background: "transparent" }}
                  className="item-delete-edit"
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
              <span style={{ fontWeight: "bold", fontSize: "16px" }}>
                التفاصيل:
              </span>{" "}
              {address.details}
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
              {address.phone}
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
              المدينة:
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
              {address.city}
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default UserAddressCard;

UserAddressCard.propTypes = {
  address: PropTypes.object,
};
