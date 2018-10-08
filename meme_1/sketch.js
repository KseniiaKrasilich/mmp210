// kseniia krasilich meme#1
var palms;
function preload(){
	palms=loadImage("palms.jpg");
}
function setup(){
	createCanvas(500,800);
}
function draw(){
	background(0);
	image(palms,0,0, width, height);
    tint(140, 11, 140);
	fill(225);
	textAlign(CENTER);
	textSize(80);
    textFont('Georgia');
	text("California", width/2, height/4);
}
