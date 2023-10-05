import React from "react";
import { Link } from "react-router-dom";

const BtnMasInfo = ({ID}) => {
  return (
    <div>
        <Link to={`/home/${ID}`} >
      <button>Más Info</button>
      </Link>
    </div>
  );
};

export default BtnMasInfo;
