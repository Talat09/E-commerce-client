import FeatureProducts from "../FeatureProducts/FeatureProducts";
import HeroSection from "../HeroSection/HeroSection";
import Services from "../Services/Services";
import Trusted from "../Trusted/Trusted";
import heroImage from "../../assets/hero-image.jpg";
const Home = () => {
  const data = {
    name: "Juhi'S Fashion",
    description:
      "Welcome to Juhi's Fashion, where style and sophistication meet. Explore our curated collection for timeless classics and the latest trends, empowering your unique fashion expression.",
    img: heroImage,
  };
  return (
    <>
      <HeroSection myData={data} />
      <FeatureProducts />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
