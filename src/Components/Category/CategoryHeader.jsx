import { Col, Container, Row, Spinner } from "react-bootstrap";
import AllCategoryPageHook from "../../Logic/category/all-category-page-hook";
import { Link } from "react-router-dom";

const CategoryHeader = () => {
  const categoryLimit = 9;
  const [category, loading] = AllCategoryPageHook(categoryLimit);

  return (
    <div className="cat-header">
      <Container>
        <Row>
          <Col className="d-flex justify-content-start py-2 flex-wrap">
            {loading ? (
              <Spinner animation="border" variant="primary" />
            ) : (
              <>
                {category?.data?.slice(0, categoryLimit).map((cat) => (
                  <Link key={cat._id} to={`/products/category/${cat._id}`}>
                    <div className="cat-text-header">{cat.name}</div>
                  </Link>
                ))}
                <Link to={`/allCategory`}>
                  <div className="cat-text-header">المزيد</div>
                </Link>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CategoryHeader;
