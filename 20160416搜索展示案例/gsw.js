//similar to window.onload method
// $(document).ready(function(){
// 	alert("hello world");
// });

// $(function(){
// 	alert("coding");
// });

//高亮导航栏
// $(".level1 > a").click(function(){
// 	$(this).addClass("current") //添加样式
// 	.next().show() //将隐藏的ul标签展示出来
// 	.parent().siblings().children("a").removeClass("current")//移除其他目录的current样式

// 	.next().hide();
// 	return false;
// });
//用原始JavaScript编写的选中数量
// var btn = document.getElementById('btn');
// btn.onclick = function(){
// 	var checks = document.getElementByName('check');
// 	var arr = new Array();
// 	for (var i = 0; i < checks.length; i++) {
// 		if(checks[i].checked){
// 			arr.push(checks[i].value);
// 		}
// 		alert("already check");
// 	}
// }
//jQurey编写的，真的是简洁好多呢！～
// $('#btn').click(function(){
// 	alert($('input:checked').length);
// })；

//品牌列表展示效果制作
$(function(){
	//get hide element
	var $category = $('ul li:gt(5):not(:last)');
			$category.hide();
	var $toggleBtn = $('div.showmore > a');
			$toggleBtn.click(function(){
	//judgement click event
			if ($category.is(":visible")) {
				
				$category.hide();

				$(this).find('span')
						.text("显示全部品牌");
				$('ul li').removeClass('promoted');
			
			}else{
				
				$category.show();
				$(this).find('span')
						.text("精简显示品牌");
			$('ul li').filter(":contains('佳能'),:contains('尼康'),:contains('奥林巴斯')")
							.addClass('promoted');
				}
				return false;
			})

})
//toggle()方法



























