import React, { Component } from 'react';
import Child from '../Child/Child';

class Parent extends Component {
  state={
    users : [
      {id:1 , username :"mohmaed" ,salary :5000},
      {id:2 , username :"saeed" ,salary :4000},
      {id:3 , username :"ahmed" ,salary :8000},
      {id:4 , username :"burhan" ,salary :22000},
      {id:5 , username :"mena" ,salary :9800},
      {id:6 , username :"osama" ,salary :6500},
      {id:7 , username :"ali" ,salary :7000},
    ]
  }
  render() {
    return (
      <div>
        <h2>{this.state.username}</h2>
        <div className="container bg-info d-flex justify-content-center">
        <div className='row'>
          {this.state.users.map((users) =><Child key={users.id} users={users}/>)}
        </div>
        </div>
      </div>
    );
  }
}

export default Parent;
