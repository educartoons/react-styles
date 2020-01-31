import React from "react";
import HeaderStyled from "../../styles/components/HeaderStyled";

const Header = () => {
  return (
    // CSS IN JSX
    <HeaderStyled>
      <div className="wrapper">
        <ul>
          <li>
            <a className="logotype" href="">
              Apple
            </a>{" "}
          </li>
          <li>Mac</li>
          <li>iPad</li>
          <li>iPhone</li>
          <li>Watch</li>
          <li>TV</li>
          <li>Music</li>
          <li>Support</li>
          <li>🕵🏼‍♀️</li>
        </ul>
      </div>
    </HeaderStyled>
  );
};

export default Header;
