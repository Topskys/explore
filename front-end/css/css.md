<!--
 * @Author: Topskys
 * @Date: 2022-10-31 20:04:37
 * @LastEditTime: 2022-10-31 20:14:18
-->

## 隐藏文本多行溢出为...
```css
.multi-line{
    /* width:200px;
    height:200px; */
    overflow:hidden;
    display:-webkit-box;
    -webkit-line-clamp:5;
    -webkit-box-orient:vertical;
}
```



## html平滑滚动
```css
html{
    scroll-behavior: smooth;
}
```



## minmax()
```css
.container{
    display:grid;
    grid-template-columns: repeat(auto-fill, minmax(250px,1fr));
}
```