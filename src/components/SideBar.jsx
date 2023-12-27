import Logo from "./Logo";
import AppNav from "./AppNav";
import styles from "./Sidebar.module.css";
import { Outlet } from "react-router-dom";

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy;CopyRight {new Date().getFullYear()} WorldWise Inc.
        </p>
      </footer>
    </div>
  );
};

export default SideBar;
