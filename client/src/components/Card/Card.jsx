import { useSelector } from "react-redux";
import style from "./Card.module.css";
import { Link, useLocation, useParams } from "react-router-dom";


const Card = ({
  ID,
  name,
  capital,
  population,
  region,
  flag,
  area,
  subarea,
  activities,
}) => {


  return (
    <div className={style.container}>
      <h2>{ID}</h2>
      <h2>{name}</h2>
      <img src={flag} alt={name} className={style.container} />
      <h2>{activities}</h2>
      <h2>Continente: {region}</h2>
      <Link to={`/home/${ID}`}>
        <button>Más info</button>
      </Link>
    </div>
  );
};

export default Card;
