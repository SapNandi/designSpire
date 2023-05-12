import { useContext, useState, useEffect } from "react";
import "./Header.css";
import { StateContext } from "../Contexts/StateContext";
import watch from "../../images/watch.png";
import circle from "../../images/black.png";
const Header = () => {
  // const [isActive, setActive] = useState(false);
  const { isActive, setActive } = useContext(StateContext);
  const [isPoint, setisPoint] = useState(false);

  const listenToscroll = () => {
    let height = 150;
    const winHeight =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winHeight > height) {
      setisPoint(true);
    } else {
      setisPoint(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToscroll);
  }, []);
  const toggle = () => {
    setActive(!isActive);
  };
  return (
    <>
      <section id="home" className={isActive ? "banner active" : "banner"}>
        <header>
          <a href="#" className="LOGO">
            LOGO
          </a>
          <img className={isPoint ? "uselessModified" : "useless"} src={circle} alt="" />
          <div
            className={isActive ? "toggle active" : "toggle"}
            onClick={toggle}
          ></div>
        </header>
        <div className="content">
          <div className="contentBx">
            <h2>
              Future on <br /> Your Hands{" "}
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              et dolores quasi dicta, commodi voluptatibus facilis sed
              exercitationem molestias quae laboriosam atque reprehenderit
              consequuntur, animi impedit doloribus dolorem ratione dignissimos
            </p>
            <a href="">Order Now</a>
          </div>
          <div className="imgBx">
            <img src={watch} alt="" draggable="false" />
          </div>
        </div>
        <ul className="menu" onClick={toggle}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="">Products</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Header;
