import React, { Component } from 'react';
import {FcCustomerSupport} from "react-icons/fc";

class Child extends Component {
  render() {
    return (
      <div>
        <h2>hi Sayed</h2>
        <h1>{this.props.myname} and  {this.props.myAge}</h1>
        <FcCustomerSupport  className='bg-danger text-bg-dark text-center w-50 m-auto text-xl-center'/>
      </div>
    );
  }
}

export default Child;
