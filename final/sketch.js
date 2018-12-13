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
console.log(eggY);
var serial;

var portName = "COM8";

var sensorValue;



function setup() {

    createCanvas(1200,800);
    music.loop();

    

    serial = new p5.SerialPort();

    serial.on('connected', serverConnected);

    serial.on('open', portOpen);

    serial.on('data', serialEvent);

    serial.on('error', serialError);

    serial.on('close', portClose);

    

    serial.open(portName);

}



function serverConnected() {

    console.log("connected");

}



function portOpen() {

    console.log("port open");

}



function portClose() {

    console.log("port close");

}



function serialError() {

    console.log("error");

}



function serialEvent() {

    var currentString = serial.readLine();

    trim(currentString);

    if (!currentString) {

        return;

    }

    sensorValue = currentString;

}



function preload() {
	 music = loadSound('bacon.wav');
}



function draw() {
  //  console.log(eggY);
 vol = map(sensorValue, 0, 1023, 1, 0);

    eggSpeed = int(map(sensorValue, 0, 1023, 1, 30));
    baconSpeed = int(map(sensorValue, 0, 1023, 1, 40));
    
    background(0 );
    fill(red, 0 ,0 );
    ellipse(width/2, height/2, 600)
    if (baconY >= height){
        up = true;
        baconY = height-1;
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


    if (eggY >= 800){
        up = true;
        eggY = 799;
        console.log(eggY);
    } 
    
    if (eggY <= 100){
        up = false;
        eggY = 101;
        console.log(eggY);
    }
    
    if (up){
        eggY = eggY - eggSpeed;
        console.log(eggY);
    }
    else{
        eggY = eggY + eggSpeed;
        console.log(eggY);
    }
        var randomX = random(300, 1000);
        var randomY = random(200, 600);
        fill(255,255,224)
        ellipse(randomX, randomY, 35);
        
    
     
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

    red = map(sensorValue, 0, 1023, 16, 192);
    baconColor = map(sensorValue, 0, 1023, 134, 75);
    baconFatColor = map(sensorValue, 0, 1023, 193, 94);
    eggColorRed= map(sensorValue, 0, 1023, 204, 102);
    eggColorGreen= map(sensorValue, 0, 1023, 102, 51);
    
}

