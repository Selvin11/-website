

var todo = Todo.createNew();
var ul = $('.categories')[0];
// 设定初始高度
todo.curHeight($('.left-list')[0]);
todo.curHeight($('.task-list')[0]);
// 设置窗口变化时，高度同步变化
window.onresize = function () {
	todo.curHeight($('.left-list')[0]);
	todo.curHeight($('.task-list')[0]);
}

// 新增分类基本功能完成
$('.add-list')[0].onclick = function (e) {
	var result1 = prompt('your mission : ');
	// prompt 弹框的返回值限定
	if (result1 !== ''&& result1 !== null) {
		todo.addList(result1,ul,'目录 : ');
		todo.removeList(ul,'li');
	}
	var childs = ul.children;
	for (var i = 0; i < childs.length; i++) {
		// 增加目录下的文件
		childs[i].onclick = function (e) {
			console.log(e.target)
			var that = this;
			var newUl = document.createElement('ul');
			insertAfter(newUl,that);
			var result2 = prompt('文件名 : ');
			if (result2 !== '' && result2 !== null) {
				todo.addList(result2,newUl,'文件 : ')
				todo.removeList(ul,'ul');

			}
			// 点击文件生成task
			for (var k = 0; k < childs.length; k++) {
				if (childs[k].nodeName.toLowerCase() === 'ul') {
					childs[k].onclick = function (e) {
						var that = this;
						todo.addDiv(childs.length);
						
					}
				}
			}
			
			e.stopPropagation();
		}
	}
}
		// 在点击新增分类之后，分类下的子节点才会刷新





	


function helper(x){
	return function () {
		return x;
	}
}







function insertAfter(newElement,target) {
	var parent = target.parentNode;
	if (parent.lastChild === target) {
		parent.appendChild(newElement);
	}else{
		parent.insertBefore(newElement,target.nextSibling);
	}
}



function test() {
	var childs = ul.children;
	for (var i = 0; i < childs.length; i++){
		if (childs[i]) {}
	}
}










function $(name) {
	if (name.indexOf('#') > -1) {
		return document.getElementById(name);
	}else if(name.indexOf('.') > -1){
		var result = name.slice(1);
		return document.getElementsByClassName(result);
	}
}; 










// 类似于prototype 封装函数的精髓  JavaScript类库本质的探索
// document.prototype 指向为undefined document.constructor 指向function HTMLElement (){}
// 说明
HTMLElement.prototype.addClass = function (addName){
	if (this.className == '') {
		this.className = addName;
	}else{
		var currentName = this.className;
		var arr = currentName.split(' ');
		for(var i in arr){
			if (arr.hasOwnProperty(i)) {
				arr[i] == addName ? this.className = currentName : this.className = currentName + ' ' + addName;
			}
		}
	}
	// return this.className;
}
HTMLElement.prototype.removeClass = function (removeName) {
	var arr = this.className.split(' ');
	for(var i in arr){
		if (arr.hasOwnProperty(i)){
			arr[i] == removeName ? arr.splice(i,1) : arr[i];	
		}
	}
	this.className = arr.join(' ');
}



// node 为搜索节点的起始，一般为要查询的类元素的父级元素
function getByClassName(claName,node) {
	if (typeof node.getElementsByClassName == 'function') {
		return node.getElementsByClassName(claName);
	}else{
		var arr =[],
		elems = node.getElementsByTagName('*');
		for (var i = 0; i < elems.length; i++) {
			elems[i].className == claName ? arr[i]= elems[i]: arr[i];
		}
	return arr;
	}
}
