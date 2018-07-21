import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import './Product.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Breadcrumb from '../Breadcrumb/Breadcrumb'

class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //  data: {}
    }
    //console.log(this.state,123)
    this.fetchData = this.fetchData.bind(this)
  }

  componentDidMount() {
    console.log(this.props.match.params.id,567)

    this.fetchData(this.props.match.params.id)
  }

  // componentDidUpdate(prevProps) {
  //   // Typical usage (don't forget to compare props):
  //   if (this.props.match.params.id !== prevProps.match.params.id) {
  //     console.log('test')
  //     this.fetchData(this.props.match.params.id);
  //   }
  // }

  async fetchData(search)   {
    console.log(search)
    const data = await fetch('http://localhost:3001/api/items/'+ search)
    console.log(data,456)
    const JSONdata = await data.json();
    console.log(JSONdata,789)
    this.setState({
      data: JSONdata,
    })
  }
  render(){
    if (this.state !={}){
      console.log(this.state.data,42)
    }
    else{
      console.log('chau')
    }

    return(
      <div>
        <Navbar />
        {this.state.data && this.state.data.item && this.state.data.categories &&
          <React.Fragment>
            <Breadcrumb info = {this.state.data.categories} />
            <section className = "product--section">
              <div className="product--info">
                <div className="wrapper">
                  <div className="img--wrapper">
                    <img className="img" src={this.state.data.item.picture} alt={this.state.data.item.title}/>
                  </div>
                  <div className="info--wrapper">
                    <div className="state--info">
                      <h6 className="state-text">{this.state.data.item.condition}- </h6>
                      <h6 className="state-text"> {this.state.data.item.sold_quantity}</h6>
                    </div>
                    <h4 className="title-text">{this.state.data.item.title}</h4>

                    <h2 className="price-text">$ {this.state.data.item.price.amount} <span className="price-subtext">{this.state.data.item.price.decimals}</span></h2>
                      <div className="button-wrapper">
                      <div className="button">Comprar</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="description--info">
                <div className="wrapper">
                  <h3 className="description-title">Descripción del producto</h3>
                  <p className="description-text">{this.state.data.item.description}</p>
                </div>
              </div>

            </section>

          </React.Fragment>



        }
      </div>
    )
  }
}
export default Product;
