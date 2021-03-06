var fruitObj = function () {
	this.alive = [];//boolean
	this.x =[];
	this.y =[];
	this.l =[];
	this.aneNo = [];
	this.spd = [];
	this.fruitType = [];
	this.orange = new Image();
	this.blue = new Image();
}

fruitObj.prototype.num =30;
fruitObj.prototype.init = function () {
	for (var i = 0; i < this.num; i++) {
	 	this.alive[i] = false;
	 	//果实初始坐标
	 	this.x[i] = 0;
	 	this.y[i] = 0;
	 	this.aneNo[i] = 0;
	 	this.spd[i] = Math.random()*0.017 + 0.003;
	 	this.fruitType[i] = 0;
	 	this.born(i);
	}
	this.orange.src = "./img/fruit.png";
	this.blue.src = "./img/blue.png";
}

fruitObj.prototype.draw = function () {
	//果实初始状态
	for (var i = 0; i < this.num; i++) {
		//draw fruit
		//find an one , grow , fly up
		if (this.alive[i]) {
			if (this.fruitType[i] == 'blue') {
				var pic = this.blue;
			}else{
				var pic = this.orange;
			}
			if (this.l[i] <= 14) {
				var NO = this.aneNo[i];
				this.x[i] = ane.headx[NO];
				this.y[i] = ane.heady[NO];
				this.l[i] += this.spd[i]*gapTime;//果实长大
			}else{
				this.y[i] -= this.spd[i]*7*gapTime;
			}
			ctx2.drawImage(pic , this.x[i] - this.l[i]*0.5 , this.y[i] - this.l[i]*0.5 , this.l[i], this.l[i]);
			if (this.y[i] < 10) {
				this.alive[i] = false;
			}
		}
	}
}

fruitObj.prototype.born = function (i) {
	//确定出生所在海葵和其位置
	// var aneID = Math.floor(Math.random()*ane.num);
	// this.x[i] = ane.headx[aneID];
	// this.y[i] = ane.heady[aneID];
	this.aneNo[i] = Math.floor(Math.random() * ane.num);
	var NO = this.aneNo[i];
	this.x[i] = ane.headx[NO];
	this.y[i] = ane.heady[NO];
	
	this.l[i] = 0;
	this.alive[i] = true;
	var ran = Math.random();
	if (ran <0.3) {
		this.fruitType[i] = "blue";
	}else{
		this.fruitType[i] = "orange";
	}
}

fruitObj.prototype.dead = function (i) {
	this.alive[i] = false;
}
//监听果实数量
function fruitListen() {
	var num = 0;
	for (var i = 0; i < fruit.num; i++) {
		if (fruit.alive[i]) {
			num++;
		}
		if (num < 15) {
			sendFruit();
			return;
		}
	}
}

function sendFruit(){
	for (var i = 0; i < fruit.num; i++) {
		 if (!fruit.alive[i]) {
		 	fruit.born(i);
		 	return;
		 }
	}
}

