
var can1,
	ctx1, 
	can2,
	ctx2,
	lastTime,
	gapTime;//随机差值时间，保持动画平滑
var bgPic = new Image();
var canWidth,
	canHeight;
var ane;
var fruit;
var fishMom,
	fishMomTail = [],
	fishMomEye = [],
	fishMomBodyOrange = [],
	fishMomBodyBlue = [];

var mx,my;//mouse positon
//baby
var baby;
var babyTail = [];
var babyEye = [];
var babyBody = [];
//data
var data;
//wave
var wave;
//feed
var feed;
//漂浮物体
var dust,
	dustPic = [];

//document.body.onload = game;
window.onload = function () {
	game();
}
//enter 入口
function game() {
	init();
	lastTime = Date.now();
	gapTime = 0;
	gameloop();	
}

//初始环境	
function init() {
	//get canvas 
	can1 = document.getElementById('canvas1');//fish 
	ctx1 = can1.getContext('2d');
	can2 = document.getElementById('canvas2');//background ane fruit
	ctx2 = can2.getContext('2d');

	can1.addEventListener('mousemove',onMouseMove,false);
	bgPic.src = "./img/background.jpg";//引入背景图片

	canWidth = can1.width;
	canHeight = can1.height;
	//ane初始化
	ane = new aneObj();
	ane.init();
	//fruit初始化
	fruit = new fruitObj();
	fruit.init();
	//fishMom
	fishMom = new fishMomObj();
	fishMom.init();
	
	//baby
	baby = new babyObj();
	baby.init();

	data = new dataObj();
	mx = canWidth * 0.5;
	my = canHeight * 0.5;
	//babyTali 动画
	for (var i = 0; i < 8; i++) {
		babyTail[i] = new Image();
		babyTail[i].src = './img/babyTail' + i + '.png';
	}
	//babyEye
	for (var i = 0; i < 2; i++) {
		babyEye[i] = new Image();
		babyEye[i].src = './img/babyEye' + i + '.png';
	}
	//babyBody
	for (var i = 0; i < 20; i++) {
		babyBody[i] = new Image();
		babyBody[i].src = './img/babyFade' + i + '.png';
	}
	//fishMomTail
	for (var i = 0; i < 8; i++) {
		fishMomTail[i] = new Image();
		fishMomTail[i].src = './img/bigTail' + i + '.png';
	}
	//fishMomEye
	for (var i = 0; i < 2; i++) {
		fishMomEye[i] = new Image();
		fishMomEye[i].src = './img/bigEye' + i + '.png';
	}
	//fishMomBody
	for (var i = 0; i < 8; i++) {
		fishMomBodyOrange[i] = new Image();
		fishMomBodyBlue[i] = new Image();
		fishMomBodyOrange[i].src = './img/bigSwim' + i + '.png';
		fishMomBodyBlue[i].src = './img/bigSwimBlue' + i + '.png';
	}
	ctx1.font = "30px Verdana";
	ctx1.textAlign = 'center';
	//wave
	wave = new waveObj();
	wave.init();
	//feed
	feed = new feedObj();
	feed.init();
	//dust
	for (var i = 0; i < 7; i++) {
		dustPic[i] = new Image();
		dustPic[i].src = './img/dust' + i + '.png';
	}
	dust = new dustObj();
	dust.init();
}
//动画帧序列
function gameloop() {
	window.requestAnimFrame(gameloop);
	var now = Date.now();
	gapTime = now - lastTime;
	lastTime = now;
	if (gapTime > 40) {
		gapTime = 40;
	}
	//背景
	drawBackground();
	//ane
	ane.draw();
	//fruit
	fruit.draw();
	fruitListen();
	//fishMom
	ctx1.clearRect(0,0,canWidth,canHeight);
	fishMom.draw();
	//baby
	baby.draw();
	fishMomFruitMeet();
	fishMomBabyMeet();
	//data
	data.draw();
	//wave
	wave.draw();
	//feed
	feed.draw();
	//dust
	dust.draw();
}

//获取鼠标坐标值
function onMouseMove(e) {
	if (!data.gameOver) {
		if (e.offSetX || e.layerX) {
			mx = e.offSetX == undefined ? e.layerX : e.offSetX ;
			my = e.offSetY == undefined ? e.layerY : e.offSetY ;
		}
	}
}

















