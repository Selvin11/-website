//jquery compelete
$(function(){
	waterfall();
	var dataInt = {
		"data":[{"src":"0.jpg"},{"src":"1.jpg"},{"src":"2.jpg"},{"src":"3.jpg"}]
	};
	$(window).scroll(function () {
		if (checkScrollSlide) {
			$.each(dataInt.data,function (index,element) {
				var oBox = $('<div>').addClass('box').appendTo($('#main'));
				var oPic = $('<div>').addClass('pic').appendTo($(oBox));
				$('<img>').attr('src','images/'+ $(element).attr('src')).appendTo($(oPic));
			})
			waterfall();
		}
	})
});

function waterfall() {
	var $boxs = $('#main>div');
	var w = $boxs.eq(0).outerWidth();
	var cols = Math.floor($(window).width() / w);
	$('#main').width(w*cols).css('margin',' 0 auto');	
	var hArr = [];
	$boxs.each(function (index,element) {
		var h = $boxs.eq(index).outerHeight();
		if (index < cols) {
			hArr[index] = h;
		}else{
			var minH = Math.min.apply(null,hArr);
			//取得最小高度的索引值
			var minHIndex = $.inArray(minH,hArr);
			$(element).css({
				'position':'absolute',
				'top':minH + 'px',
				'left':minHIndex*w + 'px'
			})
			hArr[minHIndex] += $boxs.eq(index).outerHeight();
		}
	})
}	

function checkScrollSlide() {
	var $lastBox = $('#main>div:last');
	var lastBoxDis = $lastBox.offset().top + Math.floor($lastBox.outerHeight()/2);
	var scrollTop = $.scrollTop();
	var documentH = $.height();
	return (lastBoxDis<scrollTop+documentH)?true:false;	
}		




















