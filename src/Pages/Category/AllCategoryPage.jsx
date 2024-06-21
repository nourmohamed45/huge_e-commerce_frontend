import { Container } from "react-bootstrap";
import CategoryContainer from "../../Components/Category/CategoryContainer";
import Pagination from "../../Components/utilities/Pagination";
import AllCategoryPageHook from "../../Logic/category/all-category-page-hook";


const AllCategoryPage = () => {
  
  const [category, loading, pageCount, getPage] = AllCategoryPageHook();

  return (
    <Container style={{ minHeight: "460px" }}>
      <h4 className="admin-content-text pe-3 mt-5">كل التصنيفات</h4>
      <CategoryContainer categoryData={category.data} loading={loading} />
      {pageCount < 2 ? (
        ""
      ) : (
        <Pagination pageCount={pageCount} onPress={getPage} />
      )}
    </Container>
  );
};

export default AllCategoryPage;
