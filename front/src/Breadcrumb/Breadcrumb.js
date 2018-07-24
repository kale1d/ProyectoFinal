import React, { Component } from 'react';
import './Breadcrumb.css'

class Breadcrumb extends Component {
  render(){
    return(
      <div>
        <ul className="breadcrumb--wrapper">
          {this.props.info.map((info,i) => {
            return (
              <li className="breadcrumb" key={i}>
                {info} </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
export default Breadcrumb;
