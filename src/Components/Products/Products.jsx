import "./Products.css";
import { useContext } from "react";
import { StateContext } from "../Contexts/StateContext";
// import Card from "../Card/Card";
// import { Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
// import 'swiper/css/scrollbar';

// import required modules
// import { Navigation, Pagination, EffectCoverflow  } from "swiper";
const Products = () => {
  const { isActive } = useContext(StateContext);
  return (
    <>
      <section
        id="products"
        className={isActive ? "products active" : "products"}
      >
        <div className="pcontent">
          <h2>Products</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
            dolor sed excepturi animi
          </p>
        </div>

        <div className="pcontainer">
          <div className="pcontent">
            <div className="pwrapper">
              <div className="pcard">
                <div className="image-content"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
