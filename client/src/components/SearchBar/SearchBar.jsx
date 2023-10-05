import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Card } from "../index";
import { getByName, getCountries } from "../../redux/Actions";
import style from "../Cards/Cards.module.css";

const SearchBar = ({ itemToDisplay }) => {
  const dispatch = useDispatch();
  const [searchName, setSearchName] = useState("");
  const [foundCountries, setFoundCountries] = useState([]);

  const handlerChange = (event) => {
    const value = event.target.value;
    setSearchName(value);

    const filteredCountries = getCountriesByFilter(value);
    setFoundCountries(filteredCountries);
  };

  useEffect(() => {
    if (searchName.trim() === "") {
      setFoundCountries([]);
      dispatch(getCountries());
      return;
    }

    const search = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/countries?name=${searchName}`
        );
        const data = response.data;

        setFoundCountries(data);
      } catch (error) {
        console.error(`Error: ${error.message}`);
      }
    };

    search();
  }, [searchName, dispatch]);

  const getCountriesByFilter = (filter) => {
    filter = filter.trim().toLowerCase();
    if (!filter) {
      return [];
    }
    return foundCountries.filter((country) =>
      country.name.toLowerCase().includes(filter)
    );
  };

  return (
    <div className={style.input}>
      <input
      
        type="text"
        name="searchBar"
        placeholder="Buscar tu país"
        onChange={handlerChange}
        value={searchName}
      />
      <div className={style.cardList}>
        {foundCountries.map((country) => (
          <Card
            key={country.ID}
            ID={country.ID}
            name={country.name}
            flag={country.flag}
            region={country.region}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
