import { useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import './header_navbar_css.css'
import { useSelector } from 'react-redux';
function HeaderNavbar() {
 
  const cartMedicinesArray = useSelector((state) => state.cart.medicinesArray.length);

  return (
    <Nav variant="pills" defaultActiveKey="/home" className="my-2 p-2 rounded-2 border border-primary-subtle rounded-2" as="ul">
      <Nav.Item as="li">
        <NavLink to="/" className="nav-link" activeclassname="active">Home</NavLink>
      </Nav.Item>
      <Nav.Item as="li">
        <NavLink to="/store" className="nav-link" activeclassname="active">Shop</NavLink>
      </Nav.Item>
      <Nav.Item as="li" className="position_relative">
        <NavLink to="/cart_cards" className="cart_border nav-link" activeclassname="active">Shopping Cart</NavLink>     
        {cartMedicinesArray > 0 && <span className="notification-badge">{cartMedicinesArray}</span>}
      </Nav.Item>
    </Nav>
  );
}

export default HeaderNavbar;
