//点击页面计算点击次数
var clickCount = 0, 
	$i=$('<b>');
	//设置点击出现的样式
	$i.css({
			'z-index':9999,
			'position':'absolute',
			'color':'red',
			'display':'none'
			});
	$('body').append($i);
	$(window).click(function(e){
		var x = e.pageX, y = e.pageY;
		$i.text('+'+(++clickCount))
			.css({
				'display':'block',
				'top':y-15,
				'left':x,
				'opacity':1
				})
			//先清除当前动画，在进行下一次动画
			.stop(true,false)
			.animate({
				'top':y-180,
				'opacity':0
				},800,function(){
		$i.hide();
		});	
	//阻止事件冒泡
		e.stopPropagation();
	})