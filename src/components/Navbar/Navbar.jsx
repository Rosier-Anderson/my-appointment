import React from "react";

const Navbar = () => {
  return (
    <>
      <header className="header">
        <div className="header-logo"></div>
        <nav className="header-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="/" className="nav-link">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a href="doctors" className="nav-link">
                ALL DOCTORS
              </a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link">
                ABOUT
              </a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link">
                CONTACT
              </a>
            </li>
          </ul>
        </nav>
        <div className="account"></div>
      </header>
    </>
  );
};
export default Navbar;
