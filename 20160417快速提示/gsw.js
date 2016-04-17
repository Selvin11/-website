
// //jQuery中的DOM操作

// var li_text = $('ul li:eq(2)').text();//获取第二个li元素
// //alert(li_text);
// var $para = $('p');
// var p_txt = $para.attr('title');//获取P属性节点
//  // alert(p_txt);


// var $li_1 = $('<li>🍌</li>');
// var $li_2 = $('<li>雪梨</li>');
// $('ul').append($li_1);
// $('ul').append($li_2);
// $li_1.insertAfter($li_2);
// $li_1.click(function(){
// 	$(this).clone().appendTo('ul');
// })

// $('ul').wrap("<b></b>");//wrap()

// $(function(){
// 	//mouse focus make it "" 登录名
// 	$("#address").focus(function(){
// 		var text_value = $(this).val();
// 		//this.defaultValue =="请输入邮箱地址"
// 		if(text_value == "请输入邮箱地址"){
// 			$(this).val("");
// 		}
// 	});
// 	//mouse blur make it show
// 	$("#address").blur(function(){
// 		var text_value = $(this).val();
// 		if(text_value == ""){
// 			$(this).val("请输入邮箱地址");
// 		}
// 	});
// 	//mouse focus make it "" 密码
// 	$("#password").focus(function(){
// 		var text_value = $(this).val();
// 		if(text_value == "请输入邮箱密码"){
// 			$(this).val("");
// 		}
// 	});
// 	//mouse blur make it show
// 	$("#password").blur(function(){
// 		var text_value = $(this).val();
// 		if(text_value == ""){
// 			$(this).val("请输入邮箱密码");
// 		}
// 	});
// })

//快速提示
$(function(){
	var x = 10,
	y = 20;
	$("a.tooltip").mouseover(function(e){
		this.myTitle = this.title;
		this.title = "";
		var tooltip = "<div id='tooltip'>" + this.myTitle + "</div>";
		$(tooltip).appendTo("body");
		$("#tooltip").css({
			"top": (e.pageY+y) + "px",
			"left": (e.pageX+x) + "px"
		}).show("fast");
	}).mouseout(function(){
		this.title = this.myTitle;
		$("#tooltip").remove();
	}).mousemove(function(e){
		$("#tooltip").css({
			"top": (e.pageY+y) + "px",
			"left": (e.pageX+x) + "px"
		});
	});
})


















