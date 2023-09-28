import React from "react";
import {HandlerNext, HandlerPrev} from "../handlers/Index";

const BtnPrevNext = () => {
  return (
    <div>

      <button onClick={HandlerPrev} disabled={paginaActual === 1}>Prev</button>
      <button onClick={HandlerNext} disabled={paginaActual === totalPages}>Next</button>
      
    </div>
  );
};

export default BtnPrevNext;
