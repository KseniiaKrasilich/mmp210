// kseniia krasilich meme#2
var hairOrigin;
var hairAfter;
var notHappy;
var happy;
function preload(){
	hairOrigin=loadImage("original.jpg");
    hairAfter=loadImage("hair_bad.jpg");
    notHappy=loadImage("disapoitment.jpg");
    happy=loadImage("doNotCare.jpg");
}
function setup(){
	createCanvas(1200,800);
}
function draw(){
	background(0);
    
    if (mouseX > width/2 && mouseY > height/2){
    
   image(hairOrigin,0,0, 800, height);
    textAlign(CENTER);
	textSize(40);
    textFont("Comic Sans MS");    
    image(hairAfter,800,0, 400, height);
    fill('#FDFDFF');
    text("I am feeling myself", 200, 600);
    
    }else if (mouseX < width/2 && mouseY > height/2) {
    
    image(notHappy,0,0, 500, height);
    textAlign(CENTER);
	textSize(40);
    textFont("Comic Sans MS");
	
        
    image(happy,500,0, 700, height);
   
    fill('#000000');
    text("When your mom told you", 600, 650);
    text("You can be whoever you want", 650, 700);
        
//    text("That feeling when", 600, 650);
//    text("When you do not care", 650, 700);
//        
    }else if (mouseX > width/2 && mouseY < height/2) {
        
        image(notHappy,0,0, 500, height);
    textAlign(CENTER);
	textSize(40);
    textFont("Comic Sans MS");
	
        
    image(happy,500,0, 700, height);
    fill('#000000');    
    text("That feeling when", 600, 650);
    text("When you do not care", 650, 700);
    }else {
    image(hairOrigin,0,0, 800, height);
    textAlign(CENTER);
	textSize(40);
    textFont("Comic Sans MS");    
    image(hairAfter,800,0, 400, height);
    fill('#FDFDFF');
    text("That feeling when", 200, 600);
    text("You know you are origin", 250, 650);
        
    
        
    }
}
