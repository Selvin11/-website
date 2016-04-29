var eventAll = {
	//add event
	addEvent:function (elem,type,fuc) {
		if (elem.addEventListener) {
			elem.addEventListener(type,fuc,false);
		}else if(elem.attachEvent){
			elem.attachEvent('on'+type,fuc);
		}else{
			elem['on'+type]= fuc;
		}
	},
	//remove event
	removeEvent:function (elem,type,fuc) {
		if (elem.removeEventListener) {
			elem.removeEventListener(type,fuc,false);
		}else if(elem.attachEvent){
			elem.attachEvent('on'+type,fuc);
		}else{
			elem['on'+type]= fuc;
		}
	},
	//获取事件
	getEvent:function (event) {
		return event?event:window.event;
	},
	//获取事件类型（click...）
	getType:function (event) {
		return event.type;
	},
	//获取事件目标，是在哪个元素上进行的
	getElement:function (event) {
		return event.target || event.srcElement;
	}，
	//阻止默认行为
	preventDefault:function (event) {
		if (event.preventDefault) {
			event.preventDefault();
		}else{
			//for IE
			event.returnValue = false;
		}
	},
	//阻止冒泡
	stopPropagation:function (event) {
		if (event.stopPropagation) {
			event.stopPropagation();
		}else{
			//for IE
			event.cancelBubble = true;
		}
	}
}
eventAll.addEvent(btn,'click',showMes)
//example
//dom2 chrome
addEventListener(btn , 'click' , showMes);
//IE
attachEvent('onclick' , showMes);
//dom0 
btn.onclick = showMes;