import { useContext, useState, useEffect } from "react";
import "./Header.css";
import { StateContext } from "../Contexts/StateContext";
import deer from "../../images/deer.png";
import pic1 from "../../images/1.png";
import pic2 from "../../images/2.png";
import pic3 from "../../images/3.png";
import pic4 from "../../images/4.png";
import pic5 from "../../images/5.png";
import pic6 from "../../images/6.png";
import pic7 from "../../images/7.png";
import pic8 from "../../images/8.png";
import pic9 from "../../images/9.png";
import pic10 from "../../images/10.png";
import pic11 from "../../images/11.png";
import pic12 from "../../images/12.png";
import pic13 from "../../images/13.png";
import pic14 from "../../images/14.png";
import pic15 from "../../images/15.png";
import pic16 from "../../images/16.png";
import pic17 from "../../images/17.png";
import pic18 from "../../images/18.png";
import pic19 from "../../images/19.png";
import pic20 from "../../images/20.png";
import pic21 from "../../images/21.png";
import pic22 from "../../images/22.png";
import pic23 from "../../images/23.png";
import pic24 from "../../images/24.png";
import pic25 from "../../images/25.png";
import pic26 from "../../images/26.png";
import pic27 from "../../images/27.png";
import pic28 from "../../images/28.png";
import pic29 from "../../images/29.png";
import pic30 from "../../images/30.png";
import pic31 from "../../images/31.png";
import pic32 from "../../images/32.png";
import pic33 from "../../images/33.png";
import pic34 from "../../images/34.png";
import pic35 from "../../images/35.png";
import pic36 from "../../images/36.png";
import pic37 from "../../images/37.png";
import pic38 from "../../images/38.png";
import pic39 from "../../images/39.png";
import pic40 from "../../images/40.png";
import pic41 from "../../images/41.png";
import pic42 from "../../images/42.png";
import pic43 from "../../images/43.png";
import pic44 from "../../images/44.png";
import pic45 from "../../images/45.png";
import pic46 from "../../images/46.png";
import pic47 from "../../images/47.png";
import pic48 from "../../images/48.png";
import pic49 from "../../images/49.png";
import pic50 from "../../images/50.png";
import pic51 from "../../images/51.png";
import pic52 from "../../images/52.png";
import pic53 from "../../images/53.png";
import pic54 from "../../images/54.png";
import pic55 from "../../images/55.png";
import pic56 from "../../images/56.png";
import pic57 from "../../images/57.png";
import pic58 from "../../images/58.png";
import pic59 from "../../images/59.png";
import pic60 from "../../images/60.png";
import pic61 from "../../images/61.png";
// import pic62 from "../../images/62.png";
import pic63 from "../../images/63.png";
import logo from "../../images/logo.png"
import circle from "../../images/black.png";
import outline from "../../images/outline.png";
const Header = () => {
  // const [isActive, setActive] = useState(false);
  const { isActive, setActive } = useContext(StateContext);
  const [isPoint, setisPoint] = useState(false);
  const [isPoint2, setisPoint2] = useState(false);

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
  const listenToscroll2 = () => {
    let height = 300;
    const winHeight =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winHeight > height) {
      setisPoint2(true);
      // console.log("GO");
    } else {
      setisPoint2(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToscroll);
  }, []);
  const toggle = () => {
    setActive(!isActive);
  };
  useEffect(() => {
    window.addEventListener("scroll", listenToscroll2);
  }, []);
  // const toggle2 = () => {
  //   setActive(!isActive);
  // };
  return (
    <>
      <section id="home" className={isActive ? "banner active" : "banner"}>
        <header>
          <a href="#" className="LOGO">
            <img className="logo" src={logo} alt="" draggable="false" />
          </a>
          <img
            className={isPoint ? "uselessModified" : "useless"}
            src={circle}
            alt=""
            draggable="false"
          />
          <div
            className={isActive ? "toggle active" : "toggle"}
            onClick={toggle}
          ></div>
        </header>
        <div className="content">
          <div className={isActive ? "filler active" : "filler"}></div>
          <div className="contentBx">
            <h2>
              Future on <br /> Your Hands{" "}
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              et dolores quasi dicta, commodi voluptatibus facilis seds
            </p>
            <a href="">Order Now</a>
          </div>
          <div className="imgBx">
            <img className="replace_img" src={deer} alt="" draggable="false" />
            <img className="common" src={outline} alt="" draggable="false" />
            <img
              className={isPoint ? isPoint2 ? "common active1 activee1" : "common active1" : "common"}
              src={pic1}
              alt=""
              draggable="false"
            />
            <img
              className={isPoint ? isPoint2 ? "common active2 activee2" : "common active2" : "common"}
              src={pic2}
              alt=""
              draggable="false"
            />
            <img
              className={isPoint ? isPoint2 ? "common active3 activee3" : "common active3" : "common"}
              src={pic3}
              alt=""
              draggable="false"
            />
            <img
              className={isPoint ? isPoint2 ? "common active4 activee4" : "common active4" : "common"}
              src={pic4}
              alt=""
              draggable="false"
            />
            <img
              className={isPoint ? isPoint2 ? "common active5 activee5" : "common active5" : "common"}
              src={pic5}
              alt=""
              draggable="false"
            />
            <img
              className={isPoint ? isPoint2 ? "common active6 activee6" : "common active6" : "common"}
              src={pic6}
              alt=""
              draggable="false"
            />
            <img
              className={isPoint ? isPoint2 ? "common active7 activee7" : "common active7" : "common"}
              src={pic7}
              alt=""
              draggable="false"
            />
            <img
              className={isPoint ? isPoint2 ? "common active8 activee8" : "common active8" : "common"}
              src={pic8}
              alt=""
              draggable="false"
            />
            <img
              className={isPoint ? isPoint2 ? "common active9 activee9" : "common active9" : "common"}
              src={pic9}
              alt=""
              draggable="false"
            />
            <img
              className={isPoint ? isPoint2 ? "common active10 activee10" : "common active10" : "common"}
              src={pic10}
              alt=""
              draggable="false"
            />
            <img
              className={isPoint ? isPoint2 ? "common active11 activee11" : "common active11" : "common"}
              src={pic11}
              alt=""
              draggable="false"
            />
            <img
              className={isPoint ? isPoint2 ? "common active12 activee12" : "common active12" : "common"}
              src={pic12}
              alt=""
              draggable="false"
            />
            <img
              className={isPoint ? isPoint2 ? "common active13 activee13" : "common active13" : "common"}
              src={pic13}
              alt=""
              draggable="false"
            />
            <img
              className={isPoint ? isPoint2 ? "common active14 activee14" : "common active14" : "common"}
              src={pic14}
              alt=""
              draggable="false"
            />
            <img
              className={isPoint ? isPoint2 ? "common active15 activee15" : "common active15" : "common"}
              src={pic15}
              alt=""
              draggable="false"
            />
            <img
              className={isPoint ? isPoint2 ? "common active16 activee16" : "common active16" : "common"}
              src={pic16}
              alt=""
              draggable="false"
            />
            <img
              className={isPoint ? isPoint2 ? "common active17 activee17" : "common active17" : "common"}
              src={pic17}
              alt=""
              draggable="false"
            />
            <img
              className={isPoint ? isPoint2 ? "common active18 activee18" : "common active18" : "common"}
              src={pic18}
              alt=""
              draggable="false"
            />
            <img
              className={isPoint ? isPoint2 ? "common active19 activee19" : "common active19" : "common"}
              src={pic19}
              alt=""
              draggable="false"
            />
            <img
              className={isPoint ? isPoint2 ? "common active20 activee20" : "common active20" : "common"}
              src={pic20}
              alt=""
              draggable="false"
            />
            <img
              className={isPoint ? isPoint2 ? "common active21 activee21" : "common active21" : "common"}
              src={pic21}
              alt=""
              draggable="false"
            />
            <img
              className={isPoint ? isPoint2 ? "common active22 activee22" : "common active22" : "common"}
              src={pic22}
              alt=""
              draggable="false"
            />
            <img
              className={isPoint ? isPoint2 ? "common active23 activee23" : "common active23" : "common"}
              src={pic23}
              alt=""
              draggable="false"
            />
            <img
              className={isPoint ? isPoint2 ? "common active24 activee24" : "common active24" : "common"}
              src={pic24}
              alt=""
              draggable="false"
            />
            <img
              className={isPoint ? isPoint2 ? "common active25 activee25" : "common active25" : "common"}
              src={pic25}
              alt=""
              draggable="false"
            />
            <img
              className={isPoint ? isPoint2 ? "common active26 activee26" : "common active26" : "common"}
              src={pic26}
              alt=""
              draggable="false"
            />
            <img
              className={isPoint ? isPoint2 ? "common active27 activee27" : "common active27" : "common"}
              src={pic27}
              alt=""
              draggable="false"
            />
            <img
              className={isPoint ? isPoint2 ? "common active28 activee28" : "common active28" : "common"}
              src={pic28}
              alt=""
              draggable="false"
            />
            <img
              className={isPoint ? isPoint2 ? "common active29 activee29" : "common active29" : "common"}
              src={pic29}
              alt=""
              draggable="false"
            />
            <img
              className={isPoint ? isPoint2 ? "common active30 activee30" : "common active30" : "common"}
              src={pic30}
              alt=""
              draggable="false"
            />
            <img
              className={isPoint ? isPoint2 ? "common active31 activee31" : "common active31" : "common"}
              src={pic31}
              alt=""
              draggable="false"
            />
            <img
              className={isPoint ? isPoint2 ? "common active32 activee32" : "common active32" : "common"}
              src={pic32}
              alt=""
              draggable="false"
            />
            <img
              className={isPoint ? isPoint2 ? "common active33 activee33" : "common active33" : "common"}
              src={pic33}
              alt=""
              draggable="false"
            />
            <img
              className={isPoint ? isPoint2 ? "common active34 activee34" : "common active34" : "common"}
              src={pic34}
              alt=""
              draggable="false"
            />
            <img
              className={isPoint ? isPoint2 ? "common active35 activee35" : "common active35" : "common"}
              src={pic35}
              alt=""
              draggable="false"
            />
            <img
              className={isPoint ? isPoint2 ? "common active36 activee36" : "common active36" : "common"}
              src={pic36}
              alt=""
              draggable="false"
            />
            <img
              className={isPoint ? isPoint2 ? "common active37 activee37" : "common active37" : "common"}
              src={pic37}
              alt=""
              draggable="false"
            />
            <img
              className={isPoint ? isPoint2 ? "common active38 activee38" : "common active38" : "common"}
              src={pic38}
              alt=""
              draggable="false"
            />
            <img
              className={isPoint ? isPoint2 ? "common active39 activee39" : "common active39" : "common"}
              src={pic39}
              alt=""
              draggable="false"
            />
            <img
              className={isPoint ? isPoint2 ? "common active40 activee40" : "common active40" : "common"}
              src={pic40}
              alt=""
              draggable="false"
            />
            <img
              className={isPoint ? isPoint2 ? "common active41 activee41" : "common active41" : "common"}
              src={pic41}
              alt=""
              draggable="false"
            />
            <img
              className={isPoint ? isPoint2 ? "common active42 activee42" : "common active42" : "common"}
              src={pic42}
              alt=""
              draggable="false"
            />
            <img
              className={isPoint ? isPoint2 ? "common active43 activee43" : "common active43" : "common"}
              src={pic43}
              alt=""
              draggable="false"
            />
            <img
              className={isPoint ? isPoint2 ? "common active44 activee44" : "common active44" : "common"}
              src={pic44}
              alt=""
              draggable="false"
            />
            <img
              className={isPoint ? isPoint2 ? "common active45 activee45" : "common active45" : "common"}
              src={pic45}
              alt=""
              draggable="false"
            />
            <img
              className={isPoint ? isPoint2 ? "common active46 activee46" : "common active46" : "common"}
              src={pic46}
              alt=""
              draggable="false"
            />
            <img
              className={isPoint ? isPoint2 ? "common active47 activee47" : "common active47" : "common"}
              src={pic47}
              alt=""
              draggable="false"
            />
            <img
              className={isPoint ? isPoint2 ? "common active48 activee48" : "common active48" : "common"}
              src={pic48}
              alt=""
              draggable="false"
            />
            <img
              className={isPoint ? isPoint2 ? "common active49 activee49" : "common active49" : "common"}
              src={pic49}
              alt=""
              draggable="false"
            />
            <img
              className={isPoint ? isPoint2 ? "common active50 activee50" : "common active50" : "common"}
              src={pic50}
              alt=""
              draggable="false"
            />
            <img
              className={isPoint ? isPoint2 ? "common active51 activee51" : "common active51" : "common"}
              src={pic51}
              alt=""
              draggable="false"
            />
            <img
              className={isPoint ? isPoint2 ? "common active52 activee52" : "common active52" : "common"}
              src={pic52}
              alt=""
              draggable="false"
            />
            <img
              className={isPoint ? isPoint2 ? "common active53 activee53" : "common active53" : "common"}
              src={pic53}
              alt=""
              draggable="false"
            />
            <img
              className={isPoint ? isPoint2 ? "common active54 activee54" : "common active54" : "common"}
              src={pic54}
              alt=""
              draggable="false"
            />
            <img
              className={isPoint ? isPoint2 ? "common active55 activee55" : "common active55" : "common"}
              src={pic55}
              alt=""
              draggable="false"
            />
            <img
              className={isPoint ? isPoint2 ? "common active56 activee56" : "common active56" : "common"}
              src={pic56}
              alt=""
              draggable="false"
            />
            <img
              className={isPoint ? isPoint2 ? "common active57 activee57" : "common active57" : "common"}
              src={pic57}
              alt=""
              draggable="false"
            />
            <img
              className={isPoint ? isPoint2 ? "common active58 activee58" : "common active58" : "common"}
              src={pic58}
              alt=""
              draggable="false"
            />
            <img
              className={isPoint ? isPoint2 ? "common active59 activee59" : "common active59" : "common"}
              src={pic59}
              alt=""
              draggable="false"
            />
            <img
              className={isPoint ? isPoint2 ? "common active60 activee60" : "common active60" : "common"}
              src={pic60}
              alt=""
              draggable="false"
            />
            <img
              className={isPoint ? isPoint2 ? "common active61 activee61" : "common active61" : "common"}
              src={pic61}
              alt=""
              draggable="false"
            />
            <img
              className={isPoint ? isPoint2 ? "common active63 activee63" : "common active63" : "common"}
              src={pic63}
              alt=""
              draggable="false"
            />
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
            <a href="#products">Products</a>
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
