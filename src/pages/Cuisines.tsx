import React from "react";
import styled from "styled-components";
import { FaJava } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";
interface Props {
  cuisine?: string;
}
const Cuisines = ({ cuisine }: Props) => {
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
  ];
  interface Props {
    label: string;
    link: string;
    icon: IconType;
  }
  return (
    <>
      <CuisineWrap>
        {cuisinesType.map((item: any) => (
          <Container>
            <Path to={item.link}>
              <FaJava />
              <h4>{item.label}</h4>
            </Path>
          </Container>
        ))}
      </CuisineWrap>
    </>
  );
};

export default Cuisines;
const CuisineWrap = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  width: 50%;
`;
const Container = styled.div`
  display: flex;
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
