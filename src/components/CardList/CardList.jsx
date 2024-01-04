import { useEffect, useState } from "react";
import styles from "./CardList.module.css";
import Card from "../Card/Card";
import { useParams } from "react-router-dom";
function CardList() {
  const [productList, setProductList] = useState([]);
  const params = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url =
          params && params.category
            ? `https://dummyjson.com/products/category/${params.category}?limit=12`
            : "https://dummyjson.com/products?limit=12";

        const response = await fetch(url);
        const data = await response.json();
        setProductList(data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [params]);

  return (
    <main className={styles["main-content"]}>
      {productList.map((p) => (
        <Card {...p} />
      ))}
    </main>
  );
}

export default CardList;
