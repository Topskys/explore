import './App.css';

// import {useEffect} from 'react';
// import axios from 'axios';// cnpm i  axios --save


import Router from './router'

function App() {

    // useEffect(()=>{
    //   // 反向代理，解决跨越请求，在setupProxy.js配置
    //   axios.get("/ajax/api/mmdb/movie/v3/list/hot.json?ct=%E7%A6%8F%E5%B7%9E&ci=44&channelId=4").then(res => {
    //     console.log(res.data);
    //   })
    // },[])//[] 表示没有依赖

  return (
    // <div className="App">
      <Router></Router>
    // </div>
  );
}

export default App;
