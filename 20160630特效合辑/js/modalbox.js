var btn = document.getElementById('btn'),
		modal = document.getElementById('modal'),
		close = document.querySelector('.close');

btn.onclick = function () {
	if(modal.style.display == "none"){
		modal.style.display = "block";
	}else{
		modal.style.display = "none";
	}
}

close.onclick = function () {
	modal.style.display = "none";
}
