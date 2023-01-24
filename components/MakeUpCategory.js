import Image from "next/image";
import React from "react";

export default function MakeUpCategory() {
  return (
    <div className="category-catalog">
      <div className="container">
        <div className="row category-inner-wrapper">
          <div className="col-6">
            <div className="row position-relative">
              <div className="col-4">
                <h4 className="ps-2">
                  <a href="#link">FACE</a>
                </h4>
                <ul className="list-unstyled nav-list ">
                  <li className="nav-item">
                    <a className="nav-link" href="#link">
                      Foundation
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#link">
                      BB & CC Cream
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#link">
                      Tinted Moisturizer
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#link">
                      Concealer
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#link">
                      Face Primer
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#link">
                      Setting Spray & Powder
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#link">
                      Highlighter
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#link">
                      Contour
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#link">
                      Color Correct
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#link">
                      Face Sets
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-4">
                <h4 className="ps-2">
                  <a href="#link">FACE</a>
                </h4>
                <ul className="list-unstyled nav-list ">
                  <li className="nav-item">
                    <a className="nav-link" href="#link">
                      Foundation
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#link">
                      BB & CC Cream
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#link">
                      Tinted Moisturizer
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#link">
                      Concealer
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#link">
                      Face Primer
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#link">
                      Setting Spray & Powder
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#link">
                      Highlighter
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#link">
                      Contour
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#link">
                      Color Correct
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#link">
                      Face Sets
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-4">
                <h4 className="ps-2">
                  <a href="#link">FACE</a>
                </h4>
                <ul className="list-unstyled nav-list ">
                  <li className="nav-item">
                    <a className="nav-link" href="#link">
                      Foundation
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#link">
                      BB & CC Cream
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#link">
                      Tinted Moisturizer
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#link">
                      Concealer
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#link">
                      Face Primer
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#link">
                      Setting Spray & Powder
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#link">
                      Highlighter
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#link">
                      Contour
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#link">
                      Color Correct
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#link">
                      Face Sets
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-6 category-img-wrapper">
                <a href="#link">
                  <div className="category-img-container position-relative">
                    <Image
                      className="category-img img-fluid"
                      src={require("/public/img/fragrance.jpg")}
                      alt=""
                    />
                    <div className="category-img-title position-absolute">
                      SALE AND SPECIAL OFFERS
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-6 category-img-wrapper">
                <a href="#link">
                  <div className="category-img-container position-relative">
                    <Image
                      className="category-img img-fluid"
                      src={require("/public/img/fragrance.jpg")}
                      alt=""
                    />
                    <div className="category-img-title position-absolute">
                      NEW IN
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
