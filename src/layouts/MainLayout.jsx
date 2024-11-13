// import React from 'react'

import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { ThemeProvider } from "../context/ThemeContext";

export default function MainLayout() {
  return (
    <div>
    <ThemeProvider>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </ThemeProvider>
    </div>
  )
}
