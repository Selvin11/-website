var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

var days = document.querySelectorAll('.days li');
function clickDay() {
	for (var i = 0; i < days.length; i++) {
		days[i].onclick = function () {
			for (var i = 0; i < days.length; i++) {
				if (days[i].children[0]) {days[i].children[0].className = '';}
			}
			var span = document.createElement('span');
			span.className = 'active';
			this.appendChild(span);
			span.appendChild(this.firstChild);
		}
	}
}
clickDay();