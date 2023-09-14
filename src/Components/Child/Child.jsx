import React, { Component } from 'react';

class Child extends Component {
  render() {
    return (
      <div>
        <h2>hi sayed</h2>
        <h1>{this.props.myname} and  {this.props.myAge}</h1>
      </div>
    );
  }
}

export default Child;
