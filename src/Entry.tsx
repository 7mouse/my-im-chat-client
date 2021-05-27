import React from "react";
import "./App.css";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom";
import HomePage from "./pages/Home";
import Login from "./pages/Login";
import { useAuth } from "./hooks/useAuth";
import ErrorModel from "./components/ErrorModel";
import { useError } from "./hooks/useError";

let App: React.FC = () => {
  const { user } = useAuth();
  const {error } = useError();
  return (
    <div className="App w-screen h-screen flex justify-center items-center">
      <Router>
        <Switch>
            <Route path="/">
              <HomePage />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
        </Switch>
        {
          !user ? <Redirect to="/login" from="/" />
          : <Redirect to="/" from="/" />
        }
      </Router>
      {error && <ErrorModel error={error} />}
    </div>
  );
};

export default App;
