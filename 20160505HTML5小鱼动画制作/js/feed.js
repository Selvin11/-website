var feedObj =function () {
	this.x = [];
	this.y = [];
	this.alive = [];
	this.r = [];
}

feedObj.prototype.num = 5;
feedObj.prototype.init = function() {
	for (var i = 0; i < this.num; i++) {
		this.x[i] = 0;
		this.y[i] = 0;
		this.alive[i] = false;
		this.r[i] = 0;
	}
}

feedObj.prototype.draw = function () {
	ctx1.save();
	ctx1.lineWidth = 2;
	ctx1.shadowBlur = 10;
	ctx1.shadowColor = 'rgba(203,91,0,1)';
	for (var i = 0; i < this.num; i++) {
		if (this.alive[i]) {
			//绘制光圈
			this.r[i] += gapTime*0.04;
			if (this.r[i] > 100) {
				this.alive[i] = false;
				break;
			}
			var alpha = 1 - this.r[i] / 100 ;

			ctx1.beginPath();
			ctx1.arc(this.x[i],this.y[i],this.r[i],0,Math.PI*2);
			ctx1.closePath();
			ctx1.strokeStyle = "rgba(255,255,255," + alpha + ')';
			ctx1.stroke();
		}
	} 
	ctx1.restore();
}
feedObj.prototype.born = function (x,y) {
	for (var i = 0; i < this.num; i++) {
		if (!this.alive[i]) {
			this.x[i] = x;
			this.y[i] = y;
			this.alive[i] = true;
			this.r[i] = 10;
		}
	}
}