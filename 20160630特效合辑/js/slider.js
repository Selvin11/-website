var slides = document.getElementsByClassName('fade'),
		dots = document.getElementsByClassName('dot'),
		count = slides.length;

var sliderIndex = 0;
showSlide(sliderIndex);
dotClick();



var prev = document.getElementsByClassName('prev')[0],
		next = document.getElementsByClassName('next')[0];
// arrow click
function arrowClick() {
	
}
prev.onclick = function () {
	var index = getIndex();
	if (index == 0) {
		index = count-1;
		showSlide(index);
	}else{
		showSlide(index - 1);
	}
}
next.onclick = function () {
	var index = getIndex();
	if (index == count-1) {
		index = 0;
		showSlide(index);
	}else{
		showSlide(index + 1);
	}
}

function showSlide(n) {
	for (var i = 0; i < count; i++) {
		slides[i].style.display = 'none';
		dots[i].className = 'dot';
	}
	slides[n].style.display = 'block';
	dots[n].className = 'dot active';
}

function getIndex() {
	for (var i = 0; i < count; i++) {
		if(slides[i].style.display == 'block'){
			return i;
		}
	}
}

// dot  click 
function dotClick() {
	for (var i = 0; i < dots.length; i++) {
		dots[i].onclick = function () {
			var that = this,
					index;
			index = Array.prototype.indexOf.call(dots,that);
			showSlide(index)
		}
	}
}
