var fishMomObj = function () {
	this.x;
	this.y;
	this.angle;//角度
	this.bigEye = new Image();
	this.bigTail = new Image();
	//tail 
	this.fishMomTailTimer = 0;
	this.fishMomTailCount = 0;
	//eye
	this.fishMomEyeTimer = 0;
	this.fishMomEyeCount = 0;
	this.fishMomEyeInterval = 1000;
	//body
	this.fishMomBodyCount = 0;
}

fishMomObj.prototype.init = function () {
	this.x = canWidth * 0.5;
	this.y = canHeight * 0.5;
	this.angle = 0;
	
}
fishMomObj.prototype.draw = function () {
	
	//commonFunctions 目标值，当前值，百分比
	//lerp 使一个值趋向目标值,使fishmom运动
	this.x = lerpDistance(mx,this.x,0.98);
	this.y = lerpDistance(my,this.y,0.98);
	//角度调整,使其跟随鼠标
	var gapY = my - this.y;
	var gapX = mx - this.x;
	var beta = Math.atan2(gapY,gapX) + Math.PI;
	this.angle = lerpAngle(beta,this.angle,0.6);

	//fishmomtail animate
	this.fishMomTailTimer += gapTime;
	if (this.fishMomTailTimer > 50) {
		this.fishMomTailCount = (this.fishMomTailCount + 1) % 8;
		this.fishMomTailTimer %= 50;
	}
	//fishmomeye animate
	this.fishMomEyeTimer += gapTime;
	if (this.fishMomEyeTimer > this.fishMomEyeInterval) {
		this.fishMomEyeCount = (this.fishMomEyeCount + 1) % 2;
		this.fishMomEyeTimer %= this.fishMomEyeInterval;
		if (this.fishMomEyeCount == 0) {
			this.fishMomEyeInterval = Math.random()*1500 + 2000;
		}else{
			this.fishMomEyeInterval = 200;
		}
	}

	ctx1.save();
	ctx1.translate(this.x,this.y);
	ctx1.rotate(this.angle);
	//绘制fishmom，眼睛，身子，尾巴
	var fishMomTailCount = this.fishMomTailCount;
	ctx1.drawImage(fishMomTail[fishMomTailCount],-fishMomTail[fishMomTailCount].width * 0.5+30,-fishMomTail[fishMomTailCount].height * 0.5);

	var fishMomBodyCount = this.fishMomBodyCount;
	if (data.double == 1) {
		ctx1.drawImage(fishMomBodyOrange[fishMomBodyCount],-fishMomBodyOrange[fishMomBodyCount].width * 0.5,-fishMomBodyOrange[fishMomBodyCount].height * 0.5);
	}else{
		ctx1.drawImage(fishMomBodyBlue[fishMomBodyCount],-fishMomBodyBlue[fishMomBodyCount].width * 0.5,-fishMomBodyBlue[fishMomBodyCount].height * 0.5);
	}
	

	var fishMomEyeCount = this.fishMomEyeCount;
	ctx1.drawImage(fishMomEye[fishMomEyeCount],-fishMomEye[fishMomEyeCount].width * 0.5,-fishMomEye[fishMomEyeCount].height * 0.5);

	ctx1.restore();
}



