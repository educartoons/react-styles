import styled from "styled-components";
import { colors } from "../utils";
import logotype from "../../assets/images/image_large.svg";

const HeaderStyled = styled.header`
  box-sizing: border-box;
  background-color: black;
  color: white;
  padding: 0.8em 1em;
  .wrapper {
    margin: 0 auto;
    width: 950px;
  }
  .logotype {
    background-size: 16px 33px;
    background-repeat: no-repeat;
    background-image: url(${logotype});
    background-position: center center;
    display: inline-block;
    text-indent: -1000000px;
    width: 16px;
    height: 16px;
  }
  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin: 0 0 0 0;
    padding: 0 0 0 0;
    li {
      color: ${colors.gray};
      display: inline-block;
      font-size: 0.8em;
      font-weight: 400;
      line-height: 1;
      opacity: 0.8;
    }
  }
`;

export default HeaderStyled;
