import style from "./Card.module.css";
import { BtnDetail } from "../../buttons/BtnDetail";
const Card = ({
  name,
  capital,
  ID,
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
      <BtnDetail />
    </div>
  );
};

export default Card;
