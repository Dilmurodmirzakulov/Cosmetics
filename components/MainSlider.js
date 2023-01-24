import Image from "next/image";
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function MainSlider() {
  return (
    <Carousel fade className="main-slider"  controls={false}>
      <Carousel.Item>
        <Image
          className="main-slider-img d-block w-100"
          src={require("/public/img/slider-img1.webp")}
          alt="First slide"
        />
        <Carousel.Caption className="main-slider1">
          <h3 className="text-uppercase">final <br/> clearance</h3>
          <p className="text-capitalize">take 20% off 'sale must-haves'</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="main-slider-img d-block w-100"
          src={require("/public/img/slider-img3.webp")}
          alt="First slide"
        />

        <Carousel.Caption className="main-slider2">
          <h3 className="text-uppercase">beauty <br/> offers</h3>
          <p className="text-capitalize">choose a clean-skincare trial size</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="main-slider-img d-block w-100"
          src={require("/public/img/slider-img2.webp")}
          alt="First slide"
        />

        <Carousel.Caption className="main-slider3">
          <h3 className="text-uppercase">go clean <br/> get results</h3>
          <p className="text-capitalize">
            tackle your top concerns with powerful, clean skincare that really
            works
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MainSlider;
