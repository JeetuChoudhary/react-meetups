import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Menu = styled.ul`
  list-style: none;

  .menu-item {
    display: inline-block;
    margin: 0 1rem;
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 1.3px;

    transition: all 0.4s;

    &:hover {
      transform: scale(1.1);
      color: black;
    }
  }

  .active {
    color: black;
    border-bottom: 3px solid #000;
    padding-bottom: 4px;
  }
`;

export const MenuLink = styled(NavLink)<{ favorite: number }>`
  text-decoration: none;
  color: #fff;
  transition: transform 0.4s;
  position: relative;

  &:focus {
    outline: none;
    color: black;
  }
  span {
    position: absolute;
    top: -14px;
    right: -30px;
    background-color: ${(props) =>
      props.favorite > 0 ? "red" : "transparent"};
    color: #fff;
    border-radius: 50%;
    padding: 5px 10px;
  }
`;
