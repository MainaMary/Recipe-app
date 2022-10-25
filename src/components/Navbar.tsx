import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import { Menu } from "./MenuItems";
import { useNavigate } from "react-router-dom";

interface Props {
  show?: boolean;
}
const Navbar = ({ show = true }: Props) => {
  const [click, setClick] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    setClick((prevState) => {
      return !prevState;
    });
  };
  return (
    <NavWrapper>
      <NavLogo to="/">FoodRecipe</NavLogo>
      <Wrapper>
        <Button
          onClick={() => {
            navigate("/login");
          }}
        >
          Log in
        </Button>
        <Button
          onClick={() => {
            navigate("/");
          }}
        >
          Sign up
        </Button>
      </Wrapper>
      {show && (
        <>
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
        </>
      )}

      <MobileIcon onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </MobileIcon>
    </NavWrapper>
  );
};

export default Navbar;

const NavWrapper = styled.nav`
  height: 10vh;
  z-index: 2;
  background-color: #2a45cd;
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
  color: #fff;
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
    color: #fff;
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
const Wrapper = styled.div`
  display: flex;
  width: 20%;
  justify-content: space-between;
`;
const Button = styled.button`
  width: 40%;
  padding: 5px 10px;
  text-align: center;
  outline: focus;
  border: none;
  border-radius: 5px;
  color: #2a45cd;
  font-size: 16px;
  cursor: pointer;
  background-color: #fff;
`;
