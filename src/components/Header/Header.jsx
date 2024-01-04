import styles from "./Header.module.css";

function Header() {
  return (
    <header>
      <div class={styles["header-div"]}>
        <a href="/">
          <img
            class={styles["logo"]}
            src="img/behance-square-icon.svg"
            alt="logo"
          />
        </a>

        <h1>Online Store</h1>
        <div class={styles["search"]}>
          <input
            class={styles["input-search"]}
            placeholder="Search something"
            type="text"
          />
          <img class={styles["logo-search"]} src="img/search-icon.svg" alt="" />
        </div>
      </div>
      <div class={styles["cart_fav"]}>
        <div class={styles["cart-div"]}>
          <a href="#cart">
            <span class={styles["count-cart"]}>0</span>
            <img
              class={styles["cart-logo"]}
              src="img/shopping-cart-icon.svg"
              alt="icon-favorite"
            />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
