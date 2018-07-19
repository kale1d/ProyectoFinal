import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
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
        <div>holi</div>
        {this.state.data && this.state.data.item && this.state.data.categories &&
          <React.Fragment>
            <p>{this.state.data.item.condition}</p>
            <Breadcrumb info= {this.state.data.categories} />

          </React.Fragment>
          }
      </div>
    )
  }
}
export default Product;
