var btn = document.querySelector('.btn'),
		progress = document.querySelector('.progress'),
		span = document.querySelector('.progress span');

btn.onclick = function () {
	addWidth(10);
}

function addWidth(speed) {
	var num = 1,
			timer = setInterval(func,speed);

	function func() {
		if (num == 100) {
			clearInterval(timer);
		}else{
			num++;
			progress.style.width = num + "%";
			span.innerHTML = num + "%";
		}
	}
}