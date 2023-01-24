import Image from "next/image";

export default function Trending() {
  return (
    <div className="container">
      <h3 className="section-title">trending now</h3>
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 trending-container">
          <a href="#makeup" className="trending-wrapper">
            <div className="trending-box">
              <Image
                src={require("/public/img/macke-up-img.jpg")}
                alt="Make up"
              />
            </div>
            <div className="trending-category">makeup</div>
          </a>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 trending-container">
          <a href="#makeup" className="trending-wrapper">
            <div className="trending-box">
              <Image
                src={require("/public/img/skin-care.jpg")}
                alt="Skin care"
              />
            </div>
            <div className="trending-category">skin care</div>
          </a>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 trending-container">
          <a href="#makeup" className="trending-wrapper">
            <div className="trending-box">
              <Image
                src={require("/public/img/haire-care.jpg")}
                alt="haire care"
              />
            </div>
            <div className="trending-category">hair care</div>
          </a>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 trending-container">
          <a href="#makeup" className="trending-wrapper">
            <div className="trending-box">
              <Image
                src={require("/public/img/fragrance.jpg")}
                alt="fragrance"
              />
            </div>
            <div className="trending-category">fragrance</div>
          </a>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 trending-container">
          <a href="#makeup" className="trending-wrapper">
            <div className="trending-box">
              <Image src={require("/public/img/nail-care.webp")} alt="" />
            </div>
            <div className="trending-category">foot, hand & nail care</div>
          </a>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 trending-container">
          <a href="#makeup" className="trending-wrapper">
            <div className="trending-box">
              <Image
                src={require("/public/img/tools-accessories.webp")}
                alt=""
              />
            </div>
            <div className="trending-category">tools & accessories</div>
          </a>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 trending-container">
          <a href="#makeup" className="trending-wrapper">
            <div className="trending-box">
              <Image src={require("/public/img/shave-removal.webp")} alt="" />
            </div>
            <div className="trending-category">shave & hair removal</div>
          </a>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 trending-container">
          <a href="#makeup" className="trending-wrapper">
            <div className="trending-box">
              <Image src={require("/public/img/personal-care.jpg")} alt="" />
            </div>
            <div className="trending-category">person care</div>
          </a>
        </div>
      </div>
    </div>
  );
}
