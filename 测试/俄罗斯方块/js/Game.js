(function(){
	var Game = window.Game = function(){
		this.table = null;
		this.d = 0;
		this.block = new Block();
		this.map = new Map();
		this.init();
		this.start();
		this.bindEvent();
	}
	Game.prototype.init = function(){
		this.table = document.createElement("table");
		document.body.appendChild(this.table);
		for(var row = 0 ; row < 20 ; row++){
			var tr = document.createElement("tr");
			for(var col = 0 ; col < 12 ; col++){
				var td = document.createElement("td");
				tr.appendChild(td);
			}
			this.table.appendChild(tr);
		}
	}
	Game.prototype.changeColor = function(row,col,color){
		this.table.getElementsByTagName("tr")[row].getElementsByTagName("td")[col].style.background = color;
	}
	Game.prototype.clear = function(){
		for(var row = 0 ; row < 20 ; row++){
			for(var col = 0 ; col < 12 ; col++){
				 this.changeColor(row,col,"white");
			}
		}
	}
	Game.prototype.start = function(){
		var self = this;
		setInterval(function(){
			self.d++;
			self.clear();
			self.d % 30 == 0 && self.block.update();
			self.block.render();
			self.map.render();
		},20);
	}
	Game.prototype.bindEvent = function(){
		var self = this;
		document.onkeydown = function(event){
			switch(event.keyCode){
				case 37:
					self.block.goLeft();
					break;
				case 38:
					self.block.changeDirection();
					break;
				case 39:
					self.block.goRight();
					break;
				case 40:
					self.block.goBottom();
					break;
			}
		}
	}
})();