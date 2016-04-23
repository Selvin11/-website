function $(id) {
	return typeof id === "string"?document.getElementById(id):id;
}

window.onload=function () {
	var titles = $("nav-title").getElementsByTagName('li');
	var divs = $("nav-con").getElementsByTagName('div');
   
    for (var i = 0; i < titles.length; i++) {
        	titles[i].id =i;
        	titles[i].onmouseover=function () {
        		for (var j = 0; j < titles.length; j++) {
        			titles[j].className="";
        			divs[j].style.display='none';
        		}
        		this.className="select";
				divs[this.id].style.display="block";
        	}
        }    
	

}
	