import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar'
import List from './List/List'
import Product from './Product/Product'
import { BrowserRouter as Router, Route } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={Navbar} />
            <Route exact path="/items" component={List} />
            <Route path="/items/:id" component={Product} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
