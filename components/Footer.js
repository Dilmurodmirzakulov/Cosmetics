import Image from "next/image";
import Accordion from "react-bootstrap/Accordion";

export default function Footer() {
  return (
    <footer>
      <div className="d-flex flex-column">
        <div className="container footer-main-content">
          <div className="row">
            <div className="col-lg-6 order-1 order-lg-0 row">
              <div className="col-lg-4">
                <div
                  className="footer__section"
                  data-js-accordion="only-mobile"
                >
                  <div
                    className="footer__section-head position-relative"
                    data-js-accordion-button=""
                  >
                    <h5 className="d-none d-lg-block footer-section-title py-10 py-lg-0 mb-lg-10 text-uppercase text-center text-lg-start">
                      SHOP
                    </h5>
                  </div>
                  <div
                    className="footer__section-content d-none d-lg-block"
                    data-js-accordion-content=""
                  >
                    <ul className="list-unstyled pb-15 pb-lg-0">
                      <li className="py-5 py-lg-0">
                        <a href="/collections/makeup">Makeup</a>
                      </li>
                      <li className="py-5 py-lg-0">
                        <a href="/collections/skin-care">Skin Care</a>
                      </li>
                      <li className="py-5 py-lg-0">
                        <a href="/collections/hair-care">Hair Care</a>
                      </li>
                      <li className="py-5 py-lg-0">
                        <a href="/collections/fragrance">Fragrance</a>
                      </li>
                      <li className="py-5 py-lg-0">
                        <a href="/collections/foot-hand-nail-care">
                          Foot, Hand &amp; Nail Care
                        </a>
                      </li>
                      <li className="py-5 py-lg-0">
                        <a href="/collections/tools-accessories">
                          Tools &amp; Accessories
                        </a>
                      </li>
                      <li className="py-5 py-lg-0">
                        <a href="/collections/shave-hair-removal">
                          Shave &amp; Hair Removal
                        </a>
                      </li>
                      <li className="py-5 py-lg-0">
                        <a href="/collections/personal-care">Personal Care</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="footer__section"
                  data-js-accordion="only-mobile"
                >
                  <div
                    className="footer__section-head position-relative"
                    data-js-accordion-button=""
                  >
                    <h5 className="d-none d-lg-block py-10 py-lg-0 mb-lg-10 text-uppercase footer-section-title text-center text-lg-start">
                      INFORMATION
                    </h5>
                  </div>
                  <div
                    className="footer__section-content d-none d-lg-block"
                    data-js-accordion-content=""
                  >
                    <ul className="list-unstyled pb-15 pb-lg-0">
                      <li className="py-5 py-lg-0">
                        <a href="/pages/about-our-store">About us</a>
                      </li>
                      <li className="py-5 py-lg-0">
                        <a href="/blogs/news">Blog</a>
                      </li>
                      <li className="py-5 py-lg-0">
                        <a href="/pages/faqs">FAQs</a>
                      </li>
                      <li className="py-5 py-lg-0">
                        <a href="/pages/contact">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="footer__subscription row mb-25">
                <div className="col-lg-12 mb-10">
                  <h5 className="footer-section-title mb-10 text-uppercase text-center text-lg-start">
                    Newsletter subscription
                  </h5>
                  <p className="mb-10 text-center text-lg-start">
                    Sign up for Shella updates to receive information about new
                    arrivals, future events and specials.
                  </p>
                </div>
                <div className="col-lg-12">
                  <form className="form-group--type-inline d-flex flex-column flex-lg-row mb-10">
                    <input
                      type="hidden"
                      name="contact[tags]"
                      value="newsletter"
                    />
                    <input
                      type="email"
                      name="contact[email]"
                      className="mb-2 mb-lg-0 mr-lg-10 "
                      placeholder="Enter Your Email Address"
                      required="required"
                    />
                    <input
                      type="submit"
                      className="btn px-lg-20 m-0 ms-lg-2 mb-5 mb-lg-0"
                      name="commit"
                      value="SUBSCRIBE!"
                    />
                  </form>
                  <Accordion
                    defaultActiveKey="0"
                    className="d-block d-lg-none footer-accordion"
                  >
                    <Accordion.Item eventKey="0">
                      <Accordion.Header className="text-center">
                        SHOP
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul className="footer-list list-unstyled pb-15 pb-lg-0">
                          <li className="py-lg-0">
                            <a href="/collections/makeup">Makeup</a>
                          </li>
                          <li className="py-lg-0">
                            <a href="/collections/skin-care">Skin Care</a>
                          </li>
                          <li className="py-lg-0">
                            <a href="/collections/hair-care">Hair Care</a>
                          </li>
                          <li className="py-lg-0">
                            <a href="/collections/fragrance">Fragrance</a>
                          </li>
                          <li className="py-lg-0">
                            <a href="/collections/foot-hand-nail-care">
                              Foot, Hand &amp; Nail Care
                            </a>
                          </li>
                          <li className="py-lg-0">
                            <a href="/collections/tools-accessories">
                              Tools &amp; Accessories
                            </a>
                          </li>
                          <li className="py-lg-0">
                            <a href="/collections/shave-hair-removal">
                              Shave &amp; Hair Removal
                            </a>
                          </li>
                          <li className="py-lg-0">
                            <a href="/collections/personal-care">
                              Personal Care
                            </a>
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>INFORMATION</Accordion.Header>
                      <Accordion.Body>
                        <ul className="footer-list list-unstyled pb-15 pb-lg-0">
                          <li className="py-lg-0">
                            <a href="/pages/about-our-store">About us</a>
                          </li>
                          <li className="py-lg-0">
                            <a href="/blogs/news">Blog</a>
                          </li>
                          <li className="py-lg-0">
                            <a href="/pages/faqs">FAQs</a>
                          </li>
                          <li className="py-lg-0">
                            <a href="/pages/contact">Contact Us</a>
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
              <div className="d-none d-lg-block">
                <div className="footer-social-media">
                  <h5 className="footer-section-title mb-0">Follow us</h5>
                  <ul className="nav d-flex list-unstyled">
                    <li className="nav-item">
                      <a
                        href="https://facebook.com"
                        className="facebook nav-link"
                      >
                        <Image
                          src={require("/public/img/facebook-ic.svg")}
                          alt="facebook"
                        />
                        <span className="tooltiptext">Facebook</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="https://facebook.com"
                        className="instagram nav-link"
                      >
                        <Image
                          src={require("/public/img/instagram-ic.svg")}
                          alt="instagram"
                        />
                        <span className="tooltiptext">Instagram</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-auto ps-0 d-flex align-items-center justify-content-center mb-3 mb-lg-0">
              <Image className="" src={require("/public/img/main-logo.svg")} />
            </div>
            <p className="col-12 col-lg-7 mb-3 mb-lg-0 author text-center text-lg-start">
              © 2022 Shella Fashion Store Shopify. All Rights Reserved.
              Ecommerce Software by Shopify. Shopify Theme by MPIthemes.
            </p>
            <div className="d-block d-lg-none">
              <div className="footer-social-media footer2">
                <ul className="nav d-flex list-unstyled mb-3 justify-content-center">
                  <li className="nav-item">
                    <a
                      href="https://facebook.com"
                      className="facebook nav-link"
                    >
                      <Image
                        src={require("/public/img/facebook-ic.svg")}
                        alt="facebook"
                      />
                      <span className="tooltiptext">Facebook</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://facebook.com"
                      className="instagram nav-link"
                    >
                      <Image
                        src={require("/public/img/instagram-ic.svg")}
                        alt="instagram"
                      />
                      <span className="tooltiptext">Instagram</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
