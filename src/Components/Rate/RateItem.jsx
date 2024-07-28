import { Button, Col, Modal, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import deleteIcon from "../../assets/images/delete.png";
import editIcon from "../../assets/images/edit.png";
import DeleteRateHook from "../../Logic/review/delete-rate-hook";
import EditRateHook from "../../Logic/review/edit-rate-hook";
import StarRatingEdit from "../utilities/StarRatingEdit";

const RateItem = ({ review }) => {
  const [showDelete, userCheckExist, , handleClose, handleShow, handleDelete] =
    DeleteRateHook(review);
  const [
    showEdit,
    loading,
    handleCloseEdit,
    handleShowEdit,
    handleEdit,
    reviewText,
    reviewValueEdit,
    handleReviewTextChange,
    handleReviewValueChangeEdit,
  ] = EditRateHook(review);

  return (
    <>
      {/* Delete Modal Component */}
      <Modal show={showDelete} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>هل تريد الحذف</Modal.Title>
        </Modal.Header>
        <Modal.Body>سيتم حذف التعليق </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            إلغاء
          </Button>
          <Button variant="danger" onClick={() => handleDelete(review._id)}>
            حذف
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Edit Modal Component */}
      <Modal show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header>
          <Modal.Title>تعديل التقييم</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <StarRatingEdit
            reviewValueEdit={reviewValueEdit}
            handleRatingChangeEdit={handleReviewValueChangeEdit}
          />
          <input
            type="text"
            value={reviewText}
            onChange={handleReviewTextChange}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEdit}>
            إلغاء
          </Button>
          <Button variant="success" onClick={() => handleEdit(review._id)}>
            تعديل
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Review Item */}
      <Row className="mt-3">
        <Col className="d-flex me-5 align-items-center">
          <div className="rate-name d-inline ms-2">{review.user.name}</div>
          <span
            className="cat-rate d-flex align-items-center gap-1"
            aria-label={`Rating ${review.rating}`}
            style={{ fontSize: "1rem" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              width={20}
              height={20}
              fill="#ffc107"
            >
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>
            <div
              className="d-flex align-items-center"
              style={{ height: "fit-content", marginTop: "3px" }}
            >
              {review.rating}
            </div>
          </span>
        </Col>
      </Row>
      <Row className="border-bottom mx-2 mt-2">
        <Col className="d-flex me-4 pb-2 justify-content-between">
          <div className="rate-description d-inline ms-2">{review.review}</div>
          {userCheckExist && (
            <div className="d-flex gap-2">
              <img
                src={deleteIcon}
                width="22px"
                height="22px"
                style={{ cursor: "pointer" }}
                alt="delete"
                onClick={handleShow}
              />
              <img
                src={editIcon}
                width="22px"
                height="22px"
                style={{ cursor: "pointer" }}
                alt="edit"
                onClick={handleShowEdit}
              />
            </div>
          )}
        </Col>
      </Row>
    </>
  );
};

RateItem.propTypes = {
  review: PropTypes.object.isRequired,
};

export default RateItem;
