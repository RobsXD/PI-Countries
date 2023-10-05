import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Cards.module.css";
import { getCountries } from "../../redux/Actions";
import { SearchBar, Card } from "../index";

const Cards = ({ handlerChange, searchName }) => {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.getCountries);
  const name = useSelector((state) => state.name);

  const [paginaActual, setPaginaActual] = useState(1);
  const countriesPerPage = 10;

  const startIndex = (paginaActual - 1) * countriesPerPage;
  const endIndex = startIndex + countriesPerPage;

  const itemsToDisplay = allCountries.slice(startIndex, endIndex);

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
    <div>
      <SearchBar handlerChange={handlerChange} value={searchName} />

      <div className={style.cardList}>
        {itemsToDisplay.map((country) => (
          <Card
            key={country.ID}
            ID={country.ID}
            name={country.name}
            flag={country.flag}
            region={country.region}
          />
        ))}

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
      </div>
    </div>
  );
};

export default Cards;
