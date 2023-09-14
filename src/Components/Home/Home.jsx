import React, { Component } from "react";

class Home extends Component {
  state = {
    username: "Abubakr",
    age: 38,
    salary: 16000,
  };
  sayHello() {
    return "hello";
  }

  render() {
    return (
      <div>
        <h1 className="bg-danger w-25 text-white text-center">Home</h1>
        <h2>
          {this.sayHello()} {this.state.username} my age is {this.state.age} and
          my salary is {this.state.salary}{" "}
        </h2>
      </div>
    );
  }
}

export default Home;
