import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";

const Header = () => {
  const [isNavOpened, setNavOpened] = useState(false);

  const handleBarClick = () => {
    setNavOpened((prev) => !prev);
  };

  const handleXLogoClick = () => {
    setNavOpened(false);
  };

  return (
    <header>
      <div className="header">
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <div className="menuBar" onClick={handleBarClick}>
          <div className="bar1"></div>
          <div className="bar2"></div>
        </div>
        <div className="none" onClick={handleXLogoClick}>
          <img src="stories/mobile/X.png" alt="X logo" />
        </div>
        <nav className={`invisible ${isNavOpened ? "opened" : ""}`}>
          <ul>
            <Link to="/">
              <li>მთავარი</li>
            </Link>
            <Link to="/about">
              <li>ვინ ვართ ჩვენ ? </li>
            </Link>
            <Link to="/services">
              <li>სერვისები</li>
            </Link>
            <Link to="/contact">
              <li>საკონტაქტო</li>
            </Link>
          </ul>
          <hr />
          <button>GET AN INVITE</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
