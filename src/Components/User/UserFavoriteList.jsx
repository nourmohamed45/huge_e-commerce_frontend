import { Row } from "react-bootstrap";
import ProductCard from "../Products/ProductCard";
import Pagination from "../utilities/Pagination";

const UserFavoriteList = () => {
  return (
    <section>
      <h2 className="admin-content-text"> قائمة المفضلة </h2>
      <Row className="justify-content-start">
        <ProductCard title={"موبايل Oppo"}/>
        <ProductCard title={"موبايل Oppo"}/>
        <ProductCard title={"موبايل Oppo"}/>
        <ProductCard title={"موبايل Oppo"}/>
        <ProductCard title={"موبايل Oppo"}/>
        <ProductCard title={"موبايل Oppo"}/>
        <ProductCard title={"موبايل Oppo"}/>
        <ProductCard title={"موبايل Oppo"}/>
        <ProductCard title={"موبايل Oppo"}/>
        <ProductCard title={"موبايل Oppo"}/>
      </Row>
      <Pagination />
    </section>
  );
};

export default UserFavoriteList;
