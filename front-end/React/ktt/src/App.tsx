import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
// 导入路由配置
import RouterView from './router'


function App() {
  return (
    <Router>
      <RouterView></RouterView>
    </Router>
  )
}

export default App;
