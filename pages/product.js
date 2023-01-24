import CategoryNav from "../components/CategoryNav";
import Footer from "../components/Footer";
import MainNav from "../components/MainNav";
import ProductViewTabs from "../components/ProductInfoTabs";
import ProductView from "../components/ProductView";
import RelatedProducts from "../components/RelatedProducts";
import SectionDivider from "../components/SectionDivider";

function Product() {
  return (
    <>
      {/* <MainNav />
      <CategoryNav /> */}
      <ProductView />
      <ProductViewTabs />
      <RelatedProducts />
      <SectionDivider />
      {/* <Footer /> */}
    </>
  );
}
export default Product