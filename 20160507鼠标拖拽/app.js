function getClass(claName,parent) {
	var iParent = parent?document.getElementById('parent'):document,
		elments = iParent.getElementsByTagName('*'),
		eles = [];
	for (var i = 0; i < elments.length; i++) {
		if (elments[i].className == claName) {
			eles.push(elments[i]);
		}
	}
	return eles;
}

window.onload = drag;

function drag() {
	var ititle = document.getElementById('title'),
		iDrag = document.getElementById('login-wrap');
	//点击进行拖拽
	ititle.onmousedown = fnDown;
	//点击关闭
	var iclose = document.getElementById('close');

	iclose.onclick = function () {
		iDrag.style.display = 'none';
	}
}
//
function fnDown(event) {
	event = event || window.event;
	var iDrag = document.getElementById('login-wrap');
		//鼠标按下时，鼠标相对框的坐标
	var	disX = event.clientX - iDrag.offsetLeft,
		disY = event.clientY - iDrag.offsetTop;
	//鼠标在整个页面中移动
	document.onmousemove = function (event) {
		event = event || window.event;
		var x = event.clientX - disX,
			y = event.clientY  - disY;
		//限定移动范围
		x = Math.min(document.documentElement.clientWidth - iDrag.offsetWidth ,Math.max(0,x));
		y = Math.min(document.documentElement.clientHeight - iDrag.offsetHeight ,Math.max(0,y));
		iDrag.style.left = x + 'px';
		iDrag.style.top = y + 'px';
	}
	//释放鼠标时，清除鼠标移动事件
	document.onmouseup = function () {
		document.onmousemove = null;
		document.onmouseup = null;
	}
}


