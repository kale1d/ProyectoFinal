import React, { Component } from 'react';
import './ListProduct.css';
import Navbar from '../Navbar/Navbar';
import List from '../List/List';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const queryString = require('query-string');

class ListProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render(){
    //console.log(this.props.info[0].id, 123)
    return(
      <div>
      <div className="main--wrapper">{this.props.info.map((info,i) => {
        //console.log(info.id,123)
        let id = info.id
        console.log(id)
        let url = 'items/'+id
        console.log(url)
        return (
          <div className="product--wrapper" key={i}>
            <div className="img--wrapper">
            <Link to = {url} > <img className="product-img" src={info.picture}/></Link>
            </div>
          <div className="info--wrapper">
              <h2 className="title">$ {info.price.amount}. {info.price.decimals}
                {info.free_shipping &&
                <img className= "shipping" src="/img/ic_shipping.png"/>
                }
              </h2>
              <p className="subtitle"> {info.title}</p>
            </div>
            <h6 className="city">{info.city}</h6>

          </div>
        )
      })}
    </div>

      </div>
    )
  }
}

export default ListProduct
