import React from "react";
import "./footer.scss";
import Images from "../../Helpers/Files";
export default function Footer() {
  return (
    <section className="footer-wrapper margin-7-horizontal">
      <footer className="footer flex">
        <article className="footer-article">
          <figure className="footer-logo-container">
            <img
              className="footer-logo"
              src={Images("./logo.svg")}
              alt="Footer Logo"
            />
          </figure>
          <p className="footer-desc">
            Lorem Ipsum is simply dummy text of the printing and typesetting{" "}
            <br />
            industry. Lorem Ipsum has been the industry's standard dummy <br />
            text ever since the 1500s, when an unknown printer took a galley{" "}
            <br />
            of type and scrambled it to make a type specimen book.
          </p>
        </article>

        <article className="footer-article margin-5-horizontal">
          <h2 className="footer-heading">COMPANY</h2>
          <nav>
            <ul className="footer-list">
              <li className="footer-list-item">
                <a href="#">Home</a>
              </li>
              <li className="footer-list-item">
                <a href="#">About Us</a>
              </li>
              <li className="footer-list-item">
                <a href="#">Delivery</a>
              </li>
              <li className="footer-list-item">
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </nav>
        </article>

        <article className="footer-article ">
          <h2 className="footer-heading">GET IN TOUCH</h2>
          <address className="footer-contact-info">
            <p>+0-000-000-00</p>
            <p>andersonrosier0@gmail.com</p>
          </address>
        </article>
      </footer>
      <section className="footer-copyright ">
        <p className="text-center copyright-desc">
          &copy; 2024{" "}
          <a
            href="https://Somewesite.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Somewebsite.com
          </a>{" "}
          - All Rights Reserved.
        </p>
      </section>
    </section>
  );
}
