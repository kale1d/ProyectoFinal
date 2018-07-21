import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"
import './Navbar.css';

class Navbar extends Component {
  constructor(props){
    super(props)
    this.state = {
      search: '',
      data: {},
      redirect: false,
    }
  }
  componentDidUpdate() {
    if (this.state.redirect) {
      this.setState({
        redirect:false,
      })
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

  handleKeyPress(e){
    if(e.key=='Enter'){
      console.log (1234)
      this.setState({
        redirect:true,
      })
    }
  }

  render() {
    let url ='/items?search=' + this.state.search
    return (
      <nav className="nav--section">
        <div className = "nav--wrapper">
        <input className="input"
          type="text"
          value={this.state.search}
          onChange={this.handleChange.bind(this)}
          placeholder = "¿Qué estás buscando?"
          onKeyPress={this.handleKeyPress.bind(this)}
          />
        {this.state.redirect &&
          <Redirect to={url}>
          </Redirect>
        }
        <div className="search--wrapper" onClick={this.handleClick.bind(this)}>
          <img className="search--img" src="/img/search.png"></img>
        </div>

      </div>
      </nav>
    );
  }
}



export default Navbar;
