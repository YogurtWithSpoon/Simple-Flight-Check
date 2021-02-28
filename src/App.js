import React from "react";
import PrivateRoute from "./pages/login/PrivateRoute";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import FlightList from "./pages/flightlist/FlightList";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <PrivateRoute exact path="/flights">
            <FlightList />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
