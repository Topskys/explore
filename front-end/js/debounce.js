//防抖
//延迟打印节点元素的value
function Debounce(callback, delay) {
    let timer = null;
    return function run(e) {
        if (timer !== null) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            callback(e)
        }, delay)
    }
}

function printValue(e) {
    console.log(e.target.value)
}

//input標籤
let debounce = document.querySelector("#debounce")

//html加载完毕后运行！
window.onload = () => {
    console.log("html加载完毕！");
    //根据id绑定输入事件
    debounce.oninput = Debounce(printValue, 500)
}
