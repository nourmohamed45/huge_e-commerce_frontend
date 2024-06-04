import { Container, Row } from "react-bootstrap";
import CategoryCard from "./CategoryCard";



// import images
import category1 from "../../assets/images/cat2.png";
import category2 from "../../assets/images/clothe.png";
import category3 from "../../assets/images/laptops.png";
import category4 from "../../assets/images/mobile1.png";
import category5 from "../../assets/images/pic.png";

const CategoryContainer = () => {
  return (
    <Container className="mt-0">
      <Row className="my-2 d-flex justify-content-between">
        <CategoryCard background={"red"} img={category1} title={"إكسسوارات"} />
        <CategoryCard background={"blue"} img={category2} title={"ملابس"} />
        <CategoryCard background={"green"} img={category3} title={"لابتوب"} />
        <CategoryCard
          background={"violet"}
          img={category4}
          title={"موبايلات"}
        />
        <CategoryCard
          background={"yellow"}
          img={category5}
          title={"أدوات منزلية"}
        />
        <CategoryCard background={"red"} img={category1} title={"إكسسوارات"} />
        <CategoryCard background={"blue"} img={category2} title={"ملابس"} />
        <CategoryCard background={"green"} img={category3} title={"لابتوب"} />
        <CategoryCard
          background={"violet"}
          img={category4}
          title={"موبايلات"}
        />
        <CategoryCard
          background={"yellow"}
          img={category5}
          title={"أدوات منزلية"}
        />
        <CategoryCard background={"red"} img={category1} title={"إكسسوارات"} />
        <CategoryCard background={"blue"} img={category2} title={"ملابس"} />
      </Row>
    </Container>
  );
};

export default CategoryContainer;
