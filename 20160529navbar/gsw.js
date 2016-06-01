
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
function getElement(name,node){
	if (name.indexOf('#')> -1) {
		return document.getElementById(name);
	}else if(name.indexOf('.') > -1){
		return node.getByClassName(name,node);
	}else{
		console.log('目前只提供ID和class查找方法')
	}
}


var shopCar = document.getElementById('shopCar');
// 	shopInfo = document.getElementById('shopInfo');
// var car = shopCar.getElementsByTagName('a')[0];
// car.onmouseover = function () {
// 	shopInfo.addClass('overshop');
// 	this.onmouseout = function(){
// 		shopInfo.removeClass('overshop');
// 	}
// }

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
//Boss Object  second Boss : Function ---------JavaScript 内部机制探索,基本类型扩充功能
if (typeof Object.create !== 'function') {
	Object.create = function(o){
		var F = function () {};
		F.prototype = o;
		return new F();
	}
}

Object.prototype.method = function(name,fuc){
	if (!this.prototype[name]) {
		this.prototype[name] = fuc;
	}
	return this;//级联本质，return this 
}
// Function.prototype.method = function(name,fuc){
// 	this.prototype[name] = fuc;
// 	return this;
// }
Number.method('integer',function(){
	return Math[this < 0 ? 'ceil' : 'floor'](this);
})

console.log((-3.3).integer())
// String.method('trim',function () {
	
// })

// var ai = function (elems) {
// 	for (var i = 0; i < elems.length; i++) {
// 		elems[i].id = i;
// 		elems[i].onclick = function (event) {
// 			console.log(this.id + ":" + event.target)
// 		}
// 	}
// };
// var lis = document.getElementsByTagName('li');
// ai(lis);

//柯里化 Curry					
Function.method('curry',function(){
	var args = Array.prototype.slice.apply(arguments),
		that = this;
	return function(){
		return that.apply(null,args.concat(slice.apply(arguments)))
	}
})


// function xh() {
// 	var n = setTimeout(function(){
// 	console.log(n);
// },1000);
// 	setTimeout(xh,1000);
// }
// xh();