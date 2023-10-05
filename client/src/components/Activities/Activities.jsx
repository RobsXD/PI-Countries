import React from "react";

const Activities = ({key, id, name, difficulty, duration, season}) => {
  return <div>
    <h2>{key}</h2>
    <h2>{id}</h2>
    <h2>{name}</h2>
    <h2>{difficulty}</h2>
    <h2>{duration}</h2>
    <h2>{season}</h2>
  </div>;
};

export default Activities;
