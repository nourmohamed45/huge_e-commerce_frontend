import { Container } from "react-bootstrap";


import Pagination from "../../Components/utilities/Pagination";
import BrandPageContainer from "../../Components/Brand/BrandPageContainer";

const AllBrandPage = () => {
  return (
    <Container style={{ minHeight: "460px" }}>
      <h4 className="admin-content-text pe-3 mt-5">كل الماركات:</h4>
      <BrandPageContainer />
      <Pagination />
    </Container>
  );
};

export default AllBrandPage;
