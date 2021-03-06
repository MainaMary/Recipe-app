import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import { Menu } from "./MenuItems";
const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick((prevState) => {
      return !prevState;
    });
  };
  return (
    <NavWrapper>
      <NavLogo to="/">FoodRecipe</NavLogo>
      <ListWrap>
        {Menu.map(({ id, title, url, className }) => {
          console.log(title);
          return (
            <Items key={id} className={className}>
              <a href={url}>{title}</a>
            </Items>
          );
        })}
      </ListWrap>
      <MobileIcon onClick={handleClick}>{click ? FaTimes : FaBars}</MobileIcon>
    </NavWrapper>
  );
};

export default Navbar;

const NavWrapper = styled.nav`
  height: 10vh;
  z-index: 2;
  background-color: grey;
  //  margin-top: -80px;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;

  @media screen and (max-width: 860px) {
    transition: 0.8s all ease;
  }
`;

const NavLogo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
`;
const ListWrap = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  width: 70%;
  justify-content: flex-end;

  @media screen and max-width(768px) {
    display: none;
  }
`;
const Items = styled.li`
  padding: 0 20px;

  a {
    text-decoration: none;
    padding: 0 20px;
  }
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
