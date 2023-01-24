import Bestsellers from "../components/Bestsellers";
import CategoryNav from "../components/CategoryNav";
import Footer from "../components/Footer";
import MainNav from "../components/MainNav";
import MainSlider from "../components/MainSlider";
import SectionDivider from "../components/SectionDivider";
import Trending from "../components/Trending";
function Home() {
  return (
    <div className="h-100">
      {/* <MainNav />
      <CategoryNav /> */}
      <MainSlider />
      <SectionDivider />
      <Trending />
      <SectionDivider />
      <Bestsellers />
      <SectionDivider />
      {/* <Footer /> */}
    </div>
  );
}


export default Home
