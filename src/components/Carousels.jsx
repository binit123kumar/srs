import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../Styles/Carousel.css';
import One from '../Assests/slider/1.jpg';
import Second from '../Assests/slider/3.jpg';
import Third from '../Assests/slider/4.jpg';
import Four from '../Assests/slider/5.jpg';
import Five from '../Assests/slider/6.jpg';

const Carousels = () => {
  return (
    <Carousel
      showArrows={true}
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={5000}
      stopOnHover={true}
      swipeable={true}
      dynamicHeight={true}
    >
      <div>
        <img src={Five} alt="Slideshow banner one" />
      </div>
      <div>
        <img src={Second} alt="Slideshow banner two" />
      </div>
      <div>
        <img src={Third} alt="Slideshow banner three" />
      </div>
      <div>
        <img src={Four} alt="Slideshow banner four" />
      </div>
      <div>
        <img src={One} alt="Slideshow banner five" />
      </div>
    </Carousel>
  );
};

export default Carousels;