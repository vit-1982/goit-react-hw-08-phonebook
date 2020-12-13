const isAuthenticated = (state) => state.auth.token;

const getUserName = (state) => state.auth.user.name;

const authSelectors = {
  isAuthenticated,
  getUserName,
};

export default authSelectors;
