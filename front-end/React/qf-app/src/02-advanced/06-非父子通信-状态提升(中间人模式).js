/*
 * @Author: Topskys
 * @Date: 2022-09-07 15:34:00
 * @LastEditTime: 2022-09-07 21:06:21
 * 中间人模式
 * 核心思想：兄弟组件A，B，通信：A(send data)--->中间人（父）--->B(get data)
 */
import React, { Component } from 'react'

import axios from 'axios'

import './css/02-communication.css'

/**
 * 受控组件，电影列表
 */
class FilmItem extends Component {
    render() {
        let {name,poster,grade,synopsis}=this.props
        return (
        <div  style = {
            {
                float: 'left',
                width: '200px'
            }
        }
        onClick = {
            () => {
                // 通知父组件执行onEvent()
                this.props.onEvent(synopsis)
            }
        } >
            <img src={poster}/>
            <h4>{name}</h4>
            <p>观众平分：{grade?grade:0}</p>
        </div>
        )
    }
}


/**
 * 受控组件，显示电影详情
 */
class FilmDetail extends Component{
    render() {
        return (
            <div className="filmDetail">
                {this.props.info}
            </div>
        )
    }
}




export default class App extends Component {

    constructor(){
        super()

        this.state={
            filmList:[],
            info:'',
        }

        axios({
            url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=3775329',
            method: 'GET',
                headers: {
                    // , "bc": "440300"
                    'X-Client-Info': '{"a": "3000","ch": "1002","v": "5.2.1","e": "16623692341635755474550785"}',
                    'X-Host': 'mall.film-ticket.film.list'
                }
        }).then(res => {
            this.setState({
                filmList: res.data.data.films
            })
        })
    }

    render() {
        return (
        <div>
            {this.state.filmList.map(item =>
            <FilmItem key={item.filmId} {...item} 
            onEvent={(value) =>{this.setState({info:value})}}>
            </FilmItem>)}
            
            <FilmDetail info={this.state.info}></FilmDetail>
        </div>
        )
    }
}
