// Bootstrap
import { Container, Row, Spinner } from "react-bootstrap";

// Components
import SubTitle from "../utilities/SubTitle";
import CategoryCard from "../Category/CategoryCard";
import HomeCategoryHook from "../../Logic/category/home-category-hook";

const HomeCategory = () => {
  const [categoryData, loading, color] = HomeCategoryHook();

  return (
    <Container>
      <SubTitle subtitle="التصنيفات" subtitlebtn="المزيد" path="allCategory" />
      <Row className="my-2 d-flex justify-content-between">
        {loading === false ? (
          categoryData ? (
            categoryData.data.slice(0, 6).map((category, index) => (
              <CategoryCard
                key={category._id}
                background={color[index]} // Assign random background color
                img={category.image}
                title={category.name}
                id={category._id}
              />
            ))
          ) : (
            <h4>لاي يوجد تصنيفات</h4>
          )
        ) : (
          <Spinner className=" m-auto" animation="border" variant="primary" />
        )}
      </Row>
    </Container>
  );
};

export default HomeCategory;
