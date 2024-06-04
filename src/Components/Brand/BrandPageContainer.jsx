import { Container, Row } from "react-bootstrap";
import BrandCard from "./BrandCard";




// import images
import brand1 from "../../assets/images/brand1.png"
import brand2 from "../../assets/images/brand2.png"
import brand3 from "../../assets/images/brand3.png"

const BrandPageContainer = () => {
  return (
    <Container className="mt-0">
      <Row className="my-2 d-flex justify-content-between">
        <BrandCard img={brand1} />
        <BrandCard img={brand3} />
        <BrandCard img={brand2} />
        <BrandCard img={brand2} />
        <BrandCard img={brand1} />
        <BrandCard img={brand3} />
        <BrandCard img={brand1} />
        <BrandCard img={brand3} />
        <BrandCard img={brand2} />
        <BrandCard img={brand2} />
        <BrandCard img={brand3} />
        <BrandCard img={brand1} />
      </Row>
    </Container>
  );
}

export default BrandPageContainer