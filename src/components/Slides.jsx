import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slides = () => {
  const [arrows, setArrows] = useState(false);
  
  const settings = {
    dots: arrows,
    arrows: arrows,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div onMouseEnter={() => setArrows(true)} onMouseLeave={() => setArrows(false)} className="big-slides">
      <Slider {...settings}>
        <div>
          <img src="https://allomobile.tj/image/cache/catalog/24-940x525h.jpg" />
        </div>
        <div>
          <img src="https://allomobile.tj/image/cache/catalog/11111-940x525w.jpg" />
        </div>
        <div>
          <img src="https://allomobile.tj/image/cache/catalog/121211-940x525w.jpg" />
        </div>
        <div>
          <img src="https://allomobile.tj/image/cache/catalog/233-940x525w.jpg" />
        </div>
        <div>
          <img src="https://allomobile.tj/image/cache/catalog/2233-940x525w.jpg" />
        </div>
      </Slider>
    </div>
  );
};

export default Slides;
