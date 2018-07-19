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
    //console.log(this.props.info, 123)
    return(
      <div>
      <div>probando</div>
      <div>{this.props.info.map((info,i) => {
        return (
          <div key={i}>
            <p>precio:{info.price.amount}</p>
            <p> titulo: {info.title}</p>
              <img src={info.picture}/>

          </div>
        )
      })}</div>

      </div>
    )
  }
}

export default ListProduct
