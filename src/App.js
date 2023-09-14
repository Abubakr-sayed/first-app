import { Component } from "react";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contacts from "./Components/Contacts/Contacts";
import Profile from "./Components/Profile/Profile";
import Parent from "./Components/Parent/parent";





export default class App extends Component {
  state = {};

  render() {
    return (
      <div>
        {/* <h2>App Component</h2> */}
        <Home />
        <About />
        <Contacts />
        <Profile />
        <Parent />
      </div>
    );
  }
}
