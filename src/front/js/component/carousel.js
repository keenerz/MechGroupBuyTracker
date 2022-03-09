import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import Carousel from "react-bootstrap/Carousel";

export const frontDisplay = () => {
  return function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.extremetech.com/wp-content/uploads/2019/07/Keystone-with-Silo-Switches.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Keyboard Switches</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://imagehost.vendio.com/a/35122654/aview/QQ20131213011133.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Keyboard Caps</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://ksassets.timeincuk.net/wp/uploads/sites/54/2018/06/Roccat-Vulcan-100-Hero-1024x683.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Full Keyboards</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>;
  };
};
