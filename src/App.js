import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {

  const [ { user }, dispatch ] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("Current User is ", authUser);
      if(authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">
        {/* <Header /> */}
        { 
          user ? <Switch>
            <Route path="/header">
              <Header />
              <h1 style={{ textAlign:"center" }}>home page under progress !!</h1>
            </Route>
            <Route path="/">
              <Login />
            </Route>
            </Switch> : <Route path="/"> <Login /> </Route>
        }
      </div>
    </Router>
  );
}

export default App;
