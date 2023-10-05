import React from "react";
import { Link } from "react-router-dom";

const BtnLanding = () => {
  return (
    <div>
      <Link to="/">
        <button>Salir de la aplicación</button>
      </Link>
    </div>
  );
};

export default BtnLanding;
