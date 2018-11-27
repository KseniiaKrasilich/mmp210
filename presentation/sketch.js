//Presentation

var slide = 0;
var potentiometer;
var egg;
var bacon;

function preload() {
    potentiometer = loadImage("220px-Potentiometer.jpg");
    bacon = loadImage("bacon.png");
   egg = loadImage("egg.png");

}

function setup() {

    createCanvas(900, 600);
    textSize(60);
    textFont('Georgia');
    textAlign(CENTER, CENTER);
    rectMode(CENTER);
}
function draw() {
    background(255);

		if (slide == 0) {

				text("Life on the frying pan!", width/2, height/2);
    } else if (slide == 1) {
        textSize(30);
        text("I will be using potentiometer to create interaction.", 460, 100);
        text("It will be functioning as a stove knob to lit and control the flame. ", 460, 150);
        image(potentiometer, width/2, height/2);
    } else if (slide == 2) {
        text("The Canva will be representing a frying pan", 460, 100);
        text("that is being heated using a potentiometer.", 460, 150);
        text("The Canva would change color with each turn", 460, 200);
        text("of the knob, painting it in red color,", 460, 250);
        text("and making Bacon and Egg dance on the pan.", 460, 300);
    
    }
    else if (slide == 3) {
        text("Meet the main characters of this story", 460, 100);
        text("Bacon and Egg.", 460, 150);
//        bezier(600, 300, 650, 350, 560, 450, 600, 500);
//        bezier(600, 500, 570, 490, 550, 530, 500, 500);
//        bezier(500, 500, 480, 450, 560, 450, 600, 500);
//        bezier(500, 500, 480, 350, 530, 450, 500, 300);
        image(bacon, width/2, height/2);
        image(egg, 300, height/2);
    }
}

function mousePressed() {
    if (mouseX > width/2) {
        if (slide < 3) {
            slide++;
        }
    } else {
        if (slide > 0) {
            slide--;
        }
    }
}
