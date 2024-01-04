import { Link } from "react-router-dom";
import styles from "./Card.module.css";

function Card({ id, title, description, price, thumbnail }) {
  return (
    <div className={styles["product-cards"]}>
      <Link to={id} className={styles["link-card"]}>
        <img src={thumbnail} alt="" />
        <h3>{title}</h3>
        <p>{description}</p>
        <span>$ {price}</span>
      </Link>
      <button className={styles["btn-class-list"]}>Add to Card</button>
    </div>
  );
}

export default Card;
