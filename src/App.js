import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import FormSubmit from "./components/FormSubmit";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="page-container">

      <div className="main-container">
        <Router>
          <Navigation />
          <Switch>
          <Route path="/" exact>
              <h1>Home</h1>
            </Route>
            <Route path="/projects" exact>
              <h1>Projects</h1>
            </Route>
            <Route path="/about-us" exact>
              <h1>About Us</h1>
            </Route>
            <Route path="/contact-us" exact>
              <FormSubmit />
            </Route>
          </Switch>
        </Router>
      </div>

      <Footer />

    </div>
    
  );
}

export default App;
