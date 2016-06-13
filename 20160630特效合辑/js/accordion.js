var accordion = document.querySelectorAll('.accordion'),
		content = document.querySelectorAll('.content');


for (var i = 0; i < accordion.length; i++) {
	accordion[i].onclick = function () {
		var index = Array.prototype.indexOf.call(accordion,this);
		if (content[index].className == "content show") {
			content[index].className = "content";
			this.className = "accordion";
		}else{
			content[index].className ="content show";
			this.className = "accordion active";
		}
	}
}