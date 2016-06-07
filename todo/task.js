// 富文本新增及编辑
for (var i = 0; i < task.children.length; i++) {
	if (task.children[i].nodeName.toLowerCase() === 'p') {
		// 循环遍历rightlist 切换显示内容
		// for (var k = 0; k < rightList.children.length; k++) {
		// 	if(rightList.children[k].className === id + 'fwd'){
		// 		rightList.children[k].style.display = 'block';
		// 	}else{
		// 	rightList.children[k].style.display = 'none';
		// 	}
		// }
		task.children[i].onclick = function (e) {
			var that = this;

			console.log(that);
			var id = that.innerHTML;
			
			
			
			var parent = addDiv (task,rightList,id,'fwd');
			// 获得点击目标，开始添加富文本
			// 获得mid-list的标题和日期
			mktit(parent,that);
			addDate(parent);
			mkfwd(parent);


			e.stopPropagation();
		}
	}
}