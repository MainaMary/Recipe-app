import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { FaJava } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import Modal from "../components/Modal";
interface Props {
  cuisine?: string;
}
interface IProps {
  label: string;
  link: string;
  icon: IconType;
}
const Cuisines = ({ cuisine }: Props) => {
  const [italian, setItalian] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const handleModal = () => {
    setOpenModal((item) => !item);
  };

  const fetchItalian = async () => {
    const res = await axios(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=italian`
    );
    const data = res.data;
    setItalian(data.results);
  };
  useEffect(() => {
    fetchItalian();
  }, [italian]);
  const cuisinesType = [
    {
      label: "Italian",
      link: "/cuisines/italian",
      icon: <FaJava />,
    },
    {
      label: "African",
      link: "/cuisines/african",
      icon: <FaJava />,
    },
    {
      label: "American",
      link: "/cuisines/american",
      icon: <FaJava />,
    },
    {
      label: "German",
      link: "/cuisines/german",
      icon: <FaJava />,
    },
    {
      label: "Chinese",
      link: "/cuisines/chinese",
      icon: <FaJava />,
    },
    {
      label: "Mexican",
      link: "/cuisines/mexican",
      icon: <FaJava />,
    },

    {
      label: "British",
      link: "/cuisines/british",
      icon: <FaJava />,
    },
    {
      label: "Spanish",
      link: "/cuisines/spanish",
      icon: <FaJava />,
    },
  ];

  return (
    <>
      <Navbar />
      <CuisineWrap>
        {cuisinesType.map((item: any) => (
          <Path to={item.link}>
            <FaJava />
            <h4>{item.label}</h4>
          </Path>
        ))}
        <Container>
          <Button onClick={handleModal}>Get meal plan</Button>
        </Container>
      </CuisineWrap>
      <Grid>
        {italian.map((item: any) => (
          <Box key={item.id}>
            <img alt={item.title} src={item.image} />
            <h3>{item.title}</h3>
          </Box>
        ))}
      </Grid>
      <Modal openModal={openModal} handleModal={handleModal} />
    </>
  );
};

export default Cuisines;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;
const CuisineWrap = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 64px;
  align-items: center;
`;

const Button = styled.button`
  text-align: center;
  background-color: #2a45cd;
  color: #fff;
  padding: 8px 20px;
  width: 30%;
  outline: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;
const Container = styled.div`
  width: 40%;
  text-align: right;
  padding: 0px 32px;
`;
const Path = styled(NavLink)`
  text-decoration: none;
  color: #000;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  &.active {
    color: orange;
  }
`;
const Box = styled.div`
  padding: 10px 20px;
  height: 300px;
  width: 400px;
  margin: 12px auto;
  border-radius: 10px;
  overflow: hidden;

  img {
    border-radius: 10px;
  }
`;
