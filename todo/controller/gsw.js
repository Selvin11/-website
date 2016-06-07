

var todo = Todo.createNew();
var dl = $('.categories')[0];
var midList = $('.mid-list')[0];
var rightList = $('.right-list')[0];
// 设定初始高度
todo.curHeight($('.left-list')[0]);
todo.curHeight($('.mid-list')[0]);
// 设置窗口变化时，高度同步变化
window.onresize = function () {
	todo.curHeight($('.left-list')[0]);
	todo.curHeight($('.mid-list')[0]);
}
var add1 = $('.add-list')[0];
var add2 = $('.add-list')[1];
add1.onclick = function () {
	// 新增分类-----------------------------------目录
	mkdir('目录 : ', dl , 'dt' , '目录 : ');
	// 新增分类------------------------------------文件
	// var childs = dl.children; 这里缓存之后会导致子节点不能实时更新，会增加遍历次数
	// 在增加目录节点之后第一次遍历
	for (var i = 0; i < dl.children.length; i++) {
		// 增加目录下的文件
		if (dl.children[i].nodeName.toLowerCase() === 'dt') {
			dl.children[i].onclick = function (e) {
			// console.log(e.target);
			var that = this;
			mkfile(that,'文件 : ',dl,that,'文件 : ');//同时也新增了task div 	

			// mid-list区域内容
			// 获取对应的task-----------------------  div
			// dd 点击增加task div 
			getTask(dl.children);
							

			// 阻止冒泡到目录层产生多余div
			e.stopPropagation();
			}//dt.onclick -------- end
		}	
	}// add1.onclick = null;	
}
// $('.add-list')[0].onclick ----------end





// 找到文件对应的div
function getTask(parentNode) {
	for (var i = 0; i < parentNode.length; i++) {
		if (parentNode[i].nodeName.toLowerCase() === 'dd'){
			parentNode[i].onclick = function (e) {
				// 根据dd的className获取task下的div
				var id = this.className;
	
				toggleTask(midList.children, id, 2);
				
				e.stopPropagation();

			}
		}
	}
}


// 任务栏中的切换
function toggleTask(targetNode,id,num,func) {
	for (var i = num; i < targetNode.length; i++) {
		if (targetNode[i].className === 'task' + id ) {
			targetNode[i].style.display = 'block';
			var task = targetNode[i];
			console.log(task);					
			// left-list 向 mid-list 传递成功
			// 在点击增加任务的同时，将rightList内容生成
			add2.onclick = function () {
				// 在对应的task栏中生成对应的内容
				// 获取add2点击时的内容
				var result = mkTaskCon(task);
				console.log(result);

				// rightList --------------------------------------- div
				// 在创建之初，使其能够切换显示==================
				toggleFwb(rightList,result);
				var parent = addDiv (task,rightList,result,'fwb');
				
				// 添加mid-list的标题和日期
				mktit(parent,result);
				addDate(parent);
				mkfwd(parent);
				
				// 给task栏下的p元素增加点击切换====================
				for (var i = 0; i < task.children.length; i++) {
					task.children[i].onclick = function () {
						var that = this;
						toggleFwb(rightList,that.innerHTML)
					}
				}
			}

		}else{
			targetNode[i].style.display = 'none';
		}
	}
}

// rightList  切换显示函数
function toggleFwb(targetNode,result) {
	for (var i = 0; i < targetNode.children.length; i++) {
		if (targetNode.children[i].className === 'fwb' + result) {
			targetNode.children[i].style.display = 'block';
		}else{
			targetNode.children[i].style.display = 'none';
		}
	}
}



// 新增富文本选区---------rightList div
// 已经采用addDiv() className === 'fwb' + result
// 新增富文本选区---------标题
function mktit(parentNode,result) {
	var p = document.createElement('p');
	p.innerHTML = result;
	for (var i = 0; i < parentNode.children.length ;i++) {
		if(parentNode.children[i].nodeName.toLowerCase() === 'p' && parentNode.children[i].innerHTML === result){
			return;
		}
	}
	parentNode.appendChild(p);
}
// 新增富文本选区---------富文本
function mkfwd(parentNode) {
	var div = document.createElement('div');
	div.contentEditable = true;
	parentNode.appendChild(div);
}
// 新增任务弹框逻辑及内容
function mkTaskCon(parentNode) {
	var p = document.createElement('p');
	var result = prompt();
	// 限制相同输出
	for (var i = 0; i < parentNode.children.length ;i++) {
		if(parentNode.children[i].nodeName.toLowerCase() === 'p' && parentNode.children[i].innerHTML === result){
			return;
		}
	}
	if (result !== ''&& result !== null) {
		p.innerHTML = result;
		parentNode.appendChild(p);
		return result;
	}
}
// 任务日期
function addDate(parentNode){
	var now = new Date();
	var time = now.getFullYear() + ' 年 ' + (now.getMonth()+1) + ' 月 ' + now.getDate() + '日';
	for (var i = 0; i < parentNode.children.length ;i++) {
		if(parentNode.children[i].nodeName.toLowerCase() === 'h3' && parentNode.children[i].innerHTML === time){
			return;
		}
	}
	var h3 = document.createElement('h3');
	var span = document.createElement('span');
	span.innerHTML = '任务日期 : ';
	// h3.innerHTML = time;
	h3.appendChild(span);
	parentNode.appendChild(h3);
}












	


// 新建目录
function mkdir(title,parentNode,childNode,describe) {
	// result 为promt输入框中的输入值
	var result = prompt(title);
	if (result !== ''&& result !== null) {
		addDt(result,parentNode,describe);
		removeDs(parentNode);
	}
}
// 新建文件
function mkfile(that,title,parentNode,target,describe) {
	var result = prompt(title);
	if (result !== ''&& result !== null) {
		addDd(result,parentNode,target,describe)
		
		// 同时新建一个对应的任务栏
		// 对目录层同名进行查重处理
		if (that.className !== result) {
			addDiv(parentNode,midList,result,'task');
		}
		//result === ID  className
		// 增加删除功能
		removeDs(parentNode,result);
	}
}
// 创建dt
function addDt (title,parentNode,describe) {
	// 创建目录dt
	var dt = document.createElement('dt');
	// 目录名
	var span1 = document.createElement('span');
	// 删除键
	var span2 = document.createElement('span');
	var ds = parentNode.children;
	// 遍历子节点，看是否有重复标记
	for (var k = 0; k < ds.length; k++) {
		if(ds[k].className === title){
			return;
		}
	}
	dt.innerHTML = title;
	parentNode.appendChild(dt);
	for (var i = 0; i < ds.length; i++) {
		// 标记，附上唯一classname
		dt.className = title;
		span1.innerHTML = describe;
		dt.insertBefore(span1,dt.firstChild);
		// 暂时性的删除设置
		span2.innerHTML = ' X ';
		span2.className = 'del';
		dt.appendChild(span2);
	}
	
};
// 创建dd
function addDd (title,parentNode,target,describe) {
	// 创建文件dd
	var dd = document.createElement('dd');
	// 目录名
	var span1 = document.createElement('span');
	// 删除键
	var span2 = document.createElement('span');
	var ds = parentNode.children;
	for (var k = 0; k < ds.length; k++) {
		if(ds[k].className === title){
			return;
		}
	}
	dd.innerHTML = title;
	insertAfter(dd,target);
	for (var i = 0; i < ds.length; i++) {
		// 标记
		dd.className = title;
		span1.innerHTML = describe;
		dd.insertBefore(span1,dd.firstChild);
		// 暂时性的删除设置
		span2.innerHTML = ' X ';
		span2.className = 'del';
		dd.appendChild(span2);
	}
	
};
// 移除目录或者文件
function removeDs (parentNode,title) {
	// 删除功能
	var dels = $('.del');
	
	var arr = [];
	// 浅拷贝数组
	for (var j = 0; j < dels.length; j++) {
		arr[j] = dels[j];
		arr[j].onclick = function (e) {
			var that = this;
			var child = parentNode.childNodes;
			// 使用数组的indexOf方法，移除正确对应的节点
			parentNode.removeChild(child[arr.indexOf(this)]);
			for (var i = 0; i < midList.children.length; i++) {
				if (midList.children[i].className === 'task' + title) {
					
					// 删除富文本区  rightList
					for (var j = 0; j < midList.children[i].children.length; j++) {
						var target = $('.fwb' + midList.children[i].children[j].innerHTML)[0];
						rightList.removeChild(target);
					}

					// 删除midlist
					midList.removeChild(midList.children[i]);
					
				}
			}
			// var target = $('.task' + that.parentNode.className)[0];
			// // console.log(target)	
			// if (target.children.length !== 0) {
			// 	for (var k = 0; k < target.children.length; k++) {
			// 		if (target.children[k] !== 0) {
			// 			var child = $('.fwb' + target.children[k].innerHTML)[0];
			// 			rightList.removeChild(child);
			// 		}
			// 	}
			// }
			
			// 防止冒泡导致增加目录或者文件
			e.stopPropagation();
		}
	}
};


function addDiv (parentNode,targetNode,ID,claName) {
	// midlist 下的子元素查重
	var child =targetNode.children;
		for (var i = 0; i < child.length; i++) {
			if(child[i].className === (claName + ID)){
				return;
			}
		}
	// 均符合才进行创建div
	var task = document.createElement('div');
	task.className = claName + ID;
	targetNode.appendChild(task);
				
	// toggleFwb(ID)			
	return task;
}














function insertAfter(newElement,target) {
	var parent = target.parentNode;
	if (parent.lastChild === target) {
		parent.appendChild(newElement);
	}else{
		parent.insertBefore(newElement,target.nextSibling);
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
