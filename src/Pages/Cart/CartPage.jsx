import { Col, Container, Row, Spinner } from "react-bootstrap";
import CartItem from "../../Components/Cart/CartItem";
import CartCheckOut from "../../Components/Cart/CartCheckOut";
import GetLoggedUserCartHook from "../../Logic/cart/get-logged-user-cart-hook";
import { ToastContainer } from "react-toastify";

const CartPage = () => {
  const [loading, , , cartItems, totalCartPrice] = GetLoggedUserCartHook();
  return (
    <Container style={{ minHeight: "680px" }}>
      <Row>
        <h3 className="cart-title mt-4" aria-label="cart">
          عربة التسوق
        </h3>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col xs="12" md="9">
          {loading ? (
            <Spinner animation="border" variant="primary" />
          ) : (
            cartItems && cartItems.length >= 1 ? (
              cartItems.map((item) => <CartItem key={item.product._id} item={item} />)
            ) : (
              <h4>العربة لا تحتوي علي منتجات</h4>
            )
          )}
        </Col>
        <Col xs="12" md="3" className="d-flex justify-content-center mt-md-3">
          <CartCheckOut totalCartPrice={totalCartPrice}/>
        </Col>
      </Row>
      {/* Notifications */}
      <ToastContainer autoClose={2000} />
    </Container>
  );
};

export default CartPage;
