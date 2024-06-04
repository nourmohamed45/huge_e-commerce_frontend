import { Container, Row } from "react-bootstrap";
import SubTitle from "../utilities/SubTitle";
import BrandCard from "./BrandCard";


// import images
import brand1 from "../../assets/images/brand1.png"
import brand2 from "../../assets/images/brand2.png"
import brand3 from "../../assets/images/brand3.png"


// import proptype
import PropTypes from "prop-types";

const BrandCardContainer = ({subtitle, subtitlebtn}) => {
  return (
    <Container>
      <SubTitle subtitle={subtitle} subtitlebtn={subtitlebtn} path={"allBrand"}/>
      <Row className="my-2 d-flex justify-content-between">
        <BrandCard img={brand1} />
        <BrandCard img={brand2} />
        <BrandCard img={brand3} />
        <BrandCard img={brand1} />
        <BrandCard img={brand2} />
        <BrandCard img={brand3} />
      </Row>
    </Container>
  );
}

export default BrandCardContainer

BrandCardContainer.propTypes = {
  subtitle: PropTypes.string,
  subtitlebtn: PropTypes.string,
};