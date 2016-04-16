// var shopping = document.getElementById('purchases');
// var items=shopping.getElementsByTagName('*');
// alert(items.length);

// var paras=document.getElementsByTagName('p');
// for(var i=0; i<paras.length;i++)
// {
// 	var title_text=(paras[i].getAttribute("title"));
// 	if (title_text ) alert(title_text);
	
// }

// var paras=document.getElementsByTagName('p');
// for(var i=0; i<paras.length;i++){
// 	var title_text=paras[i].getAttribute("title");
// 	if(title_text){
// 		paras[i].setAttribute("title","brand new title text");
// 		alert(paras[i].getAttribute("title"))
// 	}
// }
// function showPic(whichpic) {
// 	var source=whichpic.getAttribute("href");
// 	var purchases=document.getElementById("purchases");
// 	purchases.setAttribute("src",source);
// }

//links on the page
// window.onload=preparelinks;
// function preparelinks() {
// 	var links=document.getElementsByTagName('a');
// 	for (var i = 0; i < links.length; i++) {
// 		if(links[i].getAttribute("class")=="popup"){
// 			links[i].onclick=function(){
// 				popUp(this.getAttribute("href"));
// 				return false;
// 			}
// 		}
// 	}
// }

// function popUp(winURL) {
// 	window.open(winURL,"popup","width=320,height=480");
// }

// innerHTLM---------
// window.onload=function(){
// 	var testdiv=document.getElementById("testdiv");
// 	testdiv.innerHTML="<p>something change.</p>";
// }


//createElement&createTextNode
// window.onload=function(){
// var para=document.createElement("p");
// var testdiv=document.getElementById('testdiv');
// testdiv.appendChild(para);
// var txt=document.createTextNode("Hello World");
// para.appendChild(txt);
// }
//another way for createElement&createTextNode
// window.onload=function(){
// 	var para=document.createElement("p");
// 	var txt=document.createTextNode("Hello World");
// 	para.appendChild(txt);
// 	var testdiv=document.getElementById("testdiv");
// 	testdiv.appendChild(para);
// }

//insertAfter
// function insertAfter(newElement,targetElement) {
// 	var parent=targetElement.parentNode;
// 	if (parent.lastChild == targetElement) {
// 		parent.appendChild(newElement);
// 	}else{
// 		parent.insertBefore(newElement,targetElement.nextSibling);
// 	}
// }

//displayAbbreviations
//windowonload事件函数
function addLoadEvent(func) {
	var oldonload=window.onload;
	if (typeof window.onload != "function") {
		window.onload=func;
	}else{
		window.onload=function(){
			oldonload();
			func();
		}
	}
}
// 执行windowonload函数
addLoadEvent(displayAbbreviations);
// 执行displayAbbreviations函数
function displayAbbreviations() {
	if (!document.getElementsByTagName || !document.createElement
	 || !document.createTextNode) return false;
	//取得所有缩略词
	var abbrevations=document.getElementsByTagName('abbr');
	if (abbrevations.length<1) return false;
	var defs=new Array();
	// 遍历所有缩略词
	for (var i = 0; i < abbrevations.length; i++) {
	var current_abbr=abbrevations[i];
	var definition=current_abbr.getAttribute("title");
	var key=current_abbr.lastChild.nodeValue;
	defs[key]=definition;
 }  
    // 创建定义列表
    var dlist=document.createElement("dl");
    // 遍历定义
	for(key in defs){
	var definition=defs[key];
	// 创建定义标题
	var dtitle=document.createElement("dt");
	var dtitle_text=document.createTextNode(key);
	dtitle.appendChild(dtitle_text);
	// 创建定义描述
	var ddesc=document.createElement("dd");
	var ddesc_text=document.createTextNode(definition);
	ddesc.appendChild(ddesc_text);
	// 添加到定义列表
	dlist.appendChild(dtitle);
	dlist.appendChild(ddesc);
 } 
    // 创建标题
    var header=document.createElement("h2");
    var header_text=document.createTextNode("Abbrevations");
    header.appendChild(header_text);
    // 把标题添加到页面主体
    document.body.appendChild(header);
    // 把定义列表添加到页面主体
    document.body.appendChild(dlist);
}











































