import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BtnHome } from "../../buttons/Index";
import { getActivities } from "../../redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import { Activities } from "../index";

const DetailComponent = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  
  const [selectCountry, setSelectCountry] = useState([]);

  const buscar = () => {
    axios(`http://localhost:3001/countries/${id}`).then(({ data }) => {
      if (data.name) {
        setSelectCountry(data);
      } else {
        window.alert("No hay pais con ese nombre");
      }
    });
  };

  useEffect(() => {
    axios(`http://localhost:3001/countries/${id}`)
      .then((response) => response.data)
      .then((data) => {
        if (data.name) {
          setSelectCountry(data);
        } else {
          alert(data.error);
        }
      });
  }, [id]);

  

  return (
    <div>
      <h1>{selectCountry.ID}</h1>
      <h1>{selectCountry.name}</h1>
      <img src={selectCountry.flag} alt={selectCountry.name} />
      <h2>Capital: {selectCountry.capital}</h2>
      <h2>Poblacion: {selectCountry.population}</h2>
      <h2>Continente: {selectCountry.region}</h2>
      <h2>Región: {selectCountry.subregion}</h2>
      <h2>Área: {selectCountry.area} Km</h2>

      <hr />
      <h2>Actividades para hacer en el pais: </h2>
      
      <hr />
      <BtnHome />
    </div>
  );
};

export default DetailComponent;
