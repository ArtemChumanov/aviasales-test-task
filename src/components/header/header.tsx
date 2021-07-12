import React from "react";
import Logo from "../../assets/icons/Logo.png";
import { HeaderLogo } from "./header.styled";

const Header: React.FC = () => {
  return (
    <HeaderLogo>
      <img src={Logo} />
    </HeaderLogo>
  );
};
export default Header;
