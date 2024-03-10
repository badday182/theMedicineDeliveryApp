import { Container, Nav, Navbar } from "react-bootstrap";

const HeaderNavbar = () => {
  return (
    
      <Navbar className='my-2 rounded-2' expand="sm" bg="light" data-bs-theme="light">
         <Container>

          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/store">Shop</Nav.Link>
            <Nav.Link href="/shoppingCart">Shopping Cart</Nav.Link>
          </Nav>
         </Container>
       
      </Navbar>
   
  );
};
export default HeaderNavbar