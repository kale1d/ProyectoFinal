import React, { Component } from 'react';
import './List.css';
import Navbar from '../Navbar/Navbar';
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
    this.fetchData(this.props.location.search)
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.search !== prevProps.location.search) {
      this.fetchData(this.props.location.search);
    }
  }

  async fetchData(search)   {
    let query = queryString.parse(search)
    const data = await fetch('http://localhost:3001/api/items?search='+query.search)
    const JSONdata = await data.json();
    this.setState({
      data: JSONdata,
    })
  }

  render(){
    return(
      <div>
        <Navbar />
        {Object.keys(this.state.data).length > 0 &&
          <section className="list--section">
            <div className="list--wrapper">
              <Breadcrumb info = {this.state.data.categories} />

              <ListProduct info={this.state.data.items} />
            </div>
          </section>
        }

      </div>
    )
  }
}

export default List
