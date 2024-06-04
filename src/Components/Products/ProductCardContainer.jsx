import { Container, Row } from "react-bootstrap";
import SubTitle from "../utilities/SubTitle";
import ProductCard from "./ProductCard";

// import Proptypes
import PropTypes from "prop-types";




const ProductCardContainer = ({ subtitle, subtitlebtn, path }) => {
  return (
    <Container>
      <SubTitle subtitle={subtitle} subtitlebtn={subtitlebtn} path={path}/>
      <Row className="my-2 d-flex justify-content-between">
        <ProductCard title={"طقم حلل مكون من 24 قطعة"} />
        <ProductCard title={"طقم حلل مكون من 24 قطعة"} />
        <ProductCard title={"طقم حلل مكون من 24 قطعة"} />
        <ProductCard title={"طقم حلل مكون من 24 قطعة"} />
      </Row>
    </Container>
  );
};

export default ProductCardContainer

ProductCardContainer.propTypes = {
  subtitle: PropTypes.string,
  subtitlebtn: PropTypes.string,
  path: PropTypes.string,
};