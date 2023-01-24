import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Link from "next/link";

function MainNav() {
  const [showSearch, setShowSearch] = useState(false);

  const handleChildClickSearch = (event) => {
    event.preventDefault();
    setShowSearch(true);
  };

  const [showProfile, setShowProfile] = useState(false);

  const handleChildClickProfile = (event) => {
    event.preventDefault();
    setShowProfile(true);
  };

  const [showFavourite, setShowFavourite] = useState(false);

  const handleChildClickFavourite = (event) => {
    event.preventDefault();
    setShowFavourite(true);
  };

  const [show, setShow] = useState(false);

  const handleChildClick = (event) => {
    event.preventDefault();
    setShow(true);
  };

  const [showNav, setShowNav] = useState(false);

  const handleChildClickNav = (event) => {
    event.preventDefault();
    setShowNav(true);
  };
  return (
    <Navbar expand="lg" className="p-lg-0">
      <Container className="position-relative main-nav d-flex justify-content-lg-end flex-nowrap">
        <button
          className="btn p-1 me-2 d-block d-lg-none"
          onClick={handleChildClickNav}
        >
          <Image
            src={require("/public/img/hamburger.svg")}
            height={36}
            width={24}
            alt=""
          />
        </button>
        <Navbar.Brand href="#home" className="main-logo">
          <Image
            src={require("/public/img/main-logo.svg")}
            width={142}
            height={36}
            alt="logo"
          />
        </Navbar.Brand>
        <Nav className="d-flex flex-row align-items-center position-relative">
          <Nav.Link
            className="main-nav-link vms-4 ms-lg-3"
            onClick={handleChildClickSearch}
          >
            <Image
              src={require("/public/img/search-ic.svg")}
              width={20}
              height={20}
              alt="logo"
            />
            <span className="tooltiptext">Search</span>
          </Nav.Link>
          <Nav.Link
            className="main-nav-link ms-4 ms-lg-3"
            onClick={handleChildClickProfile}
          >
            <Image
              src={require("/public/img/profile-ic.svg")}
              height={20}
              width={20}
              alt="account"
            />
            <span className="tooltiptext">Profile</span>
          </Nav.Link>
          <Nav.Link
            className="main-nav-link ms-4 ms-lg-3"
            onClick={handleChildClickFavourite}
          >
            <Image
              src={require("/public/img/heart.svg")}
              height={20}
              width={20}
              alt="account"
            />
            <span className="tooltiptext">Wishlist</span>
          </Nav.Link>
          <Nav.Link
            className="main-nav-link d-flex align-items-end ms-4 ms-lg-3 cart-show-btn"
            onClick={handleChildClick}
          >
            <Image
              src={require("/public/img/shopping-bag-ic.svg")}
              height={20}
              width={20}
              alt="account"
            />
            <span className="bag-text">Bag(0)</span>
          </Nav.Link>
        </Nav>
      </Container>

      {/* Mobile nav */}
      <Modal
        show={showNav}
        onHide={() => setShowNav(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        className="cart-modal mob-nav-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Categories
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul className="list-unstyled d-flex flex-column nav">
            <li className="nav-item">
              <Link href='#' className="nav-link ps-0 text-uppercase category-link">Make up</Link>
            </li>
            <li className="nav-item">
              <Link href='#' className="nav-link ps-0 text-uppercase category-link">skin care</Link>
            </li>
            <li className="nav-item">
              <Link href='#' className="nav-link ps-0 text-uppercase category-link">hair care</Link>
            </li>
            <li className="nav-item">
              <Link href='#' className="nav-link ps-0 text-uppercase category-link">fragrance</Link>
            </li>
          </ul>
        </Modal.Body>
      </Modal>

      {/* Cart Modal */}
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        className="cart-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            MY BAG (1)
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="cart-products-wrapper">
            <div className="cart-product d-flex align-items-start">
              <Image
                className="img-fluid"
                src={require("/public/img/product0.jpg")}
                width={60}
                height={60}
                alt="product"
              />
              <div className="cart-product-info">
                <h5>Ove Side Blush</h5>
                <div className="product-cart__price">
                  <span className="product-cart__quantity">1</span>{" "}
                  <span className="multiplication">x</span>{" "}
                  <span className="price">
                    <span>$140.00</span>
                  </span>
                </div>
                <button className="btn cart-remove-btn">Remove</button>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center mt-3 justify-content-between">
            <p className="cart-total-price-title m-0">SUBTOTAL</p>
            <span className="cart-total-price">$440.00</span>
          </div>
          <button className="btn cart-modal-btn mt-3">
            Proceed to checkout
          </button>
          <button className="btn cart-modal-btn-white mt-3">
            VIEW SHOPPING BAG
          </button>
        </Modal.Body>
      </Modal>

      {/* Profile Modal */}
      <Modal
        show={showProfile}
        onHide={() => setShowProfile(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        className="cart-modal profile-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            MY ACCOUNT
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <label htmlFor="user-email">EMAIL*</label>
            <input
              className="form-control mb-2"
              id="user-email"
              type="text"
              name="email"
              required
              placeholder="Your Email Address"
              autocomplete="on"
            />
            <label htmlFor="user-password">PASSWORD*</label>
            <input
              className="form-control mb-2"
              id="user-password"
              type="password"
              name="password"
              required
              placeholder="••••••"
              autocomplete="on"
            />
            <button className="btn cart-modal-btn my-3">LOGIN</button>
            <Link
              href="/"
              className="calculate-shipping btn p-0 text-decoration-underline mb-2"
            >
              RETURN TO STORE
            </Link>
            <Link href="/" className="btn p-0 desc mb-0">
              Forgot Your Password?
            </Link>
          </div>
          <div className="divider-border"></div>
          <h3>SIGN UP</h3>
          <p className="title-desc">Enjoy the benefits of registering:</p>
          <ul class="mb-20 ps-3">
            <li class="mb-2 desc">
              Order: view Order History, track and manage purchases and returns
            </li>
            <li class="mb-2 desc">
              Address Book and Card Wallet: safely store delivery and payment
              details for faster checkout
            </li>
            <li class="mb-2 desc">
              Saved for later: wish list your preferred items and track their
              availability
            </li>
          </ul>
        </Modal.Body>
      </Modal>

      {/* Favourites Modal */}
      <Modal
        show={showFavourite}
        onHide={() => setShowFavourite(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        className="cart-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            MY WISHLIST (1)
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="cart-products-wrapper">
            <div className="cart-product d-flex align-items-start">
              <Image
                className="img-fluid"
                src={require("/public/img/product0.jpg")}
                width={60}
                height={60}
                alt="product"
              />
              <div className="cart-product-info">
                <h5>Ove Side Blush</h5>
                <div className="product-cart__price">
                  <span className="price">
                    <span>$140.00</span>
                  </span>
                </div>
                <button className="btn cart-remove-btn">Remove</button>
              </div>
            </div>
            <div className="cart-product d-flex align-items-start">
              <Image
                className="img-fluid"
                src={require("/public/img/product0.jpg")}
                width={60}
                height={60}
                alt="product"
              />
              <div className="cart-product-info">
                <h5>Ove Side Blush</h5>
                <div className="product-cart__price">
                  <span className="price">
                    <span>$140.00</span>
                  </span>
                </div>
                <button className="btn cart-remove-btn">Remove</button>
              </div>
            </div>
            <div className="cart-product d-flex align-items-start">
              <Image
                className="img-fluid"
                src={require("/public/img/product0.jpg")}
                width={60}
                height={60}
                alt="product"
              />
              <div className="cart-product-info">
                <h5>Ove Side Blush</h5>
                <div className="product-cart__price">
                  <span className="price">
                    <span>$140.00</span>
                  </span>
                </div>
                <button className="btn cart-remove-btn">Remove</button>
              </div>
            </div>
          </div>
          <button className="btn cart-modal-btn-white mt-3">
            view wishlist
          </button>
        </Modal.Body>
      </Modal>

      {/* Search Modal */}
      <Modal
        show={showSearch}
        onHide={() => setShowSearch(false)}
        aria-labelledby="example-custom-modal-styling-title"
        className="search-modal"
      >
        <Modal.Header closeButton className="container border-0 pb-0">
          <Modal.Title id="example-custom-modal-styling-title">
            WHAT ARE YOU LOOKING FOR?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="container">
          <InputGroup className="mb-3">
            <Form.Control
              aria-label="Example text with button addon"
              aria-describedby="basic-addon1"
              placeholder="Search products..."
            />
            <Button variant="outline-secondary" id="button-addon1">
              <Image
                src={require("/public/img/search-ic.svg")}
                width={25}
                height={25}
              />
            </Button>
          </InputGroup>
        </Modal.Body>
      </Modal>
    </Navbar>
  );
}

export default MainNav;
