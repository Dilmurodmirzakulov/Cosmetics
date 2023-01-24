import Image from "next/image";
import Link from "next/link";
import React from "react";
import BreadcrumbExample from "../components/Breadcrumbs";
import CategoryNav from "../components/CategoryNav";
import Footer from "../components/Footer";
import MainNav from "../components/MainNav";

function ShoppingBag() {
  return (
    <>
      {/* <MainNav />
      <CategoryNav /> */}
      <div className="container">
        <BreadcrumbExample />
        <h1 className="shopping-bag-title">Shopping Bag</h1>
        <div className="row">
          <div className="col-lg-8 col-xl-9">
            <div className="cart_head">
              <div className="row">
                <div className="d-none d-sm-block col-sm-5 col-lg-4 col-xl-7">
                  <label className="m-0">PRODUCT</label>
                </div>
                <div className="col-sm-7 col-lg-8 col-xl-5">
                  <div className="row">
                    <div className="col col-sm-4 col-lg-4">
                      <label className="m-0">PRICE</label>
                    </div>
                    <div className="col col-sm-4 col-lg-4 text-center text-lg-left">
                      <label className="m-0">QUANTITY</label>
                    </div>
                    <div className="col col-sm-4 col-lg-4 d-flex justify-content-end">
                      <label className="m-0">TOTAL</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cart_body">
              <div className="row d-flex align-items-center flex-column flex-sm-row">
                <div className="col-sm-5 col-lg-4 col-xl-7 d-flex align-items-center">
                  <button className="btn me-3">del</button>
                  <Image
                    className="img-fluid me-3"
                    src={require("/public/img/product0.jpg")}
                    alt="product"
                    width={150}
                  />
                  <span className="checkout_product_title">
                    Precision Eyebrow Definer
                  </span>
                </div>
                <div className="col-sm-7 col-lg-8 col-xl-5">
                  <div className="row d-flex align-items-center">
                    <div className="col col-sm-4 col-lg-4 checkout_price">
                      $80.00
                    </div>
                    <div className="col col-sm-4 col-lg-4">
                      <input type="" className="form-control" />
                    </div>
                    <div className="col col-sm-4 col-lg-4 text-right checkout_price">
                      $80.00
                    </div>
                  </div>
                </div>
              </div>
              <div className="divider-border"></div>
              <Link href={"/"} className="btn p-0 mb-4 calculate-shipping">
                CONTINUE SHOPPING
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-xl-3">
            <div className="shipping_info_wrapper">
              <h3 className="cart_total_title">CART TOTAL</h3>
              <div className="shipping_info_container">
                <h3>Estimate Shipping and TAX</h3>
                <p className="shipping_desc">
                  Enter your destination to get a shipping estimate.
                </p>
                <label htmlFor="country">COUNTRY</label>
                <input
                  id="country"
                  name="country"
                  type="text"
                  className="form-control mb-3"
                />
                <label htmlFor="city">CITY</label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  className="form-control mb-3"
                />
                <label htmlFor="zip"> ZIP/POSTAL CODE </label>
                <input
                  id="zip"
                  name="zip"
                  type="text"
                  className="form-control mb-3"
                />
                <button className="btn text-uppercase text-decoration-underline p-0 mb-3 calculate-shipping">
                  Calculate shipping
                </button>
              </div>
              <div className="order_comment_wrapper pb-3">
                <h4> Special Instructions For Seller </h4>
                <p className="desc">
                  Add special instructions for your order...
                </p>
                <textarea
                  className="form-control mb-1"
                  rows={4}
                  name="note"
                ></textarea>
              </div>
              <div className="subtotal mt-3">
                <h5 className="cart_total_title mb-1">SUBTOTAL</h5>
                <p className="subtotal-price mb-1">$240.00</p>
                <p className="desc">Shipping calculated at checkout</p>
                <button className="btn go-checkout">PROCEED TO CHECKOUT</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default ShoppingBag