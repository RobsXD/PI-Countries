import React from "react";
import Cards from "../components/Cards/Cards";
import { BtnCreateAct, BtnLanding } from "../buttons/Index";
const Home = () => {
  return (
    <div>
      <BtnLanding/>
      <BtnCreateAct />
      <Cards />
    </div>
  );
};

export default Home;
