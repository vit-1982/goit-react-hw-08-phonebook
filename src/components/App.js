import React, { Component, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import Layout from "./Layout/Layout";
import NotFoundView from "../views/NotFound/NotFoundView";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import routes from "../routes";
import { authOperations } from "../redux/auth";

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<h2>...Loading</h2>}>
            <Switch>
              {routes.map((route) =>
                route.private ? (
                  <PrivateRoute key={route.label} {...route} />
                ) : (
                  <PublicRoute
                    key={route.label}
                    {...route}
                    restricted={route.restricted}
                  />
                )
              )}

              <Route component={NotFoundView} />
            </Switch>
          </Suspense>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default connect(null, {
  onGetCurrentUser: authOperations.getCurrentUser,
})(App);
