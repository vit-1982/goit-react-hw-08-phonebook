import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./AuthNav.module.css";

const AuthNav = () => (
  <div>
    <NavLink
      to="/register"
      exact
      className={styles.navItemLink}
      activeClassName={styles.navItemLinkActiv}
    >
      Register
    </NavLink>
    <NavLink
      to="/login"
      exact
      className={styles.navItemLink}
      activeClassName={styles.navItemLinkActiv}
    >
      Login
    </NavLink>
  </div>
);

export default AuthNav;
