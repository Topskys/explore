var li = document.querySelectorAll("li");
var lis = []; //lis["li1","li2","li3","li4","li5","li6"];

for (var obj of li) {
	lis.push(obj.classList[0]);
	//console.log(obj);
}

var index = 0; //默认第一个按钮编程绿色
var span = document.querySelectorAll("span"); //所有按钮
function setNvaListBColor() {
	for (var i = 0, len = span.length; i < len; i++) {
		span[i].style.background = "#ccc";
	}
	span[index].style.background = "#45c17c";
}

setNvaListBColor();

function nextPic() {
	lis.unshift(lis[5]); //把数组最后一个名字赋值并插入到第一个位置
	lis.pop(); //删除最后一个值
	for (var i = 0, len = li.length; i < len; i++) {
		li[i].setAttribute("class", lis[i]);
	}
	index = index + 1;
	if (index > 5) {
		index = 0;
	}
	setNvaListBColor();
}

function prePic() {
	lis.push(lis[0]); //把第一个值放到数组的最后一个位置
	lis.shift(); //删除第一个值
	for (var i = 0, len = li.length; i < len; i++) {
		li[i].setAttribute("class", lis[i]);
	}
	index -= 1;
	if (index < 0) {
		index = 5;
	}
	setNvaListBColor();
}

var li1 = document.querySelector(".li1");
var li3 = document.querySelector(".li3");
/* li1.onclick=function(){
	prePic();
}
li3.onclick=function(){//或者直接=nextPic();
	nextPic();
};//事件绑定、监听 */

var imgList = document.querySelector(".imgList");

imgList.addEventListener("click", function(ev) {
	if (ev.target.parentNode.getAttribute("class") === "li3") {
		nextPic();
	} else {
		if (ev.target.parentNode.getAttribute("class") === "li1") {
			prePic();
		}
	}
})

setInterval(nextPic, 3000);
