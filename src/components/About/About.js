import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import { useProductContext } from "../../context/productcontext";

const About = () => {
  const { name } = useProductContext();
  console.log(name);
  const data = {
    name: "Juhi'S ECommerce",
    description:
      "At Juhi's Fashion, we're passionate about fashion and dedicated to helping you look and feel your best. Discover our story and commitment to style and quality.",
    img: "https://i.ibb.co/wyrdC6r/arturo-rey-5y-P83-Rha-FGA-unsplash.jpg",
  };
  return <HeroSection myData={data} />;
};

export default About;
