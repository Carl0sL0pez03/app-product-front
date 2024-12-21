import React, { useState } from "react";

import "./styles/NavBar.css";
import CartIcon from "./CartIcon";
import CartDropdown from "./CartDropdown";

export default function NavBar() {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">Prueba</div>
      <ul className="nav-links">
        <li onClick={toggleCart}>
          <a href="#cart">
            <CartIcon />
          </a>
        </li>
      </ul>
      {isCartOpen && <CartDropdown />}
    </nav>
  );
}
