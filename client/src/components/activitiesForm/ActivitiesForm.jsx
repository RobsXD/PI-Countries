import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Select from "react-select";
import { getCountries } from "../../redux/Actions";
import style from "./ActivitiesForm.module.css";

const ActivitiesForm = () => {
  const succes = () => {
    window.alert("La actividad fue creada con exito");
  };
  const countries = useSelector((state) => state.getCountries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  const handlerSelectedOption = (event) => {
    const selectedValue = event.value;

    setMakeActivity({ ...makeActivity, id: selectedValue });
  };

  const [makeActivity, setMakeActivity] = useState({
    id: "",
    name: "",
    difficulty: "",
    duration: "",
    season: [],
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setMakeActivity({ ...makeActivity, [property]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/activities",
        makeActivity
      );

      if (response.status === 201) succes();
    } catch (error) {
      window.alert({ error: error.message });
    }
  };

  const seasons = ["Primavera", "Verano", "Otoño", "Invierno"];
  const [selectedSeasons, setSelectedSeasons] = useState([]);

  const handlerSeasonChange = (event) => {
    const selectedOptions = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setSelectedSeasons(selectedOptions);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Pais de la actividad: </label>
        <Select
          className={style.select}
          onChange={handlerSelectedOption}
          name="id"
          options={countries.map((country) => ({
            label: country.name,
            value: country.ID,
          }))}
        />
        <hr />

        <label>Nombre de la actividad: </label>
        <input
          type="text"
          name="name"
          value={makeActivity.name}
          onChange={handleChange}
        />
        <hr />

        <label>Dificultad de la actividad: </label>
        <input
          type="number"
          name="difficulty"
          min="1"
          max="5"
          value={makeActivity.difficulty}
          onChange={handleChange}
        />
        <hr />

        <label>Duración de la actividad: </label>
        <input
          type="time"
          name="duration"
          value={makeActivity.duration}
          onChange={handleChange}
        />
        <hr />

        <label>Temporada: </label>
        <select
          multiple
          name="season"
          id="season"
          value={makeActivity.season}
          onChange={handleChange}
        >
          {seasons.map((season) => (
            <option key={season} value={season}>
              {season}
            </option>
          ))}
        </select>

        <div>
          <ul>
            {Array.isArray(makeActivity.season) &&
              makeActivity.season.map((season) => (
                <li key={season}>{season}</li>
              ))}
          </ul>
        </div>

        <hr />

        <button type="submit">Crea tu actividad</button>
      </form>
    </div>
  );
};

export default ActivitiesForm;

// "id": "CHE",
// "name": "Golf",
// "difficulty": "5",
// "duration": "16:00:00",
// "season": "winter"
