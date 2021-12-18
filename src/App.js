import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";


function App() {
  return (
    <Router>
      <div className="app">
        {/* <Header /> */}
        <Switch>
          <Route path="/header">
            <Header />
            <h1>home page !!</h1>
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
