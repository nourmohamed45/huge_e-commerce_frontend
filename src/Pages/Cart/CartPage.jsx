import { Col, Container, Row } from "react-bootstrap"
import CartItem from "../../Components/Cart/CartItem"
import CartCheckOut from "../../Components/Cart/CartCheckOut"

const CartPage = () => {
  return (
    <Container style={{minHeight: "680px"}}>
      <Row>
        <h3 className="cart-title mt-4" aria-label="cart">عربة التسوق</h3>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col xs="12" md="9">
          <CartItem />
          <CartItem />
          <CartItem />
        </Col>
        <Col xs="12" md="3" className="d-flex justify-content-center mt-md-3">
          <CartCheckOut />
        </Col>
      </Row>
    </Container>
  )
}

export default CartPage