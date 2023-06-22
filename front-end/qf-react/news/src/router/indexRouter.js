import React from 'react'
import { HashRouter, Routes, Route } from "react-router-dom"
import Login from '../views/login/Login'
import SandBox from '../views/sandbox/SandBox'

export default function IndexRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/login" component={Login} />
        <Route path="/" render={() => localStorage.getItem("token") ? <Login /> : <SandBox />} />
      </Routes>
    </HashRouter>
  )
}


