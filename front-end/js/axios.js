import { Indicator} from 'mint-ui'
import axios from 'axios'

export default{
  $axios( options={} ){
    options.method=options.method||"GET"
    options.data=options.data||{}
    options.params=options.params||{}
    
    Indicator.open("加载中...")
    return axios(options).then(v=>{
      let data=v.data.data
      return new Promise((res,rej)=>{
        if(!v) return rej()
        //结束加载中
        setTimeout(()=>{
          Indicator.close()
        },500)
        res(data)
      })
    })
  }
}
