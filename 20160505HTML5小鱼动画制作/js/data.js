var dataObj = function () {
	this.fruitNum = 0;
	this.double = 1;
	this.score = 0;
	this.gameOver = false;
	this.alpha = 0;
}


dataObj.prototype.draw = function () {
	var w = can1.width;
	var h = can1.height;

	ctx1.save();//start
	ctx1.fillStyle = 'white';
	ctx1.shadowColor = 'white';
	ctx1.shadowBlur = 10;
	ctx1.fillText("Score " + this.score , w*0.5 ,h - 20);

	//gameOver load 'game over'
	if (this.gameOver) {
		this.alpha += gapTime * 0.001;
		ctx1.fillStyle = 'rgba(255,255,255,' + this.alpha +")";
		ctx1.fillText("Game Over",w*0.5,h*0.5);
	}
	ctx1.restore();//end
}

dataObj.prototype.addScore = function() {
	this.score += this.fruitNum * 100 * this.double;
	this.fruitNum = 0;
	this.double = 1;
}	