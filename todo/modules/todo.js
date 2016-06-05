
var Todo = {

	createNew: function () {
		var todo = {};
		// 公用变量
		var wrap = $('.wrap')[0];
		var header = $('.header')[0];
		var taskList = $('.task-list')[0];
		var headerHeight = header.clientHeight;
		todo.addList = function (innerContent,parentNode,type) {
			var li = document.createElement('li');
			var span1 = document.createElement('span');
			var span2 = document.createElement('span');
			var lists = parentNode.childNodes;
			li.innerHTML = innerContent;
			parentNode.appendChild(li);
			for (var i = 0; i < lists.length; i++) {
				
				span1.innerHTML = type;
				li.insertBefore(span1,li.firstChild);
				span2.innerHTML = ' X ';
				span2.className = 'del';
				li.appendChild(span2);
			}
			
		};
		todo.removeList = function (parentNode,nodename) {
			// 删除功能
			var dels = $('.del');
			var arr = [];

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

			
			for (var i = 0; i < taskList.children.length; i++) {
				if(taskList.children[i].className === ('task' + n)){
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




