import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { authSelectors } from "../../redux/auth";
import styles from "./Navigation.module.css";

const Navigation = ({ isAuthenticated }) => (
  <nav className={styles.nav}>
    <NavLink
      to="/"
      exact
      className={styles.navItemLink}
      activeClassName={styles.navItemLinkActiv}
    >
      Home
    </NavLink>
    {isAuthenticated && (
      <NavLink
        to="/contacts"
        exact
        className={styles.navItemLink}
        activeClassName={styles.navItemLinkActiv}
      >
        Contacts
      </NavLink>
    )}
  </nav>
);

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
