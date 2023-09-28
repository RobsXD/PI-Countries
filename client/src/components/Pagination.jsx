import React from "react";
import { useEffect, useState } from "react";
import { getCountries } from "../redux/Actions";
import { useDispatch, useSelector } from "react-redux";

const Pagination = () => {
  const dispatch = useDispatch();

  const allCountries = useSelector((state) => state.getCountries);

  const [paginaActual, setPaginaActual] = useState(1);
  const countriesPerPage = 10;

  const startIndex = (paginaActual - 1) * countriesPerPage;
  const endIndex = startIndex + countriesPerPage;

  useEffect(() => {
    if (!name) {
      dispatch(getCountries());
    } else {
      const filteredCountries = allCountries.filter(
        (country) => country.name === name
      );
      dispatch({
        type: "GET_BY_NAME",
        payload: filteredCountries,
      });
    }
  }, [dispatch, name]);

  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setPaginaActual(pageNumber);
    }
  };

  const prevPage = () => {
    goToPage(paginaActual - 1);
  };

  const nextPage = () => {
    goToPage(paginaActual + 1);
  };

  const totalPages = Math.ceil(allCountries.length / countriesPerPage);

  return (
    <div className="pagination">
      <button onClick={prevPage} disabled={paginaActual === 1}>
        Página Anterior
      </button>
      <button onClick={nextPage} disabled={paginaActual === totalPages}>
        Página Siguiente
      </button>
      <p>
        Página {paginaActual} de {totalPages}
      </p>
    </div>
  );
};

export default Pagination;
