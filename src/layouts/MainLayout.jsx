import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.css";
function MainLayout() {
  return (
    <>
      <Header />
      <div className={styles["container"]}>
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
}

export default MainLayout;
