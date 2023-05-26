import "./Footer.css";
import { useContext } from "react";
import { StateContext } from "../Contexts/StateContext";
import logo from "../../images/logo.png";

const Footer = () => {
  const { isActive } = useContext(StateContext);
  return (
    <>
      <section className={isActive ? "footer active" : "footer"}>
        <div className="left">
          {/* <h3>LOGO</h3> */}
          <img className="logo" src={logo} alt="" />
          <ul className="sci">
            <li>
              <a href="">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>
            <li>
              <a href="">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>
            <li>
              <a href="">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </li>
            <li>
              <a href="">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
        <div className="middle">
          <h3>Company</h3>
          <ul className="footmenu">
            <li>
              <a href="">FAQs</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Support</a>
            </li>
            <li>
              <a href="">Testimonials</a>
            </li>
            <li>
              <a href="">Dictionary</a>
            </li>
          </ul>
        </div>
        <div className="right">
          <h3>Categories</h3>
          <ul className="footmenu">
            <li>
              <a href="">T-Shirt Designs</a>
            </li>
            <li>
              <a href="">Logo Designs</a>
            </li>
            <li>
              <a href="">Web Designs</a>
            </li>
          </ul>
        </div>
        <div className="last">
          <h3>Our Policies</h3>
          <ul className="footmenu">
            <li>
              <a href="">Terms & Conditions</a>
            </li>
            <li>
              <a href="">Privcy Policy</a>
            </li>
            <li>
              <a href="">Cookies Policy</a>
            </li>
          </ul>
        </div>
        <div className="copyright">
          <p>
            A DESIGNSPIRE company © 2023-2040 Vistaprint. All rights reserved.
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;
