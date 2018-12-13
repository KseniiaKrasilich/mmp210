//Final
var vol;
var music;
var eggX = 500;
var eggY = 10;
var eggSpeed = 30;
var baconX = 700;
var baconY = 200;
var baconSpeed = 40;
var red;
var eggColor;
var baconFatColor;
var baconColor;
var up = false;
var eggColorGreen;
var eggColorRed;



function preload() {
	 music = loadSound('bacon.wav');
}

function setup()  {
createCanvas(1200,800);
    music.loop();
}





function draw() {
    console.log(music);
 vol = map(mouseY, 0, height, 0, 1);
music.setVolume(vol);
    eggSpeed = map(mouseY, 0, height, 0, 30);
    baconSpeed = map(mouseY, 0, height, 0, 40);
    
    background(0 );
    fill(red, 0 ,0 );
    ellipse(width/2, height/2, 600)
    if (baconY > 500){
        up = true;
        baconY = 499;
    } 
    
    if (baconY <= 0){
        up = false;
        baconY = 1;
    }
    
    if (up){
        baconY = baconY - baconSpeed;
    }
    else{
        baconY = baconY + baconSpeed;
    }


    if (eggY > 800){
        up = true;
        eggY = 799;
    } 
    
    if (eggY <= 100){
        up = false;
        eggY = 101;
    }
    
    if (up){
        eggY = eggY - eggSpeed;
    }
    else{
        eggY = eggY + eggSpeed;
        
        var randomX = random(300, 1000);
        var randomY = random(200, 600);
        fill(255,255,224)
        ellipse(randomX, randomY, 35);
        
    }
     
    fill(baconColor, 0, 0)   
    rect(baconX, baconY, 200, 400);
    fill(255, baconFatColor, baconFatColor)
    rect(baconX+10, baconY, 30, 400);
    rect(baconX+150, baconY, 15, 400);
    rect(baconX+100, baconY, 15, 350);


    fill(eggColorRed, eggColorGreen, 0)
    ellipse(eggX, eggY, 300);
    fill('white')
    ellipse(eggX, eggY, 250);
    fill('#FFFF00')
    ellipse(eggX-40, eggY-20, 100, 60);
    
//    baconY = baconY + baconSpeed;
//    if (baconY > 500 || baconY < 0){
//        baconSpeed *= -1;
//    }

    red = map(mouseY, 0, height, 16, 192);
    baconColor = map(mouseY, 0, height, 134, 75);
    baconFatColor = map(mouseY, 0, height, 193, 94);
    eggColorRed= map(mouseY, 0, height, 204, 102);
    eggColorGreen= map(mouseY, 0, height, 102, 51);
    
}

