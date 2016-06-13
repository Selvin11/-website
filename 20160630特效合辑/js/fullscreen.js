var btnR = document.querySelector(".full-right"),
		btnD = document.querySelector(".full-down"),
		wrap = document.querySelector(".wrap"),
		hideL = document.querySelector(".hide-left"),
		hideT = document.querySelector(".hide-top"),
		close = document.querySelectorAll(".close");
// slide right
btnR.onclick = function () {
	hideL.style.width = "25%";
	wrap.style.marginLeft = "320px";

}

close[0].onclick = function () {
	hideL.style.width = 0;
	wrap.style.marginLeft = "auto";
}

// slide down
btnD.onclick = function () {
	hideT.style.height = "100%";
}

close[1].onclick = function () {
	hideT.style.height = 0;
}