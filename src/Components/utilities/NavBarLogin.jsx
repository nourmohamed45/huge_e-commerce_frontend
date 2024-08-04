import { Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import login from "../../assets/images/login.png";
import cart from "../../assets/images/cart.png";
import NavbarSearchHook from "../../Logic/search/navbar-search-hook";
import NavbarLoginHook from "../../Logic/auth/navbar-login-hook";
import GetLoggedUserCartHook from "../../Logic/cart/get-logged-user-cart-hook";

const NavBarLogin = () => {
  const [, onChangeSearch, word] = NavbarSearchHook();

  const { user, logOut } = NavbarLoginHook();

  const [, , itemsNumber] = GetLoggedUserCartHook();

  return (
    <Navbar
      expand="sm"
      className="sticky-top"
      bg="dark"
      variant="dark"
      style={{ zIndex: "999" }}
    >
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
            className="me-auto d-flex flex-row justify-content-center align-items-center gap-1 mt-3 mt-md-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {user ? (
              <NavDropdown title={user.name} id="basic-nav-dropdown">
                {user?.role === "user" ? (
                  <NavDropdown.Item href="/user/profile">
                    الصفحة الشخصية
                  </NavDropdown.Item>
                ) : (
                  <NavDropdown.Item href="/admin/allproducts">
                    لوحة التحكم
                  </NavDropdown.Item>
                )}
                <NavDropdown.Item href="/" onClick={logOut}>
                  تسجيل خروج
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link
                href="/login"
                className="nav-text d-flex justify-content-center align-items-center"
              >
                <img src={login} alt="Login Img" className="login-img ms-2" />
                <p style={{ marginBottom: "0px" }}>دخول</p>
              </Nav.Link>
            )}
            <Nav.Link
              href="/cart"
              className="nav-text d-flex justify-content-center align-items-center"
            >
              <button
                style={{
                  marginBottom: "0px",
                  background: "transparent",
                  color: "white",
                  border: "none",
                }}
                className="btn position-relative d-flex"
              >
                <img src={cart} alt="Cart Img" className="login-img ms-2" />
                العربة{" "}
                <span className="position-absolute top-0 start-0 translate-middle badge bg-danger text-white rounded-pill">
                  {itemsNumber || 0} {" "}
                  <span className="visually-hidden">unread messages</span>
                </span>
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarLogin;
