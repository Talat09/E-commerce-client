/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";
import styled from "styled-components";

const PageNavigation = ({ title }) => {
  return (
    <Wrapper>
      <NavLink to="/">Home</NavLink>/{title}
    </Wrapper>
  );
};
const Wrapper = styled.section`
  height: 10rem;
  background-color: #213555;
  color: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 3.2rem;
  padding-left: 1.2rem;

  a {
    font-size: 3.2rem;
    color: white;
  }
`;
export default PageNavigation;
