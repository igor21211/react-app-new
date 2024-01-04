import { useEffect, useState } from "react";
import styles from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className={styles["sidebar"]}>
      <h2 className={styles["h2-categories"]}>Catogories</h2>
      <ul className={styles["sidebar-ul"]}>
        {categories.map((e) => (
          <li className={styles["sidebar-li"]}>
            <NavLink className={styles["sidebar-link"]} to={`products/${e}`}>
              {e}
            </NavLink>
            <img
              className={styles["icon-sidebar"]}
              src={`img/icon/${e}.svg`}
              alt="icon"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
