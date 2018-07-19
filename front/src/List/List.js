import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ListProduct from '../ListProduct/ListProduct'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
const queryString = require('query-string');

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {}
    }

    this.fetchData = this.fetchData.bind(this)
  }

  componentDidMount() {
    //console.log('hola')
    this.fetchData(this.props.location.search)
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.location.search !== prevProps.location.search) {
      //console.log('test')
      this.fetchData(this.props.location.search);
    }
  }

  async fetchData(search)   {
    //console.log(search)
    let query = queryString.parse(search)
    //console.log(query)
    const data = await fetch('http://localhost:3001/api/items?search='+query.search)
    //console.log(data)
    const JSONdata = await data.json();
    console.log(JSONdata)
      this.setState({
        data: JSONdata,
      })
  }

  render(){
    console.log(this.state.data.categories)
    return(
      <div>
        <Navbar />
        {Object.keys(this.state.data).length > 0 &&
        <div>
          <ListProduct info={this.state.data.items} />
          <Breadcrumb info = {this.state.data.categories} />
        </div>
        }

      </div>
    )
  }
}

export default List
