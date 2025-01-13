# test3000

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## note


### react
1、类写法
2、函数写法
   不支持状态state、生命周期、支持属性，但react hooks能勾住函数写法的状态
#### setup() === vue3老写法或者vue2写法生命周期中beforeCreate，created
```
import {reactive,ref,toRefs} from 'vue'
setup(){ //vue3 新写法
    console.log("自动执行setup")
    // 定义状态
    const state=reactive({
        myName:'Topsky',
        myAge:200,
    })

    const myTxtRef=ref()

    const handleClick=()=>{
        state.myAge=1090
        console.log(myTxtRef.value)
    }
    
    return{
       //state,
       ...toRefs(state),//reactive转化ref
       handleClick,
       myTxtRef,
    }
}
```
#### 格式化Alt +Shift+F

#### vue3 composition API
起初定義的是Vue-Fun傳統-API，後更名為Vue-Composition-API(no this)

#### hooks