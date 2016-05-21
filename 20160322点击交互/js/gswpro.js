// “Paul Koch”的addLoadEvent()函数
function addLoadEvent(func) {
  var oldonload = window.onload;
  //先判断前面是否有调用window.onload
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}

// 封装insertAfter函数
// function insertAfter(newElement,targetElement) {
//   var parent = targetElement.parentNode;
//   if (parent.lastChild == targetElement) {
//     parent.appendChild(newElement);
//   } else {
//     parent.insertBefore(newElement,targetElement.nextSibling);
//   }
// }
// 
function preparePlaceholder() {
  var placeholder = $("<img id='placeholder' src='img/sun.jpg' alt='my image gallery'></img>"),
      description = $("<p id='description'></p>").text("Choose an image"),
      gallery = $("#imagegallery");
  gallery.after(placeholder);
  placeholder.after(description);

}
// 第一版 原生JS
// function preparePlaceholder() {
//   if (!document.createElement) return false;
//   if (!document.createTextNode) return false;
//   if (!document.getElementById) return false;
//   if (!document.getElementById("imagegallery")) return false;
//   var placeholder = document.createElement("img");
//   placeholder.setAttribute("id","placeholder");
//   placeholder.setAttribute("src","img/sun.jpg");
//   placeholder.setAttribute("alt","my image gallery");
//   var description = document.createElement("p");
//   description.setAttribute("id","description");
//   var desctext = document.createTextNode("Choose an image");
//   description.appendChild(desctext);
//   var gallery = document.getElementById("imagegallery");
//   insertAfter(placeholder,gallery);
//   insertAfter(description,placeholder);
// }
// 第二版 jquery 改写prepareGallery函数
// function prepareGallery() {
//   $("#imagegallery a").each(function(){
//     $(this).click(function(){
//       return showPic(this);
//     })
//   })
// }
// 第三版 优化jquery
function prepareGallery() {
  $("#imagegallery a").each(function(e){
    this.onclick = function(){
      return showPic(this);
    }
  })
}
// function prepareGallery() {
//   if (!document.getElementsByTagName) return false;
//   if (!document.getElementById) return false;
//   if (!document.getElementById("imagegallery")) return false;
//   var gallery = document.getElementById("imagegallery");
//   var links = gallery.getElementsByTagName("a");
//   for ( var i=0; i < links.length; i++) {
//     links[i].onclick = function() {
//       return showPic(this);
// 	}
//     links[i].onkeypress = links[i].onclick;
//   }
// }
// jquery 重构showPic函数
function showPic (whichpic) {
  var placeholder = $("#placeholder"),
      description = $("#description");
  placeholder.attr('src',$(whichpic).attr('href'));
  description.text($(whichpic).attr('title'));
  //取消连接默认跳转属性
  return false;
}
// function showPic(whichpic) {
//   if (!document.getElementById("placeholder")) return true;
//   var source = whichpic.getAttribute("href");
//   var placeholder = document.getElementById("placeholder");
//   placeholder.setAttribute("src",source);
//   if (!document.getElementById("description")) return false;
//   if (whichpic.getAttribute("title")) {
//     var text = whichpic.getAttribute("title");
//   } else {
//     var text = "";
//   }
//   var description = document.getElementById("description");
//   if (description.firstChild.nodeType == 3) {
//     description.firstChild.nodeValue = text;
//   }
//   return false;
// }
//jquery ready方法
$(function(){
  preparePlaceholder();
  prepareGallery();
})
// addLoadEvent(preparePlaceholder);
// addLoadEvent(prepareGallery);