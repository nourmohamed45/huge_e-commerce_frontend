import { Col, Container, Row } from "react-bootstrap";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import SearchCountResult from "../../Components/utilities/SearchCountResult";
import SideFilter from "../../Components/utilities/SideFilter";
import ProductCardContainer from "../../Components/Products/ProductCardContainer";
import Pagination from "../../Components/utilities/Pagination";
import ViewSearchProductHook from "../../Logic/product/view-search-product-hook";

const ShopProductsPage = () => {
  const [items] = ViewSearchProductHook(20);
  return (
    <div style={{ minHeight: "680px" }}>
      <CategoryHeader />
      {items ? (
        <Container className="my-3">
          {items.results ? (
            <SearchCountResult title={`نتيجة بحث ${items.results}`} />
          ) : null}
          <Row className="d-flex flex-row">
            <Col className="d-flex" xs="2" sm="2" md="1">
              <SideFilter />
            </Col>
            <Col xs="10" sm="10" md="11">
              <ProductCardContainer
                productsData={items.data}
                title=""
                subtitlebtn=""
              />
            </Col>
          </Row>
          <Pagination />
        </Container>
      ) : null}
    </div>
  );
};

export default ShopProductsPage;
