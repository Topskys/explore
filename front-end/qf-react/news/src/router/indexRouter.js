import React from 'react'
import { HashRouter, Route,Switch } from "react-router-dom"
import Login from '../views/login/Login'
import SandBox from '../views/sandbox/SandBox'

export default function IndexRouter() {
  return (
    <HashRouter>
      {/* <Routes> */}
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" render={() => localStorage.getItem("token") ? <Login /> : <SandBox />} />
      </Switch>
      {/* </Routes> */}
    </HashRouter>
  )
}


