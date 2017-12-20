(function(){
	var ofs = document.getElementById('fs');
	fs = 0;
	var Map = window.Map = function(){

		this.code = [
			"xx000000000000xx",
			"xx000000000000xx",
			"xx000000000000xx",
			"xx000000000000xx",
			"xx000000000000xx",
			"xx000000000000xx",
			"xx000000000000xx",
			"xx000000000000xx",
			"xx000000000000xx",
			"xx000000000000xx",
			"xx000000000000xx",
			"xx000000000000xx",
			"xx000100000000xx",
			"xx000100000000xx",
			"xx000100000000xx",
			"xx110210000002xx",
			"xx222110000002xx",
			"xx333110000002xx",
			"xx222110222222xx",
			"xx222222222222xx",
			"xxxxxxxxxxxxxxxx",
			"xxxxxxxxxxxxxxxx",
			"xxxxxxxxxxxxxxxx",
			"xxxxxxxxxxxxxxxx",
			"xxxxxxxxxxxxxxxx",
			"xxxxxxxxxxxxxxxx"
		];
	}
	Map.prototype.render = function(){
		var arr = [null,"red","orange","skyblue","purple","gold","green","-webkit-linear-gradient(top,red,blue,yellow,pink,gold,black)","brown"];
		for(var i = 0 ; i < 20 ; i++){
			for(var j = 2 ; j < 14 ; j++){
				var zhi = this.code[i].charAt(j);
				if(zhi != "0"){
					game.changeColor(i,j - 2,arr[zhi]);
				}
			}
		}
	}
	Map.prototype.getValue = function(row,col){
		return this.code[row].charAt(col + 2);
	}
	Map.prototype.eliminateLine = function(){
		for(var i = 0 ; i < 20 ; i++){
			if(this.code[i].indexOf("0") == -1){
				this.code.splice(i,1);
				this.code.unshift("xx000000000000xx");
				fs+1;
				this.fs.innertHTML = fs;
				fs+1;
				ofs.innerHTML = fs;
			}
		}
	}
})();