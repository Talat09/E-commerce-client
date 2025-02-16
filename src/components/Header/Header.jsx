import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";
import logo from "../../assets/logo1.png";
const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src={logo} alt="Juhi's Fashion" style={{ width: "150px" }} />
      </NavLink>
      <Nav></Nav>
    </MainHeader>
  );
};
const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
`;
export default Header;
