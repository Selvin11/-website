var imgBtn = document.querySelector('.main-img'),
		modal = document.querySelector('.modal'),
		modalImg = document.querySelector('.modal-img'),
		close = document.querySelector('.close'),
		section = document.querySelector('section');

imgBtn.onclick = function () {
	if (modal.style.display == "none") {
		modal.style.display = "block";
		modalImg.src =this.src;
		modalImg.alt =this.alt;
		section.innerHTML =this.alt;

	}
}

close.onclick = function () {
	modal.style.display = "none";
}