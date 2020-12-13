import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import MainTitle from "../../components/MainTitle/MainTitle";
import styles from "./RegisterView.module.css";
import { authOperations } from "../../redux/auth";

class RegisterView extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  // handleChange = ({ target: { name, value } }) => {
  //   this.setState({ [name]: value });
  // };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onRegister({ ...this.state });
    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <>
        <MainTitle message="Register Page" />
        <p className={styles.text}>
          If you already registered please <Link to="/login">login</Link>
        </p>
        <form onSubmit={this.handleSubmit} className={styles.form}>
          <label>
            Name
            <input
              type="text"
              value={name}
              onChange={this.handleChange}
              name="name"
              className={styles.input}
              required
            />
          </label>
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

export default connect(null, { onRegister: authOperations.register })(
  RegisterView
);
