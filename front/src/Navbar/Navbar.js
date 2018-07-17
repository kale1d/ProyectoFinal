import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

class Navbar extends Component {
  constructor(props){
    super(props)
    this.state = {
      search: '',
      data: {},
    }
  }

  handleChange(e) {
    const value = e.target.value

    this.setState({
      search: value
    })
  }

  handleClick() {
    this.setState({
      search: '',
    })
    console.log(this.state.search)
  }

  render() {
    let url ='/items?search=' + this.state.search
    return (
      <div className="input">
        <div className="action-container">
          <input
            type="text"
            value={this.state.search}
            onChange={this.handleChange.bind(this)}
            />
          <Link to={url}>
            <div onClick={this.handleClick.bind(this)}>Agregar</div>
          </Link>
        </div>
      </div>
    );
  }
}



export default Navbar;
