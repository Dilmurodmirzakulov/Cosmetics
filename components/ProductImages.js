import Image from "next/image";
// import React from "react";
// import Slider from "react-slick";
// import { baseUrl } from "/config";

// import "/public/img/product1.webp";

// export default function ProductImages() {
//   console.log(baseUrl);
//   const settings = {
//     customPaging: function (i) {
//       return (
//         <a>
//           {
//             <Image
//               className="img-fluid"
//               width={100}
//               height={100}
//               src={require(`/public/img/product${i}.jpg`)}
//             />
//           }
//         </a>
//       );
//     },
//     dots: true,
//     dotsClass: "slick-dots slick-thumb",
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };
//   return (
//     <div>
//       <h2>Custom Paging</h2>
//       <Slider {...settings} className="product-img-slider">
//         <div>{<Image className="img-fluid w-100" src={require(`/public/img/product1.jpg`)} />}</div>
//         <div>{<Image className="img-fluid w-100" src={require(`/public/img/product0.jpg`)} />}</div>
//       </Slider>
//     </div>
//   );
// }

import Slider from "react-slick";
export default function ProductImages() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3000,
  };
  return (
    <div className="d-flex">
      <div className="d-flex flex-column d-none d-lg-block">
        <div className="product-child-img active">
          <Image
            className="img-fluid"
            src={require(`/public/img/product1.jpg`)}
            alt=""
          />
        </div>
        <div className="product-child-img">
          <Image
            className="img-fluid"
            src={require(`/public/img/product0.jpg`)}
            alt=""
          />
        </div>
      </div>
      <div className="product-current-img-container position-relative">
        <Slider {...settings}>
          <div className="product-main-img-container">
            <Image
              className="img-fluid w-100"
              src={require(`/public/img/product1.jpg`)}
              alt=""
            />
          </div>
          <div className="product-main-img-container">
            <Image
              className="img-fluid w-100"
              src={require(`/public/img/product1.jpg`)}
              alt=""
            />
          </div>
        </Slider>
        {/* <button className="btn product-img-control-btn previous-btn">
            <Image
              width={20}
              height={20}
              src={require("/public/img/left-slider-arrow.svg")}
              alt="previous"
            />
          </button>

          <button className="btn product-img-control-btn next-btn">
            <Image
              width={20}
              height={20}
              src={require("/public/img/right-slider-arrow.svg")}
              alt="next"
            />
          </button> */}
      </div>
    </div>
  );
}
