import { Nav, Navbar } from "react-bootstrap";

const HeaderNavbar = () => {
  return (
    
      <Navbar bg="light" data-bs-theme="light">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#shop">Shop</Nav.Link>
            <Nav.Link href="#shoppingCart">Shopping Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
   
  );
};
export default HeaderNavbar