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
// $(function(){
// 	var x = 10,
// 	y = 20;
// 	$("a.tooltip").mouseover(function(e){
// 		this.myTitle = this.title;
// 		this.title = "";
// 		var tooltip = "<div id='tooltip'>" + this.myTitle + "</div>";
// 		$(tooltip).appendTo("body");
// 		$("#tooltip").css({
// 			"top": (e.pageY+y) + "px",
// 			"left": (e.pageX+x) + "px"
// 		}).show("fast");
// 	}).mouseout(function(){
// 		this.title = this.myTitle;
// 		$("#tooltip").remove();
// 	}).mousemove(function(e){
// 		$("#tooltip").css({
// 			"top": (e.pageY+y) + "px",
// 			"left": (e.pageX+x) + "px"
// 		});
// 	});
// })
// $(function(){
// 			//bind()  how to use it
// 			$("#panel .head").bind("click",function(){
// 				var $content = $(this).next();
// 				if ($(".content").is(":visible")) {
// 					$content.hide();
// 				}else{
// 					$content.show();
// 				}
// 			})
// })

// $(function(){
// 	$("#panel h5.head").toggle(function(){
// 		$(this).next().toggle();
// 	},function(){
// 		$(this).next().toggle();
// 	})
// });

// $(function(){
//     $("#panel h5.head").toggle(function(){
// 			$(this).next().toggle();
// 	},function(){
// 			$(this).next().toggle();
// 	})
// })
// 
// $(function(){

// 	$("#panel .head").mouseover(function(){
// 		$(this).next().show();
// 	}).mouseout(function(){
// 		$(this).next().hide();
// 	})
// })
// hover(enter , leave)
// $(function(){
// 	$("#panel .head").hover(function(){
// 		$(this).next().show();
// 	},function(){
// 		$(this).next().hide();
// 	})
// })

// $(function(){
// 	$("#panel").click(function(){
// 		$(this).animate({left:"500px"},3000)
// 				.animate({top:"300px"},3000)
// 				.animate({left:"0px"},3000)
// 				.animate({top:"0px"},3000);
// 	})
// })

// $(function(){
// 	$("#panel").hover(function(){
// 		$(this).stop(true)
// 				.animate({height:"100px"},200)
// 				.animate({width:"200px"},200);
// 	},function(){
// 		$(this).stop(true)
// 				.animate({height:"50px"},200)
// 				.animate({width:"100px"},200)
// 	})
// })

//focus & blur
// $(function(){
// 	$(":input").focus(function(){
// 		$(this).addClass("focus");
// 	}).blur(function(){
// 		$(this).removeClass("focus");
// 	})
// })

//change height
// $(function(){
// 	var $comment = $("#comment");
// 	$(".bigger").click(function(){
// 		if (!$comment.is(":animated")) {
// 			if ($comment.height() < 500) {
// 			$comment.animate({height:"+=50"},400);
// 		}
// 		}
// 	});
// 	$(".smaller").click(function(){
// 		if (!$comment.is(":animated")) {
// 			if ($comment.height() > 50) {
// 			$comment.animate({height:"-=50"},400);	
// 		}
// 		}
// 	});

// })

//全选&反选
// $(function(){
// 	$("#CheckedAll").click(function(){
// 		if(this.checked){
// 			$("[name = items]:checkbox").attr('checked',true);
// 		}else{
// 			$("[name = items]:checkbox").attr("checked",false);
// 		}

// 	})
// 	$("[name = items]:checkbox").click(function(){
// 		var $tmp = $(":checkbox");
// 		$("#CheckedAll").attr('checked',$tmp.length == $tmp.filter(':checked').length);
// 	})
// 	// $("#CheckedNo").click(function(){
// 	// 	$(':checkbox').attr('checked',false);
// 	// })
// 	// $("#CheckedRev").click(function(){
// 	// 	$(':checkbox').each(function(){
// 	// 		this.checked = !this.checked;
// 	// 	})

// 	// })
// 	$("#send").click(function(){
// 		var str = "你选中的是：\r\n";
// 		$("[name = items]:checkbox").each(function(){
// 			str += $(this).val() + "\r\n";
// 		}) 
// 		alert(str);
// 	})
// })


$(function(){
	//如果是必填的，则加红星标识.
	$("form :input.required").each(function(){
		var $required = $("<strong class='high'> *</strong>"); //创建元素
		$(this).parent().append($required); //然后将它追加到文档中
	});
	$('form :input').blur(function(){  // 为表单元素添加失去焦点事件
		 var $parent = $(this).parent();
		 $parent.find(".formtips").remove();//防止样式重叠
		 //验证用户名
		 if( $(this).is('#username') ){
				if( this.value=="" || this.value.length	< 6	){
					var errorMsg = '请输入至少6位的用户名.';
					$parent.append('<span class="formtips onError">'+errorMsg+'</span>');
				}else{
					var okMsg =	'输入正确.';
					$parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');
				}
		 }
		 //验证邮件
		 if( $(this).is('#email') ){
			if( this.value=="" || ( this.value!="" && !/.+@.+\.[a-zA-Z]{2,4}$/.test(this.value) ) ){
				  var errorMsg = '请输入正确的E-Mail地址.';
				  $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
			}else{
				  var okMsg = '输入正确.';
				  $parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');
			}
		 }
	}).keyup(function(){
		$(this).triggerHandler("blur"); //及时提醒
	}).focus(function(){
		$(this).triggerHandler("blur");//及时提醒
	})
	//提交事件
	$("#send").click(function(){
		$("form .required:input").trigger('blur');
		var numError = $('form .onError').length;
		if (numError) {
			return false;
		}
		alert("注册成功！");
	})
});































