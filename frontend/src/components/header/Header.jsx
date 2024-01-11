import React from "react";
import './header.css';

const Header = () => {
  return (
    <div>
      <nav className="header">
        <div className="header__logo">
          <h1>Task Manager</h1>
        </div>
        <div className="header__buttons">
          <button className="button">Sign In</button>
          <button className="button">Sign Out</button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
