   (function(){
	var Block = window.Block = function(){
		var blocks = {
			"L" : [0x4460,0x0e80,0xc440,0x2e00],
			"J" : [0x44c0,0x8e00,0x6440,0x0e20],
			"T" : [0xe400,0x4c40,0x4e00,0x4640],
			"O" : [],
			"Z" : [0xc600,0x4c80],
			"S" : [0x6c00,0x8c40],
			"I" : [0x4444,0x0f00],
			"B" : [0x4000]
		}
		this.type = (["L","J","T","O","Z","S","I","B"])[_.random(0,7)];
		this.typeAllShape = blocks[this.type];
		this.direction = _.random(0,this.typeAllShape.length - 1);
		this.shape = this.typeAllShape[this.direction];
		this.row = 0;
		this.col = 4;
		this.color = ({
			"L" : "red",
			"J" : "orange",
			"T" : "skyblue",
			"O" : "purple",
			"Z" : "gold",
			"S" : "green",
			"I" : "Coral",
			"B" : "brown"
		})[this.type];
		this.colorNumber = ({
			"L" : 1,
			"J" : 2,
			"T" : 3,
			"O" : 4,
			"Z" : 5,
			"S" : 6,
			"I" : 7,
			"B" : 8
		})[this.type];
	}
	Block.prototype.render = function(){
		for(var i = 1 ; i <= 4 ; i++){
			for(var j = 1 ; j <= 4 ; j++){
				var zhi = dedaomouwei(this.shape,i,j);
				zhi && game.changeColor(i + this.row - 1, j + this.col - 1,this.color);
			}
		}
	}
	Block.prototype.update = function(){
		this.goDown();
	}
	Block.prototype.goDown = function(){
		var r = this.row + 1;
		if(checkCanMove(this.shape,r,this.col)){
			this.row++;
			return true;
		}else{
			game.block = new Block();
			for(var i = 1 ; i <= 4 ; i++){
				for(var j = 1 ; j <= 4 ; j++){ 
					dedaomouwei(this.shape,i,j) && game.map.setValue(this.row + i - 1 , this.col + j - 1 , this.colorNumber);
				}
			}
			game.map.eliminateLine();
			return false;
		}
	}
	Block.prototype.goLeft = function(){
		var c = this.col - 1;
		if(checkCanMove(this.shape,this.row,c)){
			this.col--;
		}
	}
	Block.prototype.goRight = function(){
		var c = this.col + 1;
		if(checkCanMove(this.shape,this.row,c)){
			this.col++;
		}
	}
	Block.prototype.goBottom = function(){
		while(this.goDown()){};
	}
	Block.prototype.changeDirection = function(){
		var d = this.direction + 1;
		if(d > this.typeAllShape.length - 1){
			d = 0;
		}

		var s = this.typeAllShape[d];

		if(checkCanMove(s,this.row,this.col)){
			this.direction = d;
			this.shape = s;
		}
	}
	function checkCanMove(shape,row,col){
		for(var i = 1 ; i <= 4 ; i++){
			for(var j = 1 ; j <= 4 ; j++){
				if(
					dedaomouwei(shape,i,j) != 0 &&
					game.map.getValue(row + i - 1 , col + j - 1) != 0
				){
					 return false;
				}
			}
		}
		return true;
	}
	function dedaomouhang(xingzhuang,row){
		return ((xingzhuang >> (4 * ( 4 - row )))) & 0xf;
	}
	function dedaomouwei(xingzhuang,row,col){
		return (dedaomouhang(xingzhuang  ,row) >> ( 4 - col )) & 0x1;
	}
})();


	// var blocks = {
	// 			"L":[0x4460,0x0e80,0xc440,0x2e00],
	// 			"J":[0x44c0,0x8e00,0x6440,0x0e20],
	// 			"T":[0xe400,0x4c40,0x4e00,0x4640],
	// 			"O":[],
	// 			"Z":[0xc600,0x4c80],
	// 			"S":[0x6c00,0x8c40],
	// 			"I":[0x4444,0x0f00],
	// 			"B":[0x4000]
	// 		}
	// Block.prototype.changeDirection = function(){
	// 	var d = this.direction + 1;
	// 	if (d > this.typeAllShape.length - 1) {
	// 		d=0;
	// 	}
	// 	var s = this.typeAllShape[d];
	// 	if (checkCanMove(s,this.row,this.col)) {
	// 		this.direction = d;
	// 		this.shape = s;
	// 	}
	// }
	// function checkCanMove(shape,row,col){
	// 	for (var i = 1; i < =4; i++) {
	// 		for (var j = 1; j < =4; j++) {
	// 			if (
	// 				dedaomouwei(shape,j,i) != 0 && game.map.getValue(row +i -1,col +j -1) ! =0
	// 				) {
	// 				return false;
	// 			}
	// 		}
	// 	}
	// 	return true;
	// }