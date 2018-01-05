import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
// Begin Import Router Stuff here ---------------------
import { BrowserRouter, Route } from "react-router-dom";

// End Router Stuff imports ---------------------------
// Import Redux Here if Necesary
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';

//End Redux Imports
// Import Components after here -----------------------
import Nav from "./components/Nav/Nav";
import Registration from "./components/Registration/Registration";
import Profile from "./components/Profile/Profile";
import List from "./components/List/List";
import ProfileEdit from './components/ProfileEdit/ProfileEdit';
// End Components import ------------------------------

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(

    <Provider  store={createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <BrowserRouter>
        <div>
            <Nav />
            <Route exact path='/' component={Registration} />
            <Route path='/profile' component={Profile} />
            <Route path='/list' component={List} />
        </div>
    </BrowserRouter>
    </Provider>
,document.getElementById('root'));
