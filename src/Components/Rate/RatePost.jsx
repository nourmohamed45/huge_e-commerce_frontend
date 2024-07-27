import { Col, Row, Spinner } from "react-bootstrap";
import AddRateHook from "../../Logic/review/add-rate-hook";

import StarRating from "../utilities/StarRating";

const RatePost = () => {
  const {
    formData,
    handleChange,
    handleRatingChange,
    handleSubmit,
    loading,
    user,
  } = AddRateHook();

  return (
    <>
      <Row className="mt-3 ">
        <Col className="me-5  d-flex">
          <span
            className="rate-name  d-inline ms-3 mt-1"
            aria-label="user name"
          >
            {user?.name}
          </span>
          <StarRating
            reviewValue={formData.reviewValue}
            handleRatingChange={handleRatingChange}
          />
        </Col>
      </Row>
      <Row className="border-bottom mx-2">
        <Col className="d-felx me-4 pb-2">
          <textarea
            name="reviewText"
            value={formData.reviewText}
            onChange={handleChange}
            className="input-form-area p-2 mt-3"
            rows="2"
            cols="20"
            placeholder="اكتب تعليقك...."
            aria-label="comment input"
          />
          <button
            className="product-cart-add px-3  py-2 text-center d-inline float-start"
            aria-label="post rate"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? (
              <Spinner animation="border" variant="primary" />
            ) : (
              "اضف تعليق"
            )}
          </button>
        </Col>
      </Row>
    </>
  );
};

export default RatePost;
