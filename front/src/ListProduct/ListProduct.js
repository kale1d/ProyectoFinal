import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import List from '../List/List'
import { BrowserRouter as Router, Route } from "react-router-dom";
const queryString = require('query-string');

class ListProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render(){
    console.log(this.props.info.map((num,i) => {

    }))
    return(
      <div>
      <div>probando</div>
      <div>{this.props.info.map((info,i) => {
        return (
          <p key={i}>{info.id}</p>
        )
      })}</div>

      </div>
    )
  }
}

export default ListProduct
