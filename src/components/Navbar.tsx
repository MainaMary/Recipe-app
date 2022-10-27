import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaTimes, FaBars, FaUserAlt } from "react-icons/fa";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { Menu } from "./MenuItems";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseApp";
interface Props {
  show?: boolean;
  checkBtns?: boolean;
}
interface ModalProps {
  showModal?: boolean;
  handleModal?: () => void;
}
const Modal = (props: ModalProps) => {
  const { showModal, handleModal } = props;
  const currentUser = useContext(UserContext);
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();
  if (!showModal) {
    return null;
  }
  const handleLogout = async () => {
    try {
      await signOut(auth);

      navigate("/login");
    } catch (error: any) {
      console.log(error.message);
      setError("Failed to log out");
    }
  };
  return (
    <Profilewrap>
      <Form>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "8px 0",
          }}
        >
          <p>Profile</p>
          <p onClick={handleModal}>X</p>
        </div>

        <div>
          Email
          <p>{currentUser.currentUser?.email}</p>
        </div>
        <ProfileBtns>
          <Btn onClick={() => navigate("/updateProfile")}>Update profile</Btn>
          <Btn style={{ padding: "4px 8px" }} onClick={handleLogout}>
            Log out
          </Btn>
        </ProfileBtns>
      </Form>
    </Profilewrap>
  );
};
const Navbar = ({ show = true, checkBtns = false }: Props) => {
  const [click, setClick] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    setClick((prevState) => {
      return !prevState;
    });
  };
  const handleModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <NavWrapper>
      <NavLogo to="/">FoodRecipe</NavLogo>
      {checkBtns ? (
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
      ) : null}
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
            <Items className="navBtn" onClick={handleModal}>
              <FaUserAlt className="navBtn" />
            </Items>
          </ListWrap>
        </>
      )}

      <MobileIcon onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </MobileIcon>
      {showModal ? (
        <Modal showModal={showModal} handleModal={handleModal} />
      ) : null}
    </NavWrapper>
  );
};

export default Navbar;

const Profilewrap = styled.div`
  position: relative;
  top: 80px;
  right: 36px;
  box-shadow: 0 0 3px #777;
  width: 15%;
`;
const Form = styled.div`
  padding: 10px 8px;
`;
const Btn = styled.button`
  padding: 4px 8px;
  background-color: var(--globalColor);
  border: none;
  outline: "none";
  color: #fff;
  border-radius: 3px;
  cursor: pointer;
`;
const ProfileBtns = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 12px 0;
`;
const NavWrapper = styled.nav`
  height: 10vh;
  z-index: 2;
  background-color: rgba(244, 159, 47, 0.8);
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
  color: var(--globalColor);
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  background-color: #fff;
`;
