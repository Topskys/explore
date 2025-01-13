import React from 'react'
import { HashRouter, Route,Switch } from "react-router-dom"
import Login from '../views/login/Login'
import SandBox from '../views/sandbox/SandBox'

export default function IndexRouter() {
  return (
    <HashRouter>
      {/* <Routes> */}
      <Switch>
        {/* 此写法子组件会直接拿到props */}
        <Route path="/login" component={Login} />
        {/* 此写法不会直接拿到props */}
        <Route path="/" render={() => localStorage.getItem("token") ? <Login /> : <SandBox />} />
      </Switch>
      {/* </Routes> */}
    </HashRouter>
  )
}


