// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import './App.css';

function App() {
    return ( <
        Router >
        <
        div className = "App" >
        <
        Switch >
        <
        Route exact path = "/"
        component = { Home }
        /> <
        Route path = "/product/:id"
        component = { ProductDetails }
        /> <
        /Switch> <
        /div> <
        /Router>
    );
}

export default App;