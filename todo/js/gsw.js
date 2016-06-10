var dl = $('.categories')[0];
var leftList = $('.left-list')[0];
var midList = $('.mid-list')[0];
var rightList = $('.right-list')[0];

// 设定初始高度
curHeight(leftList,42);
curHeight(midList,42);
// 设置窗口变化时，高度同步变化
window.onresize = function () {
	curHeight(leftList,42);
	curHeight(midList,42);
}
function curHeight (elem,reduceHeight) {
	 elem.style.height = window.innerHeight - reduceHeight + 'px';
}

var add1 = $('.add-list')[0];
var add2 = $('.add-list')[1];
add1.onclick = function () {
	// 新增分类-----------------------------------目录
	mkdir('目录 : ', dl , 'dt' , '目录 : ');
	// overShowDel(dl);
	// 新增分类------------------------------------文件
	// var childs = dl.children; 这里缓存之后会导致子节点不能实时更新，会增加遍历次数
	// 在增加目录节点之后第一次遍历
	for (var i = 0; i < dl.children.length; i++) {
		// 增加目录下的文件
		if (dl.children[i].nodeName.toLowerCase() === 'dt') {

			dl.children[i].onclick = function (e) {
			// console.log(e.target);
			var that = this;
			// 使得dt 和 dd 建立联系，届时一起删除
			mkfile('文件 : ', dl , that ,'文件 : ');//同时也新增了task div 	


			// mid-list区域内容====================================================
			clickShowDiv(dl,'dd',midList,2);
	
			
				add2.onclick = function () {	
					// 获取对应的task-----------------------  div
					// var getDiv(midList , 2) = getDiv(midList , 2);
					// var getDiv(rightList , 0) = getDiv(rightList , 0);
					
					if(getDiv(midList , 2)){
						// midList 增加描述内容
						// mid 中部的时间标题
						var midDate = mkMidDate(getDiv(midList , 2));
						var result = mkMidCon(getDiv(midList , 2));
						midDate.className = result;
						
						// rightLis 增加标题、日期、富文本编辑区,还有一个包裹div
						// 增加右边的包裹div
						var rightWrap = addDiv(getDiv(rightList , 0),result);
						showDiv(getDiv(rightList , 0),result,0);
						mktit(rightWrap,result);
						// 获取时间
						var date = addDate(rightWrap);
						// 获取富文本编辑区
						var fwd = mkfwd(rightWrap);
						clickShowDiv(getDiv(midList , 2),'p',getDiv(rightList , 0),0);
						curHeight(fwd,126);
						window.onresize = function () {
							curHeight(fwd,126);
						}
						// 将右边时间赋值给中间的时间标题
						var jq = jQuery.noConflict();
						jq(".form_datetime")
							.datetimepicker({format: 'yyyy-mm-dd hh:ii'})
							.on('changeDate',function (e) {
								var $that = jq(this);
								console.log($that.val());
								jq(midDate).html($that.val());
							})
					}			
				}
			// 阻止冒泡到目录层产生多余div
			e.stopPropagation();
			}//dt.onclick -------- end
		}	
	}// add1.onclick = null;	
}
// $('.add-list')[0].onclick ----------end



	


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
function mkfile(title,parentNode,target,describe) {
	var result = prompt(title);
	if (result !== ''&& result !== null) {
		addDd(result,parentNode,target,describe)
		// 同时新建一个对应的任务栏,dd 的 result className 本来就是唯一的
		// 新建div的同时，设置其display为block, 其余div display:none
		addDiv(midList,result);
		showDiv(midList,result,2);
		// 同时新建一个对应的right div , 写字栏
		addDiv(rightList,result);
		showDiv(rightList,result,0);
		// 增加删除功能
		removeDs(parentNode,result);
	}
}
// 创建dt
function addDt (result,parentNode,describe) {
	// 创建目录dt
	var dt = document.createElement('dt');
	// 目录名
	var span = document.createElement('span');
	// 删除键
	var i = document.createElement('i');
	var ds = parentNode.children;
	// 遍历子节点，看是否有重复标记
	for (var k = 0; k < ds.length; k++) {
		if(ds[k].className === result){
			return;
		}
	}
	dt.innerHTML = result;
	parentNode.appendChild(dt);
		// 标记，附上唯一classname
		dt.className = result;
		span.innerHTML = describe;
		dt.insertBefore(span,dt.firstChild);
		// 暂时性的删除设置
		i.className = 'glyphicon glyphicon-plus del';
		dt.appendChild(i);	
};
// 创建dd
function addDd (result,parentNode,target,describe) {
	// 创建文件dd
	var dd = document.createElement('dd');
	// 目录名
	var span = document.createElement('span');
	// 删除键
	var i = document.createElement('i');
	var ds = parentNode.children;
	for (var k = 0; k < ds.length; k++) {
		if(ds[k].className === result){
			return;
		}
	}
	dd.innerHTML = result;
	insertAfter(dd,target);

		// 标记
		dd.className = result;
		span.innerHTML = describe;
		dd.insertBefore(span,dd.firstChild);
		// 暂时性的删除设置
		i.className = 'glyphicon glyphicon-plus del';
		dd.appendChild(i);
	
};
// 移除目录或者文件
function removeDs (parentNode,result) {
	
	// 删除功能
	var dels = $('.del');
	for (var i = 0; i < dels.length; i++) {
		
		dels[i].onclick = function (e) {
			var that = this;
			// ==============================================================
			// =============================目录层删除逻辑=====================
			// 将leftList中的dt , dd 联系起来
			var _dl = [], 
					dt = [], 
					dd = [];
			for (var j = 0; j < parentNode.children.length; j++) {
				_dl.push(parentNode.children[j]);
				if(parentNode.children[j].nodeName.toLowerCase() === 'dt'){
					dt.push(parentNode.children[j]);
				}else{
					dd.push(parentNode.children[j]);
				}
			}
			
			// remove  dt  移除目录节点
			if(that.parentNode.nodeName.toLowerCase() === 'dt'){

				var dl_index = _dl.indexOf(that.parentNode);
				var dt_index = dt.indexOf(that.parentNode);
				// 当仅有一个目录或者目录是最后一个时，移除目录及其文件
				if(dt_index === (dt.length - 1)){
					// 子节点移除次数判定
					for (var k = dl_index - parentNode.children.length; k < parentNode.children.length - dl_index; k++) {
						if (k <= parentNode.children.length - dl_index ) {
							// 每次移除节点的index位置始终是移除X 的位置
							parentNode.removeChild(parentNode.children[dl_index]); 
						}
					}
				}else{
					// 在dl 中的 index
					var next_dt_index = _dl.indexOf(dt[dt_index + 1]);
					for (var f = dl_index ; f < next_dt_index; f++) {
						if (f <= next_dt_index) {
							// 每次移除节点的index位置始终是移除X 的位置
							parentNode.removeChild(parentNode.children[dl_index]);
						}
					}
				}
				// parentNode.removeChild(that.parentNode);
			// 当点击的是dd  文件时，	仅删除当前dd即可	
			}else{
				parentNode.removeChild(that.parentNode)
			}
		// ===================================================================
		// midlist && rightlist 同时删除
			for (var m = 0; m < midList.children.length; m++) {
				if (midList.children[m].className === result) {
					midList.removeChild(midList.children[m])
				}
			}

			for (var n = 0; n < rightList.children.length; n++) {
				if (rightList.children[n].className === result) {
					rightList.removeChild(rightList.children[n])
				}
			}
			e.stopPropagation();
		}
	}
};

// 对midList && rightList 增加对应的div
function addDiv (targetNode,result) {
	var div = document.createElement('div');
	div.className = result;
	targetNode.appendChild(div);
	// toggleFwb(ID)			
	return div;
}

function showDiv(parentNode,result,start) {
	for (var i = start; i < parentNode.children.length; i++) {
		if(parentNode.children[i].className === result){
			parentNode.children[i].style.display = 'block';
		}else{
			parentNode.children[i].style.display = 'none';
		}
	}
}

// 找到文件对应的div
function clickShowDiv(targetNode,target,parentNode,start) {
	for (var i = 0; i < targetNode.children.length; i++) {
		if (targetNode.children[i].nodeName.toLowerCase() === target){
			targetNode.children[i].onclick = function (e) {
				// 根据dd的className获取task下的div
				var id = this.className;
	
				showDiv(parentNode,id,start);
				
				e.stopPropagation();

			}
		}
	}
}



function getDiv(parentNode,start) {
	for (var i = start; i < parentNode.children.length; i++) {
		if(parentNode.children[i].style.display === 'block'){
			return parentNode.children[i];
		}
	}
}

// =======================================add2 click 点击
// 新增任务弹框逻辑及内容
function mkMidCon(parentNode) {
	var p = document.createElement('p');
	var result = prompt();
	// 限制相同输出
	for (var i = 0; i < parentNode.children.length ;i++) {
		if(parentNode.children[i].nodeName.toLowerCase() === 'p' && parentNode.children[i].innerHTML === result){
			return;
		}
	}
	if (result !== ''&& result !== null) {
		p.className = result;
		p.innerHTML = result;
		parentNode.appendChild(p);
		return result;
	}
}
function mkMidDate(parentNode) {
	var h3 = document.createElement('h3');
	parentNode.appendChild(h3);
	return h3;
}

// 新增富文本选区---------rightList div
// 已经采用addDiv() className === 'fwb' + result
// 新增富文本选区---------标题
function mktit(parentNode,result) {
	var p = document.createElement('p');
	p.innerHTML = result;
	parentNode.appendChild(p);
}
// 新增富文本选区---------富文本
function mkfwd(parentNode) {
	var div = document.createElement('div');
	div.className = 'contentEditable';
	div.contentEditable = true;
	parentNode.appendChild(div);
	return div;
}

// 任务日期
function addDate(parentNode){
	var label = document.createElement('label');
	var input = document.createElement('input');
	input.size = '16';
	input.type = 'text';
	input.className = 'form_datetime';
	label.innerHTML = '任务日期 : ';
	parentNode.appendChild(label);
	parentNode.appendChild(input);
	return input;
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
