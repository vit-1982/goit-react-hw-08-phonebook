import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import MainTitle from "../../components/MainTitle/MainTitle";
import styles from "./LoginView.module.css";
import { authOperations } from "../../redux/auth";

class LoginView extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onLogin({ ...this.state });
    this.setState({ email: "", password: "" });
  };

  render() {
    const { email, password } = this.state;
    return (
      <>
        <MainTitle message="Login Page" />
        <p className={styles.text}>
          If you are not registered yet please{" "}
          <Link to="/register">register</Link>
        </p>
        <form onSubmit={this.handleSubmit} className={styles.form}>
          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={this.handleChange}
              name="email"
              className={styles.input}
              required
            />
          </label>
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={this.handleChange}
              name="password"
              className={styles.input}
              required
            />
          </label>
          <button type="submit" className={styles.button}>
            Submit
          </button>
        </form>
      </>
    );
  }
}

export default connect(null, { onLogin: authOperations.logIn })(LoginView);
