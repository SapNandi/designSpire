import "./services.css";
import { useContext } from "react";
import { StateContext } from "../Contexts/StateContext";
const Services = () => {
  const { isActive } = useContext(StateContext);
  return (
    <>
      <section
        id="services"
        className={isActive ? "services active" : "services"}
      >
        <div className="scontent">
          <h2>Services</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
            dolor sed excepturi animi
          </p>
        </div>

        <div className="container">
          <a href="#services" style={{textDecoration:"none"}}>
            <div className="box" style={{ "--clr": "#00fc4c" }}>
              <div className="content">
                <div className="icon">
                  <ion-icon name="brush-outline"></ion-icon>
                </div>
                <div className="text">
                  <h3>Designing</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                    fuga
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
          </a>
          <a href="#services" style={{textDecoration:"none"}}>
            <div className="box" style={{ "--clr": "#eb5ae5" }}>
              <div className="content">
                <div className="icon">
                  <ion-icon name="code-slash-outline"></ion-icon>
                </div>
                <div className="text">
                  <h3>Development</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                    fuga
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
          </a>
          <a href="#services" style={{textDecoration:"none"}}>
            <div className="box" style={{ "--clr": "#18a0d1" }}>
              <div className="content">
                <div className="icon">
                  <ion-icon name="search-outline"></ion-icon>
                </div>
                <div className="text">
                  <h3>SEO</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                    fuga
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default Services;
