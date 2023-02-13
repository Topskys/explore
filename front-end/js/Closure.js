// js闭包
// 简单讲，闭包就是指有权访问另一个函数作用域中的变量的函数。
// 它由两部分构成：函数，以及创建该函数的环境。环境由闭包创建时在作用域中的任何局部变量组成。
function counter() {
	let num = 0

	function add() {
		num++
		console.log("+:", num)
				}

	function reduce() {
		num--
		console.log("-:", num)
	}
	// 返回couter函数中的嵌套函数
	return {
		add: add,
		reduce: reduce
	}
}

// html加载完毕后运行！
window.onload = () => {
	console.log("html加载完毕！");
	// 把counter函数实例化到变量example里，可确保接下来的操作都是基于该exmample变量
	let example = counter()
	example.add()
	example.add()
	example.reduce()
	example.reduce()
}
// 执行结果
// html加载完毕！
// +: 1
// +: 2
// -: 1
// -: 0
