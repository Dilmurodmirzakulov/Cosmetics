import Image from "next/image";
import ReactStars from "react-stars";
import Link from "next/link";
import Slider from "react-slick";
import Product from "./Product";

export default function RelatedProducts() {
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
  var settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <div className="container related-products-wrapper">
      <h2 className="text-center section-title">Related Products</h2>
      <div className="d-flex align-items-center">
        <Slider className="w-100 row" {...settings}>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </Slider>
      </div>
    </div>
  );
}
