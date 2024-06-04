// Bootstrap Component
import { Col } from "react-bootstrap";

// import Prototype
import PropTypes from "prop-types";

const CategoryCard = ({ img, background, title }) => {
  return (
    <Col
      xs="6"
      sm="6"
      md="4"
      lg="2"
      className="my-4 d-flex justify-content-around"
    >
      <div className="allCard mb-3">
        <div
          className="category-card"
          style={{ backgroundColor: `${background}` }}
        ></div>{" "}
        <img src={img} alt="Category Img" className="category-card-img" />
        <p className="category-card-text my-2">{title}</p>
      </div>
    </Col>
  );
};

export default CategoryCard;

CategoryCard.propTypes = {
  img: PropTypes.string,
  background: PropTypes.string,
  title: PropTypes.string,
};
