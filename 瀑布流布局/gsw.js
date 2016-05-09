window.onload = function () {
	waterfall('main','box');
	window.onscroll = function () {
		if (checkScrollSlide) {
			
		}
	}
}

function waterfall(parent,box){
	var oParent = document.getElementById(parent);
	var oBoxs = getClass(oParent,box);
	// 页面宽度和box宽度
	var oBoxW = oBoxs[0].offsetWidth;
	// 得到每一行的固定图片数量
	var cols = Math.floor(document.documentElement.clientWidth / oBoxW);
	// 设置main的宽度,使其固定
	oParent.style.cssText = 'width:' + oBoxW*cols + 'px; margin:0 auto';
	// 让下一行的图片出现在上一行高度最低的下方
	// 存放每一列的高度的数组
	var hArr = [];
	for (var i = 0; i < oBoxs.length; i++) {
		if (i < cols) {
			hArr.push(oBoxs[i].offsetHeight);
		}else{
			//找到上一行最小高度
			var minH = Math.min.apply(null,hArr);
			//得到最小高度的索引index
			var index = getMinhIndex(hArr,minH);
			oBoxs[i].style.position = 'absolute';
			oBoxs[i].style.top = minH + 'px';
			oBoxs[i].style.left = oBoxW*index + 'px';
			// oBoxs[i].style.left = oBoxs[index].offsetLeft + 'px';
			hArr[index] += oBoxs[i].offsetHeight;
		}
	}
}




















//封装getbyclassname function
function getClass(parent,clsName) {
	var boxArr = [],
		oElments = parent.getElementsByTagName('*');
		for (var i = 0; i < oElments.length; i++) {
			if(oElments[i].className == clsName){
				boxArr.push(oElments[i]);
			}
		}
		return boxArr;
}
//获取最小高度图片的索引值
function getMinhIndex(arr,val) {
	for(var i in arr){
		if (arr[i] == val) {
			return i;
		}
	}
}
// 
function checkScrollSlide() {
	var oParent = document.getElementById('main');
	var oBoxs = getClass(oParent,'box');
	var lastBoxH = oBoxs[oBoxs.length-1].offsetTop + Math.floor(oBoxs[oBoxs.length-1].offsetHeight);
	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	var height = document.body.clientHeight || document.documentElement.clientHeight;
	return(lastBoxH<scrollTop+height)?true:false;
}