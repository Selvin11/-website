// $('#search_input').bind('keyup',function () {
// 	var searchText = $('#search_input').val();
// 	$.get('http://api.bing.com/qsonhs.aspx?q='+searchText,function(d){
//        var d = d.AS.Results[0].Suggest;
//        var html ='';
//        for(var i=0;i<d.length;i++){
//        	html+='<li>'+d[i].Txt+'</li>';
//        }
//        $('#search-result').html(html);
//        $('#search-suggest').show().css({
//        	top:$('#search-form').offset().top+$('#search-form').height()+10,
//        	left:$('#search-form').offset().left,
//        	position:'absolute'
//        });
// 	},'json');
	
// });
// $(document).bind('click',function () {
// 	$('#search-suggest').hidde();
// });


var getDOM = function (id) {
	return document.getElementById(id);
}

var addEvent = function (id,event,fn) {
	var el = getDOM(id)||document;
	if (el.addEventListener) {
		el.addEventListener(event,fn,false);
	}else if (el.attachEvent) {
		el.attachEvent('on'+event,fn);
	}
}

var getElementLeft = function (element) {
	var actualLeft = element.offsetLeft;
	var current = element.offsetParent;
	while (current !== null){
		actualLeft += current.offsetLeft;
		current = current.offsetParent;
	}
	return actualLeft;
}

var getElementTop = function (element) {
	var actualTop = element.offsetTop;
	var current = element.offsetParent;
	while (current !== null){
		actualTop += current.offsetTop;
		current = current.offsetParent;
	}
	return actualTop;
}

addEvent('search_input','keyup',function () {
	// search top
	getDOM('search-suggest').style.top = getElementTop(getDOM('search-form'))+38+'px';
	getDOM('search-suggest').style.left = getElementLeft(getDOM('search-form'))+'px';
	getDOM('search-suggest').style.position = 'absolute';
	getDOM('search-suggest').style.display = 'block';
})

// Ajax by javascipt
var ajaxGet = function (url,callback) {
	var _xhr = null;
	if (window.XMLHttpRequest) {
		// NOT IE
		_xhr = new window.XMLHttpRequest();
	}else if (window.ActiveXObject) {
		// FOR IE
		_xhr = new ActiveXObject("Msxml2.XMLHTTP");
	}
	_xhr.onreadystatechange = function () {
		if (_xhr.readyState == 4 && _xhr.status == 200) {
			callback(JSON.parse(_xhr.responseText));
		}
	}
	_xhr.open('get',url,false);
	_xhr.send(null);
}

addEvent('search_input','keyup',function () {
	var searchText = getDOM('search_input').value;
	ajaxGet('http://api.bing.com/qsonhs.aspx?q='+searchText,function(d){
       var d = d.AS.Results[0].Suggests;
        var html ='';
        for(var i=0;i<d.length;i++){
        	html+='<li>'+d[i].Txt+'</li>';
        }
	// search top
	getDOM('search-suggest').innerHTML = html;
	getDOM('search-suggest').style.top = getElementTop(getDOM('search-form'))+38+'px';
	getDOM('search-suggest').style.left = getElementLeft(getDOM('search-form'))+'px';
	getDOM('search-suggest').style.position = 'absolute';
	getDOM('search-suggest').style.display = 'block';
});});







































