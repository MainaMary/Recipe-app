import React from "react";
import Navbar from "../../components/Navbar";
import CustomLoader from "../../components/CustomLoader";
import styled from "styled-components";

interface Props {
  isLoading?: boolean;
  diet?: any;
  nutrients?: any[];
}
const Diet = (props: Props) => {
  const { isLoading, diet, nutrients } = props;
  console.log(!isLoading && nutrients, "nutrients");
  return (
    <>
      <Navbar />
      {
        <Grid>
          {isLoading ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "30px",
              }}
            >
              <CustomLoader />
            </div>
          ) : (
            <p>Diet plan</p>
          )}
        </Grid>
      }
    </>
  );
};

export default Diet;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;
const Box = styled.div`
  padding: 10px 20px;
  height: 300px;
  width: 400px;A
  margin: 12px auto;
  border-radius: 10px;
  overflow: hidden;

  img {
    border-radius: 10px;
  }
`;
