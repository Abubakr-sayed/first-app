import { Component } from "react";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contacts from "./Components/Contacts/Contacts";
import Profile from "./Components/Profile/Profile";
import Parent from "./Components/Parent/parent";
import RootComp from "./Components/RootComp/RootComp";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Notfound from "./Components/Notfound/Notfound";



let myRouters =createBrowserRouter([
  {
    path : "" , 
    element :<RootComp/>,
    children :[
  {index :true, element :<Home />},
  {path:"about" , element :<About />},
  {path:"contacts" , element :<Contacts />},
  {path:"Profile" , element :<Profile />},
  {path:"Parent" , element :<Parent />},
  {path:"*" , element :<Notfound />},
    ],
  },
]);


export default class App extends Component {
  state = {};

  render() {
    return (
      <div>
        {/* <h2>App Component</h2> */}
        {/* <Home />
        <About />
        <Contacts />
        <Profile />
        <Parent /> */}
        <>
        <RouterProvider router={myRouters}></RouterProvider>
        </>
        
      </div>
    );
  }
}
