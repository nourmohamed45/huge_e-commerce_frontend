import { Col, Container, Row } from "react-bootstrap"
import CategoryHeader from "../../Components/Category/CategoryHeader"
import SearchCountResult from "../../Components/utilities/SearchCountResult"
import SideFilter from "../../Components/utilities/SideFilter"
import ProductCardContainer from "../../Components/Products/ProductCardContainer"
import Pagination from "../../Components/utilities/Pagination"


const ShopProductsPage = () => {
  return (
    <div style={{ minHeight: "680px" }}>
      <CategoryHeader />
      <Container className="my-3">
        <SearchCountResult title={"600 منتج"} />
        <Row className="d-flex flex-row">
          <Col className="d-flex" xs="2" sm="2" md="1">
            <SideFilter />
          </Col>
          <Col xs="10" sm="10" md="11">
            <ProductCardContainer title="" subtitlebtn="" />
          </Col>
        </Row>
        <Pagination />
      </Container>
    </div>
  );
}

export default ShopProductsPage