import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Slider from "react-slick";
import ReactStars from "react-stars";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ProductImages from "./ProductImages";
import ProductTitleInfo from "./ProductTitleInfo";

export default function Product({ productName }) {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={className} style={{ ...style }} onClick={onClick}>
        <Image src={require("/public/img/right-slider-arrow.svg")} alt="next" />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={className} style={{ ...style }} onClick={onClick}>
        <Image
          src={require("/public/img/left-slider-arrow.svg")}
          alt="previous"
        />
      </div>
    );
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  var settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: false,
    autoplaySpeed: 3000,
  };
  return (
    <>
      <div className="product-wrapper">
        <div className="product-img-container position-relative">
          <button
            className="product-show-btn btn position-absolute"
            onClick={handleShow}
          >
            <Image src={require("/public/img/eye-ic.svg")} alt="see" />
            <span className="tooltiptext">Quick View</span>
          </button>
          <Slider {...settings}>
            <Image
              className="product-img1"
              src={require("/public/img/lipstick.jpg")}
              alt="product"
            />
            <Image
              className="product-img2"
              src={require("/public/img/lipstick2.jpg")}
              alt="product"
            />
          </Slider>
        </div>
        <Link href="/" className="product-category">
          Make Up
        </Link>
        <Link href="/product" className="product-title d-block">
          {productName}
        </Link>
        <p className="product-price">$60.00</p>
        <button className="btn favourite-btn">
          <Image src={require("/public/img/heart.svg")} alt="favourite" />
          <span className="tooltiptext">Wishlist</span>
        </button>
        <ReactStars count={5} size={24} color2={"rgb(20, 20, 20)"} />
      </div>
      <Modal
        className="product-quick-view-modal"
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row px-3 py-4">
              <div className="col-12 col-md-6">
                <ProductImages />
              </div>
              <div className="col-12 col-md-6">
                <ProductTitleInfo />
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
