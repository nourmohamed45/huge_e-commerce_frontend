import { Col, Container, Row } from "react-bootstrap";


// import components
import RateItem from "./RateItem";
import RatePost from "./RatePost";
import Pagination from "../utilities/Pagination"



const RateContainer = () => {
  return (
    <Container className="rate-container">
      <Row>
        <Col className="d-flex align-items-center gap-2 mt-4">
          <h3 className="sub-title d-inline p-1 mb-0">التقييمات:</h3>
          <span
            className="cat-rate   d-flex align-items-center gap-2"
            aria-label="Rating 4.5"
            style={{ fontSize: "1.2rem" }}
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              width={20}
              height={20}
              fill="#ffc107"
            >
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>{" "}
            <div
              className="d-flex align-items-center"
              style={{ height: "fit-content", marginTop: "3px" }}
            >
              4.5
            </div>
          </span>
          <div className="rate-count d-inline p-1 pt-2 ">(160 تقييم)</div>
        </Col>
      </Row>
      <RatePost />
      <RateItem />
      <RateItem />
      <RateItem />
      <Pagination />
    </Container>
  );
};

export default RateContainer;
