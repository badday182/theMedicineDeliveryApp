import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

function HeaderNavbar() {
  return (
    <Nav variant="pills" defaultActiveKey="/home" className="my-2 p-2 rounded-2 border border-primary-subtle rounded-2" as="ul">
      <Nav.Item as="li">
        <NavLink to="/" className="nav-link" activeClassName="active">Home</NavLink>
      </Nav.Item>
      <Nav.Item as="li">
        <NavLink to="/store" className="nav-link" activeClassName="active">Shop</NavLink>
      </Nav.Item>
      <Nav.Item as="li">
        <NavLink to="/cart_cards" className="nav-link" activeClassName="active">Shopping Cart</NavLink>
      </Nav.Item>
    </Nav>
  );
}

export default HeaderNavbar;
