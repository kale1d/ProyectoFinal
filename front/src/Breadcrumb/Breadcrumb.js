import React, { Component } from 'react';
import './Breadcrumb.css'
import Navbar from '../Navbar/Navbar';
import { BrowserRouter as Router, Route } from "react-router-dom";

import ListProduct from '../ListProduct/ListProduct';

class Breadcrumb extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    console.log(this.props)
    return(
      <div>
          <ul className="breadcrumb--wrapper">{this.props.info.map((info,i) => {
            return (
              <li className="breadcrumb" key={i}>
              {info} </li>

            )
          })}</ul>
      </div>
    )
  }
}
export default Breadcrumb;
