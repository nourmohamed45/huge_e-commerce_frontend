import { Row } from "react-bootstrap";
import AdminAllProductsCard from "./AdminAllProductsCard";

import PropTypes from "prop-types";


const AdminAllProducts = ({productsData}) => {
  return (
    <section>
      <h2 className="admin-content-text">إدارة المنتجات</h2>
      <Row className="justify-content-center justify-content-sm-start">
        {
          productsData ? (
            productsData.length > 0 ? (
              productsData.map((product) => (
                <AdminAllProductsCard key={product._id} productCardData={product} />
              ))
            ) : (
              <h4>لايوجد منتجات</h4>
            )
          ) : null
        }
      </Row>
    </section>
  );
};

export default AdminAllProducts;

AdminAllProducts.propTypes = {
  productsData: PropTypes.array,
};
