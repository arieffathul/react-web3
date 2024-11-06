// import React from 'react'

import { Outlet } from "react-router-dom";
import Navbar from "../component/navbar";
import Footer from "../component/Footer";

export default function MainLayout() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
