import { Container } from "react-bootstrap";

import Pagination from "../../Components/utilities/Pagination";
import BrandPageContainer from "../../Components/Brand/BrandPageContainer";
import AllBrandsPageHook from "../../Logic/brands/all-brands-page-hook";

const AllBrandPage = () => {
  const [brand, loading, pageCount, getPage] = AllBrandsPageHook();

  return (
    <Container style={{ minHeight: "460px" }}>
      <h4 className="admin-content-text pe-3 mt-5">كل الماركات:</h4>
      <BrandPageContainer brandData={brand?.data} loading={loading} />
      {pageCount < 2 ? (
        ""
      ) : (
        <Pagination pageCount={pageCount} onPress={getPage} />
      )}
    </Container>
  );
};

export default AllBrandPage;
