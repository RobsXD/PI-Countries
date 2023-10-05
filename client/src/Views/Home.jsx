import React from "react";
import { Cards } from "../components/index";
import { BtnCreateAct, BtnLanding } from "../buttons/Index";
const Home = () => {
  return (
    <div>
      <BtnLanding />
      <BtnCreateAct />

      <Cards />
    </div>
  );
};

export default Home;
