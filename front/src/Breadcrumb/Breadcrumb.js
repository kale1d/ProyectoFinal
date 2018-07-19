import React, { Component } from 'react';
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
        <div>chauchis</div>
          <div>{this.props.info.map((info,i) => {
            return (
              <div key={i}>
                <p></p>
                <p> titulo: {info}</p>


              </div>
            )
          })}</div>
      </div>
    )
  }
}
export default Breadcrumb;
