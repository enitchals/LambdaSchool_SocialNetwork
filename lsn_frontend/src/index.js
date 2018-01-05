import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
// Begin Import Router Stuff here ---------------------
import { BrowserRouter, Route } from "react-router-dom";

// End Router Stuff imports ---------------------------
// Import Redux Here if Necesary

//End Redux Imports
// Import Components after here -----------------------
import Nav from "./components/Nav/Nav";
import Registration from "./components/Registration/Registration";
import Profile from "./components/Profile/Profile";
import List from "./components/List/List";
import ProfileEdit from './components/ProfileEdit/ProfileEdit';
// End Components import ------------------------------

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Nav />
      <Route exact path="/" component={Registration} />
      <Route path="/login" component={Registration} />
      <Route path="/profile" component={Profile} />
      <Route path="/list" component={List} />
      <Route path="/edit" component={ProfileEdit} />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
