import { useState } from 'react'

import './App.css'

import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import {Route, Routes} from "react-router-dom";
import NoMatch from "./pages/NoMatch.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Dashboard from "./pages/Dashboard.jsx";

function App() {

  return (
    <>
        <Header />

        <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/sign-in" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="*" element={<NoMatch />}></Route>
        </Routes>

        <Footer />
    </>
  )
}

export default App
