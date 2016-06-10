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
// start=========================
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
	// 创建目录
	mkdir('目录分类 : ' , $dl);

	// 在目录分类和文件中遍历，寻找目录，点击产生文件
	$add2.on('click',function (e) {
		// 让对应的dd文件，mid div , right div 显示
		
		mkfile('文件名称' , $(this));


		


	})



})



// 新建目录
function mkdir(title,parentNode,childNode) {
	// result 为promt输入框中的输入值
	var result = prompt(title);
	if (result !== ''&& result !== null) {
		// 创建dt 
			addDl(result,parentNode);
		// 移除dt	
		removeDs();
	}
}
// 创建dd
function mkfile(title,parentNode) {
	// result 为promt输入框中的输入值
	var result = prompt(title);
	if (result !== ''&& result !== null) {
		// 创建dd 
			addDd(result,parentNode);
		// 创建task div
		addDiv(result,$midList);
		removeDs();
	}
}
// 创建dt
function addDt (result,parentNode) {
	// 避免重复
	if(parentNode.children().hasClass(result)) return;
	// 创建目录dt
	var $dt = $("<dt></dt>").text(result).addClass(result);
	// 删除键
	var $span = $("<span></span>").text('X').addClass('del');

	$dt.appendTo(parentNode);
	$span.appendTo($dt);
	
};
// 创建dd
function addDd(result,parentNode) {
	if(parentNode.children().hasClass(result)) return;
	var $dd = $("<dd></dd>").text(result).addClass(result);
	var $span = $("<span></span>").text('X').addClass('del');

	$dd.appendTo(parentNode);
	$span.appendTo($dd);
}
// 创建task  div
function addDiv(result,parentNode) {
	if(parentNode.children().hasClass(result)) return;
	var $div = $("<div></div>").addClass(result);
	$div.appendTo(parentNode);
}
// 移除目录或者文件
function removeDs (result) {
	// 删除功能
	var $dels = $('.del');
	$dels.on('click',function (e) {
		e.stopPropagation();
		var claName = e.target.parentNode.className;
		$('.'+claName).remove();
	})
	
};

// 点击dd，找到对应task div
function getTask(id) {
	if($midList.children().hasClass(id)){
		$midList.children(id).css("display","block");
	}else{
		$midList.children().slice(2,$(this).children().length-1).css("display","none");
	}
}











