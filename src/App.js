import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BGImg from "./img/assets_UI_clockenflap_temporary_logo.png"

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import InstallButton from "./components/installbutton.component"


function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}><img src={BGImg}></img></Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}><h6 className="linkText">Sign in</h6></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="outer">
        
        <div className="inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
        </div>
        <div className="installer">
        <InstallButton></InstallButton>
        </div>
      </div>
    </div></Router>
  );
}

export default App;
