import React from "react";
import { useParams } from "react-router-dom";

const Meal = () => {
  const { id } = useParams();
  console.log(id, "");
  return <div>Meal</div>;
};

export default Meal;
