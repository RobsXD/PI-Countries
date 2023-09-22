import { Link, useLocation } from "react-router-dom";
import React from 'react';

export const VolverHome = () => {
  const location = useLocation();

  let buttonText = "Volver al Home";
  if (location.pathname === "/") {
    buttonText = "Ingresar";
  } 

  return (
    <Link to="/home">
      <button>
        {buttonText}
      </button>
    </Link>
  );
};

export default VolverHome;