import { Container, Row, Spinner } from "react-bootstrap";
import SubTitle from "../utilities/SubTitle";
import BrandCard from "./BrandCard";


// import proptype
import PropTypes from "prop-types";

// import logic hook
import BrandCardContainerHook from "../../Logic/brands/brand-card-container-hook";


// brand section in home page
const BrandCardContainer = ({ subtitle, subtitlebtn }) => {
  const [brand, loading] = BrandCardContainerHook();
  return (
    <Container>
      <SubTitle
        subtitle={subtitle}
        subtitlebtn={subtitlebtn}
        path={"allBrand"}
      />
      <Row className="my-2 d-flex justify-content-start">
        {loading === false ? (
          brand.data ? (
            brand.data.slice(0,6).map((item) => (
              <BrandCard key={item._id} img={item.image}  />
            ))
          ) : (
            <h4>لا يوجد ماركات</h4>
          )
        ) : (
          <Spinner className="m-auto" animation="border" variant="primary" />
        )}
      </Row>
    </Container>
  );
};

export default BrandCardContainer;

BrandCardContainer.propTypes = {
  subtitle: PropTypes.string,
  subtitlebtn: PropTypes.string,
};
