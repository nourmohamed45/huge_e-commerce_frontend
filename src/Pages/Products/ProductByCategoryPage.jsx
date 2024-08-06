import { Col, Container, Row } from "react-bootstrap";
import Pagination from "../../Components/utilities/Pagination";
import ProductCardContainer from "../../Components/Products/ProductCardContainer";
import { useParams } from "react-router-dom";
import ViewAllProductsCategoryHook from "../../Logic/product/view-all-products-category-hook";

const ProductByCategoryPage = () => {
  const { id } = useParams();
  const [loading, items, pageCount, getPage, error] = ViewAllProductsCategoryHook(id);

  return (
    <div style={{ minHeight: "680px" }}>
      <Container className="my-3">
        <Row className="d-flex flex-row">
          <Col xs="12">
            {error ? (
              <h1>لايوجد منتجات تابعة لهذا التصنيف حتي الأن</h1>
            ) : loading ? (
              <h1>Loading...</h1>
            ) : items.results > 0  ? (
              <ProductCardContainer
                productsData={items.data}
                title=""
                subtitlebtn=""
              />
            ) : (
              <h1>لايوجد منتجات تابعة لهذا التصنيف حتي الأن</h1>
            )}
          </Col>
        </Row>
        {pageCount > 1 && <Pagination pageCount={pageCount} onPress={getPage} />}
      </Container>
    </div>
  );
};

export default ProductByCategoryPage;
