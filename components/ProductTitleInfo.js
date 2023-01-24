import Image from "next/image";
import React from "react";
import ReactStars from "react-stars";

export default function ProductTitleInfo() {
  return (
    <div>
      <span className="product-status">In stock</span>
      <h1 className="product-page-title mt-3 mb-2">
        Precision Eyebrow Definer
      </h1>
      <div className="mb-3 d-flex align-items-center">
        <ReactStars count={5} size={24} color2={"rgb(20, 20, 20)"} />
        &nbsp;&nbsp;
        <p className="review-amount m-0">
          <u>1 REVIEW</u>
        </p>
      </div>
      <div className="mb-3">
        <p className="product-info_sku">
          SKU: <span>c-04</span>
        </p>
        <p className="product-info_vendor">
          VENDOR: <span>c-04</span>
        </p>
      </div>
      <div className="product-page-price">
        <p>$80.00</p>
      </div>
      <div className="dashed-border-divider"></div>
      <div className="delivery-info-message d-flex mb-3">
        <div className="d-flex align-items-center me-4">
          <Image
            className="me-1"
            src={require("/public/img/delivery-ic.svg")}
            alt="delivery"
          />
          <u>DELIVERY & RETURN</u>
        </div>
        <div className="d-flex align-items-center">
          <Image
            className="me-1"
            src={require("/public/img/message-ic.svg")}
            alt="message"
          />
          <u>MESSAGE</u>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="quantity">QUANTITY</label>
        <div className="quantity-input-container d-flex align-items-center">
          <input id="quantity" type="number" name="quantity" min="1" />
          <button className="btn quantity-controll-btn">+</button>
          <button className="btn quantity-controll-btn m-0">-</button>
        </div>
      </div>
      <div className="product-view-btns row mb-3">
        <div className="col-12 mb-2">
          <button className="add-to-cart btn w-100">ADD TO CART</button>
        </div>
        <div className="col-6 pe-1">
          <button className="btn w-100 add-to-favourite">
            ADD TO WISH LIST
          </button>
        </div>
        <div className="col-6 ps-1">
          <button className="btn w-100 buy-now">BUY IT NOW</button>
        </div>
      </div>
      <div className="share-via-social-media">
        <label> SHARE: </label>
        <ul className="nav-list list-unstyled d-flex flex-row">
          <li className="nav-item me-2 d-flex align-items-center">
            <a
              href="#ins"
              className="instagram-share nav-link px-4 py-1 d-flex align-items-center"
            >
              <Image
                height={22}
                src={require("/public/img/instagram-ic.svg")}
                alt="instagram"
              />
            </a>
          </li>
          <li className="nav-item me-2">
            <a
              href="#ins"
              className="facebook-share nav-link px-4 py-1 d-flex align-items-center"
            >
              <Image
                height={22}
                src={require("/public/img/facebook-ic.svg")}
                alt="facebook"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
