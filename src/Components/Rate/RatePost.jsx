import { Col, Row } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

const RatePost = () => {
  const postStars = {
    size: 20,
    count: 5,
    color: "#979797",
    activeColor: "#ffc107",
    value: 0,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
    onChange: (newValue) => {
      console.log(`Example 2: new value is ${newValue}`);
    },
  };

  return (
    <>
      <Row className="mt-3 ">
        <Col  className="me-5  d-flex">
          <span
            className="rate-name  d-inline ms-3 mt-1"
            aria-label="user name"
          >
            علي محمد
          </span>
          <ReactStars {...postStars} />
        </Col>
      </Row>
      <Row className="border-bottom mx-2">
        <Col className="d-felx me-4 pb-2">
          <textarea
            className="input-form-area p-2 mt-3"
            rows="2"
            cols="20"
            placeholder="اكتب تعليقك...."
            aria-label="comment input"
          />
          <button
            className="product-cart-add px-3  py-2 text-center d-inline float-start"
            aria-label="post rate"
          >
            اضف تعليق
          </button>
        </Col>
      </Row>
    </>
  );
};

export default RatePost;
