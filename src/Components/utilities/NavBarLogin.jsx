import { Container, Form, Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import login from "../../assets/images/login.png";
import cart from "../../assets/images/cart.png";
import NavbarSearchHook from "../../Logic/search/navbar-search-hook";

const NavBarLogin = () => {
  const [ ,onChangeSearch] = NavbarSearchHook()
  let word = "";
    if (localStorage.getItem("searchWord")) {
      word = localStorage.getItem("searchWord");
    }

  return (
    <Navbar expand="sm" className="sticky-top" bg="dark" variant="dark" style={{zIndex: "999"}}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} className="logo" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form.Control
            value={word}
            onChange={onChangeSearch}
            type="search"
            placeholder="ابحث..."
            className="mx-md-3  w-100 mt-3 mt-md-0 text-center"
            aria-label="Search"
            id="navBarSearchForm"
          />
          <Nav
            className="me-auto d-flex flex-row justify-content-center gap-3 mt-3 mt-md-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              href="/login"
              className="nav-text d-flex justify-content-center align-items-center"
            >
              <img src={login} alt="Login Img" className="login-img ms-2" />
              <p style={{ marginBottom: "0px" }}>دخول</p>
            </Nav.Link>
            <Nav.Link
              href="/cart"
              className="nav-text d-flex justify-content-center align-items-center"
            >
              <img src={cart} alt="Cart Img" className="login-img ms-2" />
              <p style={{ marginBottom: "0px" }}>العربة</p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarLogin;
