import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

// import Sonnet from "../../components/Sonnet";

function UncontrolledExample() {
  return (
    <div className="container mt-lg-4">
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3 product-info-tabs"
      >
        <Tab eventKey="home" title="PRODUCT INFORMATION">
          This is a demo product. Images used from photostocks unsplash. Made in
          Italy from glossy satin-back fabric woven from twisted crepe yarn and
          very fine transparent nylon yarn that produce a subtle sparkle, our
          sweeping Briar evening gown is finished with an elongated tulle
          crisscross halter-style sash that secures at the back of the neck to
          create an elegant train. Sleeveless A-line silhouette. Intended to hit
          at the floor. US size 8 has a 47" body length, an 18¼" bust, and a
          30¼" waist. All sizes have a 47" dress length. Crisscross halter
          neckline. Concealed center back zipper with a hook-and-eye closure.
          Elongated tulle sash ties at the back of the neck. Bust darts.
          Unlined. Shell: viscose, polyamide. Sash: polyamide. Dry clean. Made
          in Italy. Model is 5'10"/178 cm and wears a US size 2. Style Number:
          # 464047
        </Tab>
        <Tab eventKey="profile" title="ADDITIONAL">
          HEIGHT: 180 cm - 5' 11” BUST: 83 cm - 32” WAIST: 57 cm - 22” HIPS: 88
          cm - 35 SHOE SIZE: 39 - 6 Note: you can configure unique tab per
          product
        </Tab>
        <Tab eventKey="contact" title="Custom tab">
          lorem100ddsdsdssdfsafkjhbf
        </Tab>
      </Tabs>
    </div>
  );
}

export default UncontrolledExample;
