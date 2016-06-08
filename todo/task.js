// jq 插件  使得元素高度随视口高度变化而变化
$.fn.fixHeight = function (options) {
	var ops = $.extend({},$.fn.fixHeight.defaults,options);
	this.css('height',function () {
		return window.innerHeight - ops.reduceHeight;
	});
	
	return this;
}

$.fn.fixHeight = function (options) {
	var ops = $.extend({},$.fn.fixHeight.defaults,options);
	this.css('height', window.innerHeight - ops.reduceHeight);
	return this;
}
$.fn.fixHeight.defaults = {
	reduceHeight : 40 
}

var $leftList = $('.left-list')
var $midList = $('.mid-list')

$leftList.fixHeight();
$midList.fixHeight();
$(window).resize(function () {
	$leftList.fixHeight();
	$midList.fixHeight();
})

var $add1 = $('.add-list a').eq(0);
var $add2 = $('.add-list a').eq(1);
var $dl = $('.categories');
$add1.on('click',function () {
	mkdir('目录分类 : ',$dl);

})

// 新建目录
function mkdir(title,parentNode,childNode) {
	// result 为promt输入框中的输入值
	var result = prompt(title);
	console.log(typeof result)
	if (result !== ''&& result !== null) {
		// 创建dt 
		
			addDt(result,parentNode);
		

		// removeDs(parentNode);
	}
}

// 创建dt
function addDt (result,parentNode) {
	// 避免重复
	if(parentNode.children().hasClass(result)) return;
	// 创建目录dt
	var $dt = $("<dt></dt>");
	// 删除键
	var $span = $("<span></span>");
	$dt.text(result).addClass(result);

	$span.text('x').addClass('del');
	$dt.appendTo(parentNode);
	$span.appendTo($dt);
	
};

// 移除目录或者文件
function removeDs (parentNode,title) {
	// 删除功能
	var $dels = $('.del');
	$dels.on('click',function () {
		
	})
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













