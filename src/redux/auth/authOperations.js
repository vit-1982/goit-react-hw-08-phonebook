import axios from "axios";
import authActions from "./authActions";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";
// const baseURL = "https://goit-phonebook-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = (credentials) => (dispatch) => {
  dispatch(authActions.registerRequest());

  axios
    .post("/users/signup", credentials)
    .then((response) => {
      token.set(response.data.token);
      dispatch(authActions.registerSuccess(response.data));
    })
    .catch((error) => dispatch(authActions.registerError(error.message)));
};

const logIn = (credentials) => (dispatch) => {
  dispatch(authActions.loginRequest());

  axios
    .post("/users/login", credentials)
    .then((res) => {
      token.set(res.data.token);
      dispatch(authActions.loginSuccess(res.data));
    })
    .catch((error) => dispatch(authActions.loginError(error.message)));
};

const logOut = () => (dispatch) => {
  dispatch(authActions.logoutRequest());

  axios
    .post("/users/logout")
    .then(() => {
      token.unset();
      dispatch(authActions.logoutSuccess());
    })
    .catch((error) => dispatch(authActions.logoutError(error.message)));
};

const getCurrentUser = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(authActions.getCurrentUserRequest());

  axios
    .get("/users/current")
    .then(({ data }) => dispatch(authActions.getCurrentUserSuccess(data)))
    .catch((error) => dispatch(authActions.getCurrentUserError(error.message)));
};

// const register = (credentials) => (dispatch) => {
//   dispatch(authActions.registerRequest());
//   // console.log(credentials);

//   const options = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(credentials),
//   };

//   fetch(`${baseURL}/users/signup`, options)
//     .then((res) => res.json())
//     .then((res) => console.log(res))
//     .catch((error) => console.log(error));

// };

const authOperations = {
  register,
  logIn,
  logOut,
  getCurrentUser,
};

export default authOperations;
