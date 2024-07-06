import { Col, Container, Row } from "react-bootstrap";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import SearchCountResult from "../../Components/utilities/SearchCountResult";
import SideFilter from "../../Components/utilities/SideFilter";
import ProductCardContainer from "../../Components/Products/ProductCardContainer";
import Pagination from "../../Components/utilities/Pagination";
import ViewSearchProductHook from "../../Logic/product/view-search-product-hook";

const ShopProductsPage = () => {
  const [items, pageCount, getPage, getProducts] = ViewSearchProductHook();
  return (
    <div style={{ minHeight: "680px" }}>
      <CategoryHeader />
      {items ? (
        <Container className="my-3">
          <SearchCountResult getProductBySort={getProducts} title={`نتيجة بحث ${items.results}`} />
          <Row className="d-flex flex-row">
            <Col className="d-flex" xs="2" sm="2" md="1">
              <SideFilter />
            </Col>
            <Col xs="10" sm="10" md="11">
              {items.results > 0 ? (
                <ProductCardContainer
                  productsData={items.data}
                  title=""
                  subtitlebtn=""
                />
              ) : (
                <h1>لايوجد نتيجة بحث</h1>
              )}
            </Col>
          </Row>
          {pageCount > 1 && (
            <Pagination pageCount={pageCount} onPress={getPage} />
          )}
        </Container>
      ) : null}
    </div>
  );
};

export default ShopProductsPage;
