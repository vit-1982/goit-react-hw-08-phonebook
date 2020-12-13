import React from "react";
import { Link } from "react-router-dom";
import MainTitle from "../../components/MainTitle/MainTitle";
import styles from "./HomeView.module.css";

const Home = () => (
  <div className={styles.text}>
    <MainTitle message="Welcome to Home Page" />

    <p>
      Please <Link to="/register">register</Link> or{" "}
      <Link to="/login">login</Link>
    </p>
  </div>
);

export default Home;
