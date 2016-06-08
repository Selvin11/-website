var Todo = {

	createNew: function () {
		var todo = {};
		// 公用变量
		var wrap = $('.wrap')[0];
		var header = $('.header')[0];
		var taskList = $('.task-list')[0];
		var headerHeight = header.clientHeight;
		todo.addDt = function (innerContent,parentNode,describe) {
			// 创建目录dt
			var dt = document.createElement('dt');
			// 目录名
			var span1 = document.createElement('span');
			// 删除键
			var span2 = document.createElement('span');
			var ds = parentNode.children;
			for (var k = 0; k < ds.length; k++) {
				if(ds[k].className === innerContent){
					return;
				}
			}
			dt.innerHTML = innerContent;
			parentNode.appendChild(dt);
			for (var i = 0; i < ds.length; i++) {
				// 标记
				dt.className = innerContent;
				span1.innerHTML = describe;
				dt.insertBefore(span1,dt.firstChild);
				// 暂时性的删除设置
				span2.innerHTML = ' X ';
				span2.className = 'del';
				dt.appendChild(span2);
			}
			
		};
		todo.addDd = function (innerContent,parentNode,target,describe) {
			// 创建文件dd
			var dd = document.createElement('dd');
			// 目录名
			var span1 = document.createElement('span');
			// 删除键
			var span2 = document.createElement('span');
			var ds = parentNode.children;
			for (var k = 0; k < ds.length; k++) {
				if(ds[k].className === innerContent){
					return;
				}
			}
			dd.innerHTML = innerContent;
			insertAfter(dd,target);
			for (var i = 0; i < ds.length; i++) {
				// 标记
				dd.className = innerContent;
				span1.innerHTML = describe;
				dd.insertBefore(span1,dd.firstChild);
				// 暂时性的删除设置
				span2.innerHTML = ' X ';
				span2.className = 'del';
				dd.appendChild(span2);
			}
			
		};
		todo.removeDs = function (parentNode,nodename) {
			// 删除功能
			var dels = $('.del');
			var arr = [];
			// 浅拷贝数组
			for (var j = 0; j < dels.length; j++) {
				arr[j] = dels[j];
				arr[j].onclick = function (e) {
					var child = parentNode.childNodes;
					var taskChild = taskList.children;
					// if (child[arr.indexOf(this)].nodeName.toLowerCase() === nodename) {
						parentNode.removeChild(child[arr.indexOf(this)]);

					// }
					e.stopPropagation();
				}
			}
		};
		todo.addDiv = function (n) {

			var taskChild =taskList.children;
			for (var i = 0; i < taskChild.length; i++) {
				if(taskChild[i].className === ('task' + n)){
					return;
				}
			}
			
			var task = document.createElement('div');
			// var h3 = document.createElement('h3');
			// var p = document.createElement('p');
			// var now = new Date();
			// 设定唯一className
			task.className = 'task' + n;
			// h3.innerHTML = now.getFullYear() + ' 年 ' + (now.getMonth()+1) + ' 月 ' + now.getDate() + '日';
			// p.innerHTML = node.textNode;
			taskList.appendChild(task);
			// task.appendChild(h3);
			// task.appendChild(p);


		}
		todo.curHeight = function (node) {
			 node.style.height = window.innerHeight - headerHeight + 'px';
		}
		return todo;	
	}
};



