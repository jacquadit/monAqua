//monAqua2bis.js
//deplacement d'un poisson
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");


const xVitesse =0;
const yVitesse = 0; 
	
function ImageLoader(src) {
	this.src = src; //source de l'image
}
//Définition de la méthode load dans le prototype
ImageLoader.prototype.load = function(x,y){
	var img = new Image(); //création d'une nouvelle instance de l'image
	img.src= this.src;
	this.x = x;
	this.y = y
	img.onload=function(){   //assignation de la fonction onload à l'image
		ctx.beginPath();
		ctx.drawImage(this, this.x,this.y, canvas.width, canvas.height);
	}
}


function resetCanvas() {
	ctx.clearRect(0,0, canvas.width, canvas.height);
}

ImageLoader.prototype.deplacer = function() {
	var img = new Image();
	img.src = this.src;
	this.x = xVitesse;
	this.y = yVitesse;
	img.onload = function() {
	ctx.beginPath();
	ctx.drawImage(this, this.x, this.y);
}
	}

const image0 = new ImageLoader("image/monFondAqua.png");
image0.load(0,0);
resetCanvas();
var bettaDroite = new ImageLoader("image/bettaDroite.png");
bettaDroite.load(0,0);
resetCanvas();
bettaDroite.deplacer(0,0);
//bettaDroite.load(570,30);
//resetCanvas();
//var betta0 = new ImageLoader("image/betta0.png");
//betta0.load(30,300);
//bettaDroite.load(570,30);





