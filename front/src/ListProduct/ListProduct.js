import React, { Component } from 'react';
import './ListProduct.css';
import { Link } from "react-router-dom";

class ListProduct extends Component {
  render(){
    return(
      <div>
        <div className="main--wrapper">
          {this.props.info.map((info,i) => {
          const id = info.id
          const url = 'items/'+id
          return (
            <div className="product--wrapper" key={i}>
              <div className="img--wrapper">
                <Link to = {url}>
                  <img className="product-img" src={info.picture} alt={info.title}/></Link>
              </div>
              <div className="info--wrapper">
                <h2 className="title">$ {info.price.amount}. {info.price.decimals}
                  {info.free_shipping &&
                    <img className= "shipping" src="/img/ic_shipping.png" alt="shipping logo"/>
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
