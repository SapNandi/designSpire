import "./Contact.css";
import { useContext} from "react";
import { StateContext } from "../Contexts/StateContext";
const Contact = () => {
  const { isActive} = useContext(StateContext);
  return (
    <>
      <section id="c" className={isActive ? "contact active" : "contact"}>
        <div className="content">
          <h2>Contact Us</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
            dolor sed excepturi animi
          </p>
        </div>
        <div className="container">
          <div className="contactInfo">
            <div className="box">
              <div className="icon">
                <ion-icon name="location-outline"></ion-icon>
              </div>
              <div className="text">
                <h3>Address</h3>
                <p>
                  Vellore Institute Technology <br />
                  Kelembakkam, Chennai <br />
                  600014
                </p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <ion-icon name="call-outline"></ion-icon>
              </div>
              <div className="text">
                <h3>Phone</h3>
                <p>00-9876543210</p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <ion-icon name="mail-outline"></ion-icon>
              </div>
              <div className="text">
                <h3>Email</h3>
                <p>saptarshinandi2001@gmail.com</p>
              </div>
            </div>
            <h2 className="txt">Connect With Us</h2>
            <ul className="sci">
              <li>
                <a href="">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
              </li>
              <li>
                <a href="">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </li>
              <li>
                <a href="">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </li>
              <li>
                <a href="">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>
            </ul>
          </div>
          <div className="contactForm">
            <form action="">
              <h2>Send Message</h2>
              <div className="inputBox">
                <input type="text" name="" required />
                <span>Full Name</span>
              </div>
              <div className="inputBox">
                <input type="text" name="" required />
                <span>Email</span>
              </div>
              <div className="inputBox">
                <textarea name="" required></textarea>
                <span>Type Your Text</span>
              </div>
              <div className="inputBox">
                <input type="submit" value="Send" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
