import React from "react";
import { Carousel } from "react-bootstrap";

const MyCarousel = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="carou"
            src="https://de927adv5b23k.cloudfront.net/wp-content/uploads/2018/02/25113334/Sabyasachi.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carou"
            src="https://i.pinimg.com/originals/94/c2/35/94c2356d7eb2c3dcf07fecf8f1237aa5.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carou"
            src="https://i.pinimg.com/474x/b9/f9/33/b9f933216bb81fadacb2fd7f119a92e3.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carou"
            src="https://i.pinimg.com/236x/5d/0e/e8/5d0ee8ee8d3e46894c8489692ac5cd27.jpg"
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MyCarousel;
