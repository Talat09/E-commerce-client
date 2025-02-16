import HeroSection from "../HeroSection/HeroSection";
import heroImage from "../../assets/hero-image.jpg";
const About = () => {
  const data = {
    name: "Juhi'S ECommerce",
    description:
      "At Juhi's Fashion, we're passionate about fashion and dedicated to helping you look and feel your best. Discover our story and commitment to style and quality.",
    img: heroImage,
  };
  return <HeroSection myData={data} />;
};

export default About;
