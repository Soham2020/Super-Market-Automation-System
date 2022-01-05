import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Address from "./Components/Cart/Address";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Payment from "./Components/Payment/Payment";
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe("pk_test_51KEbBsSHB88QzpT8f62RIuRksfJ17tLi9Exb885XUNUq47Ml1FojDAqxFC7WYx47YJuLcOrmZyEOurERX3vSV8il00lvYWqPWt")

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
            <Route path="/payment">
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </Route>
            <Route path="/address">
              <Header />
              <Address />
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
