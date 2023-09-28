import React from "react";
import { Link, useLocation } from "react-router-dom";

const BtnCreateAct = () => {
  return (
    <div>
      <Link to="/form">
        <button>Crea tu propia actividad</button>
      </Link>
    </div>
  );
};

export default BtnCreateAct;
