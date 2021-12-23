import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
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
              <Home />
            </Route>
            <Route path="/cart">
              <Header />
              <Cart />
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
