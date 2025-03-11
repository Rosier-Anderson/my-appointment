import React from "react";
import Logo from "../../assets/assets_frontend/logo.svg";
import "./navbar.scss";
const Navbar = () => {
  return (
    <>
      <header className="header flex margin">
        <div className="header-logo">
          <img src={Logo} alt="Appointment Logo" className="header-image" />
        </div>
        <nav className="header-nav">
          <ul className="nav-list flex ">
            <li className="nav-item ">
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
        <div className="account">
          <button className="account-button btn hover">Create account</button>
        </div>
      </header>
    </>
  );
};
export default Navbar;
