var Todo = {
	createNew: function () {
		var todo = {};
		todo.addList = function (innerContent,parentNode) {
			var li = document.createElement('li');
			var span1 = document.createElement('span');
			var span2 = document.createElement('span');
			var lists = parentNode.getElementsByTagName('li');
			li.innerHTML = innerContent;
			parentNode.appendChild(li);
			for (var i = 0; i < lists.length; i++) {
				if (lists[i].innerHTML === li.innerHTML) {
					var num = i + ' : ';
				}
			}
			span1.innerHTML = num;
			li.insertBefore(span1,li.firstChild);
			span2.innerHTML = ' X ';
			span2.className = 'del';
			li.appendChild(span2);
			// 删除功能
			var dels = $('.del');
			for (var i = 0; i < dels.length; i++) {
				dels[i].onclick = function (e) {
					parentNode.removeChild(lists[i]);
					e.stopPropagation();
				}
			}
		};
		todo.showMes = function (parentNode) {
			var lists = parentNode.getElementsByTagName('li');
			var div = document.createElement('div');
			for (var i = 1; i < lists.length; i++) {
				lists[i].onclick = function (e) {
					
				}
			}
		}
		
		return todo;	
	}
}