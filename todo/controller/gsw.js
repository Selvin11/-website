
$('.left-list')[0].style.height = window.innerHeight - 60 + 'px';
$('.task-list')[0].style.height = window.innerHeight - 60 + 'px';

window.onresize = function () {
	$('.left-list')[0].style.height = window.innerHeight - 60 + 'px';
	$('.task-list')[0].style.height = window.innerHeight - 60 + 'px';
}

$('.add-list')[0].onclick = function (e) {
	var result = prompt('your mission : ');
	var ul = $('.categories')[0];
	if (result !== '') {
		var todo = Todo.createNew();
		todo.addList(result,ul);
	}
	e.stopPropagation();
}



















function $(name) {
	if (name.indexOf('#') > -1) {
		return document.getElementById(name);
	}else if(name.indexOf('.') > -1){
		var result = name.slice(1);
		return document.getElementsByClassName(result);
	}
}


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
