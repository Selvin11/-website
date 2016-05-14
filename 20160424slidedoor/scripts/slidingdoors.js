// window.onload = function() {
// 	//容器对象
// 	var box = document.getElementById('container');

// 	//获得图片NodeList对象集合
// 	var imgs = box.getElementsByTagName('img');

// 	//单张图片的宽度
// 	var imgWidth = imgs[0].offsetWidth;

// 	//设置掩藏门体露出的宽度
// 	var exposeWidth = 160;

// 	//设置容器总宽度
// 	var boxWidth = imgWidth + (imgs.length - 1) * exposeWidth;
// 	box.style.width = boxWidth + 'px';

// 	//设置每道门的初始位置
// 	function setImgsPos() {
// 		for (var i = 1, len = imgs.length; i < len; i++) {
// 			imgs[i].style.left = imgWidth + exposeWidth * (i - 1) + 'px';
// 		}
// 	}
// 	setImgsPos();

// 	//计算每道门打开时应移动的距离
// 	var translate = imgWidth - exposeWidth;

// 	//为每道门绑定事件
// 	for (var i = 0, len = imgs.length; i < len; i++) {
// 		//使用立即调用的函数表答式，为了获得不同的i值
// 		(function(i) {
// 			imgs[i].onmouseover = function() {
// 				//先将每道门复位
// 				setImgsPos();
// 				//打开门
// 				for (var j = 1; j <= i; j++) {
// 					imgs[j].style.left = parseInt(imgs[j].style.left, 10) - translate + 'px';
// 				}
// 			};
// 		})(i);
// 	}
// };	
/*
* 注册浏览器的DOMContentLoaded事件
* @param { Function } onready [必填]在DOMContentLoaded事件触发时需要执行的函数
* @param { Object } config [可选]配置项
*/
function onDOMContentLoaded(onready,config){
    //浏览器检测相关对象，在此为节省代码未实现，实际使用时需要实现。
    //var Browser = {};
    //设置是否在FF下使用DOMContentLoaded（在FF2下的特定场景有Bug）
    this.conf = {
        enableMozDOMReady:true
    };
    if( config )
        for( var p in config)
            this.conf[p] = config[p];
    var isReady = false;
    function doReady(){
        if( isReady ) return;
        //确保onready只执行一次
        isReady = true;
        onready();
    }
    /*IE*/
    if( Browser.ie ){
        (function(){
            if ( isReady ) return;
            try {
                document.documentElement.doScroll("left");
            } catch( error ) {
                setTimeout( arguments.callee, 0 );
                return;
            }
            doReady();
        })();
        window.attachEvent('onload',doReady);
    }
    /*Webkit*/
    else if (Browser.webkit && Browser.version < 525){
        (function(){
            if( isReady ) return;
            if (/loaded|complete/.test(document.readyState))
                doReady();
            else
                setTimeout( arguments.callee, 0 );
        })();
        window.addEventListener('load',doReady,false);
    }
    /*FF Opera 高版webkit 其他*/
    else{
        if( !Browser.ff || Browser.version != 2 || this.conf.enableMozDOMReady)
            document.addEventListener( "DOMContentLoaded", function(){
                document.removeEventListener( "DOMContentLoaded", arguments.callee, false );
                doReady();
            }, false );
        window.addEventListener('load',doReady,false);
    }
}

//silidingdoors
// $(function(){
//     var $con = $("#container"),
//          $imgs = $("img"),
//         imgWidth = $imgs.width(),
//         leakWidth = 160,
//         containerWidth = imgWidth + ($imgs.length - 1)*leakWidth;
//         $con.width(containerWidth);
//         var scrollWidth = imgWidth - leakWidth;
//         $imgs.each(function(){
//             $(this).css("left",imgWidth + ($(this).index() - 1)*leakWidth);
//             $(this).mouseover(function(){
//                 $(this).css("left",function(index,value){
//                     return value - scrollWidth;
//                 });
//             })
//             // $(this).mouseout(function(){
//             //     $(this).offset().left = imgWidth + ($(this).index() - 1)*leakWidth ;
//             // })
//         });
// })
    
    
window.onload = function () {
	var con = document.getElementById('container');
	var imgs = con.getElementsByTagName('img'),
		imgWidth = imgs[0].offsetWidth,
		leakWidth = 160,
		containerWidth = imgWidth + (imgs.length - 1)*leakWidth;
		//get container width
		con.style.width = containerWidth + "px";
		function setImgsPos() {
					for (var i = 1; i < imgs.length; i++) {
						imgs[i].style.left = imgWidth + (i - 1)*leakWidth + "px";
					}
				}
		setImgsPos();//complete UI design
	var scrollWidth = imgWidth - leakWidth;
	for (var i = 1; i < imgs.length; i++) {
			(function (i) {
				imgs[i].onmouseover = function () {
					setImgsPos();
					for (var j = 1; j <= i; j++) {
						imgs[j].style.left = parseInt(imgs[j].style.left , 10) - scrollWidth + "px";
					}
				}
				//add onmouseout
				imgs[i].onmouseout = function () {
					setImgsPos();
				}
			})(i);
		}	

}