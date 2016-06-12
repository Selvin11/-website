// 
$(".slider a").each(function (index) {
	$(this).click(function () {
		$(this).addClass('active')
						.siblings().removeClass('active');
		if (index === 0) {
			$('.slider').attr('data-active-index','0');
			$("#register").css('display','block');
			$("#login").css('display','none');
		}else{
			$('.slider').attr('data-active-index','1');
			$("#register").css('display','none');
			$("#login").css('display','block');
		}
	})
})