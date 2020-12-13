import React from "react";
import { Link } from "react-router-dom";
import styles from "./NotFoundView.module.css";

const NotFound = () => (
  <div className={styles.text}>
    <h1>404</h1>
    <p>This page is not found</p>
    <p>
      Return to <Link to="/">Home Page</Link>
    </p>
  </div>
);

export default NotFound;
