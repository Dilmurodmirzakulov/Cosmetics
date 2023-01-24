import Image from "next/image";
import ReactStars from "react-stars";
import Link from "next/link";
import Slider from "react-slick";
import Product from "./Product";

export default function Bestsellers() {
  return (
    <div className="container">
      <h3 className="section-title">shop bestsellers</h3>
      <div className="row">
        <div className="col-6 col-md-4 col-lg-3">
          <Product />
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <Product />
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <Product />
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <Product />
        </div>
      </div>
    </div>
  );
}
