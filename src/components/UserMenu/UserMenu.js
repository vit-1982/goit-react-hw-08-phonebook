import React from "react";
import styles from "./UserMenu.module.css";
import { connect } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";

const UserMenu = ({ name, onLogout }) => (
  <div className={styles.user}>
    <span>Welcome,{name} </span>
    <button type="button" onClick={onLogout} className={styles.button}>
      Logout
    </button>
  </div>
);

const mapStateToProps = (state) => ({
  name: authSelectors.getUserName(state),
});

export default connect(mapStateToProps, { onLogout: authOperations.logOut })(
  UserMenu
);
