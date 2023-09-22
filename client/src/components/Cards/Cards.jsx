import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "./Cards.module.css";
import { getCountries } from "../../redux/Actions";
import { BtnDetail } from "../../buttons/BtnDetail";

const Cards = () => {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.getCountries);
  const { name } = new URLSearchParams(`http://localhost:5173/countries`);

  useEffect(() => {
    if (!name) {
      dispatch(getCountries());
    } else {
      dispatch(getByName(name));
    }
  }, [dispatch, name]);

  return (
    <div className={style.cardList}>
      {allCountries.map((country) => (
        <Card
          key={country.ID}
          name={country.name}
          flag={country.flag}
          activities={country.activities}
        />
      ))}
    </div>
  );
};

export default Cards;
