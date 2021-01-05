import './App.css';
import React, { useEffect } from 'react';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route}  from "react-router-dom"
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';

function App() {

  useEffect(() => {
    // will only run once when the app component loads...
    
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser);

      if (authUser) {
        // the user just logged in || the user was logged in
        
      }
    })
  }, [])

  return (
    // BEM
    <Router>
      <div className="app">

        <Switch>
          <Route path="/login" >
            <Login />
          </Route>

          <Route path="/checkout" >
            <Header/>
            <Checkout />
          </Route>

          <Route path="/" >
            <Header/>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
