//mom fruit meet
function fishMomFruitMeet() {
	if (!data.gameOver) {
		for (var i = 0; i < fruit.num; i++) {
			if (fruit.alive[i]) {
				var l = calLength2(fruit.x[i],fruit.y[i],fishMom.x,fishMom.y);
				if (l < 900) {
					//fruit eat
					fruit.dead(i);
					//果实数量增加
					data.fruitNum++;
					fishMom.fishMomBodyCount++;
					if (fishMom.fishMomBodyCount > 7) {
						fishMom.fishMomBodyCount = 7;
					}
					//分数double设定	
					if(fruit.fruitType[i] == 'blue'){
						data.double = 2;
					}
					//产生光圈
					wave.born(fruit.x[i],fruit.y[i]);
				}
			}
		}
	}
}

//mom baby meet
function fishMomBabyMeet() {
	if (data.fruitNum > 0 &&  !data.gameOver) {
		var l  = calLength2(fishMom.x,fishMom.y,baby.x,baby.y);
		if (l < 900) {
			//大鱼碰到小鱼，满血复活
			baby.babyBodyCount = 0;

			fishMom.fishMomBodyCount = 0;
			//srore update
			data.addScore();
			//feed fruit
			feed.born(baby.x,baby.y);
		}
	}
}