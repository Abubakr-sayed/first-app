import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const RootComp = () => {
  return<>
  <Navbar />
  <Outlet/>
  {/* component change */}
  </>
  


  
}

export default RootComp;
