import React from "react";
import { connect } from "react-redux";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import styles from "./Header.module.css";
import { authSelectors } from "../../redux/auth";

const Header = ({ isAuthenticated }) => (
  <header className={styles.header}>
    <Navigation />
    <p className={styles.title}>Phonebook</p>
    {isAuthenticated ? <UserMenu /> : <AuthNav />}
  </header>
);

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(Header);
