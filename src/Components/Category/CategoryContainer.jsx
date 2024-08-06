import { Container, Row, Spinner } from "react-bootstrap";
import CategoryCard from "./CategoryCard";
import PropTypes from "prop-types";

const CategoryContainer = ({ categoryData, loading }) => {
  const colors = ["red", "green", "blue", "yellow", "violet", "purple"];

  return (
    <Container className="mt-0">
      <Row className="my-2 d-flex justify-content-start">
        {loading === false ? (
          categoryData ? (
            categoryData?.map((category, index) => (
              <CategoryCard
                key={category._id}
                background={colors[index % colors.length]} // Assign random background color
                img={category.image}
                title={category.name}
                id={category._id}
              />
            ))
          ) : (
            <h4>لا يوجد تصنيفات</h4>
          )
        ) : (
          <Spinner className="m-auto" animation="border" variant="primary" />
        )}
      </Row>
    </Container>
  );
};

CategoryContainer.propTypes = {
  categoryData: PropTypes.array, // Expecting an array instead of an object
  loading: PropTypes.bool.isRequired,
};

export default CategoryContainer;
