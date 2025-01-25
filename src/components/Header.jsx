import React, { useEffect, useState } from "react";
import "../styles/Header.css";
import logo from "../assets/DizzyDesign.png";

const Header = () => {
  const [authenticated, setAuthenticated] = useState(null);
  const [user, setUser] = useState(null);

  const loggedIn = async () => {
    try {
      const response = await fetch("/users/check-auth", {
        credentials: "include",
      });
      const data = await response.json();
      if (data.success && data.user) {
        setAuthenticated(true);
        setUser(data.user);
      } else {
        setAuthenticated(false);
      }
    } catch (error) {
      console.error("Error checking authentication:", error);
      setAuthenticated(false);
    }
  };

  useEffect(() => {
    loggedIn();
  }, []);

  if (authenticated === null) {
    return <button>Loading...</button>;
  }

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Dizzy Design Logo" />
      </div>
      <div className="subtitle">DISCOVER THE BEST PRODUCTS AT UNBEATABLE PRICES.</div>
      <nav>
        <ul>
          <li><a href="/">HOME</a></li>
          <li><a href="/cart">CART</a></li>
          <li>
            <a href={authenticated ? "/profile" : "/login"}>
              {authenticated ? "PROFILE" : "LOGIN"}
            </a>
          </li>
          <li><a href="/search">SEARCH</a></li>
          {authenticated && user?.isAdmin && <li><a href="/orders-history">ORDER HISTORY</a></li>}
          {authenticated && user?.isAdmin && <li><a href="/add-product">ADD INVENTORY</a></li>}
        </ul>
      </nav>
    </header>
  );
};

export default Header;