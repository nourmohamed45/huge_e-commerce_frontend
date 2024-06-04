import { Container } from "react-bootstrap";
import CategoryContainer from "../../Components/Category/CategoryContainer"
import Pagination from "../../Components/utilities/Pagination";

const AllCategoryPage = () => {
  return (
    <Container style={{ minHeight: "460px" }}>
      <h4 className="admin-content-text pe-3 mt-5">كل التصنيفات</h4>
      <CategoryContainer />
      <Pagination />
    </Container>
  );
}

export default AllCategoryPage