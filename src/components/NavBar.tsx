import React, { useState } from "react";

import { useAuth0 } from "@auth0/auth0-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import CartIcon from "./CartIcon";
import CartDropdown from "./CartDropdown";

import "./styles/NavBar.css";

export default function NavBar() {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, isAuthenticated, logout, loginWithRedirect } = useAuth0();

  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="navbar">
      <div className="logo">
        {user?.picture && (
          <img
            src={user?.picture}
            alt={user?.name}
            style={{
              borderRadius: "50%",
              width: "30px",
              height: "30px",
            }}
          />
        )}
        {user?.name}
      </div>
      <button className="mobile-menu-icon" onClick={toggleMobileMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <ul className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
        {isAuthenticated ? (
          <>
            <li onClick={toggleCart}>
              <a href="#cart">
                <CartIcon />
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() =>
                  logout({
                    logoutParams: {
                      returnTo: window.location.origin,
                    },
                  })
                }
              >
                Logout
              </a>
            </li>
          </>
        ) : (
          <li>
            <a href="#" onClick={() => loginWithRedirect()}>
              Login
            </a>
          </li>
        )}
      </ul>
      {isCartOpen && <CartDropdown />}
    </nav>
  );
}
