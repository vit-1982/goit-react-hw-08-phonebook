import { lazy } from "react";

const routes = [
  {
    path: "/",
    label: "Home",
    exact: true,
    component: lazy(() => import("./views/Home/HomeView.js")),
    private: false,
    restricted: false,
  },
  {
    path: "/register",
    label: "Register",
    exact: true,
    component: lazy(() => import("./views/Register/RegisterView.js")),
    private: false,
    restricted: true,
  },
  {
    path: "/login",
    label: "Login",
    exact: true,
    component: lazy(() => import("./views/Login/LoginView.js")),
    private: false,
    restricted: true,
  },
  {
    path: "/contacts",
    label: "Contacts",
    exact: true,
    component: lazy(() => import("./views/Contacts/ContactsView.js")),
    private: true,
    restricted: false,
  },
];

export default routes;
