import { Container, Row, Spinner } from "react-bootstrap";
import BrandCard from "./BrandCard";

import PropTypes from "prop-types";

const BrandPageContainer = ({ brandData, loading }) => {
  
  return (
    <Container className="mt-0">
      <Row className="my-2 d-flex justify-content-start">
        {loading === false ? (
          brandData ? (
            brandData.map((brand) => (
              <BrandCard key={brand._id} brandName={brand.name} img={brand.image} id={brand._id} />
            ))
          ) : null
        ) : (
          <Spinner className="m-auto" animation="border" variant="primary" />
        )}
      </Row>
    </Container>
  );
};

export default BrandPageContainer;

BrandPageContainer.propTypes = {
  brandData: PropTypes.array,
  loading: PropTypes.bool,
};
