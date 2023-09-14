import React, { Component } from 'react';
import Child from '../Child/Child';

class Parent extends Component {
  state={
    usernmae :"abubakr",
    age : 38,
  }
  render() {
    return (
      <div>
        <Child myAge ={this.state.age}  myname ={this.state.usernmae}/>
      </div>
    );
  }
}

export default Parent;
