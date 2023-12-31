import React from "react";
// import styled from "styled-components";
import HeroSection from "../HeroSection/HeroSection";
import Services from "../Services/Services";
import Trusted from "../Trusted/Trusted";
import FeatureProducts from "../FeatureProducts/FeatureProducts";
const Home = () => {
  const data = {
    name: "Juhi'S Fashion",
    description:
      "Welcome to Juhi's Fashion, where style and sophistication meet. Explore our curated collection for timeless classics and the latest trends, empowering your unique fashion expression.",
    img: "https://i.ibb.co/wQT7MCb/freestocks-3-Q3ts-J01nc-unsplash.jpg",
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
// const Wrapper = styled.section`
//   height: 100vh;
//   background-color: ${({ theme }) => theme.colors.bg};
// `;
export default Home;
