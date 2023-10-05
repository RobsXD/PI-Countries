import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { BtnMasInfo } from "../../buttons/Index";

const Card = ({ ID, name, region, flag }) => {
  return (
    <div className={style.container}>
      <h2>{ID}</h2>
      <h2>{name}</h2>
      <img src={flag} alt={name} className={style.container} />
      <h2>Continente: {region}</h2>

      <BtnMasInfo ID={ID}/>
    </div>
  );
};

export default Card;
