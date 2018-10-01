function setup() {
	createCanvas(1500, 950);
}
var eyeSize= 70
var eyeWhiteSize= 40
var puppilsSize= 15
var cheeksSize= 70
var whiteEyeY= 390
var puppilsEyeY= 400
var glassesSizeW= 130
var glassesSizeH= 40
var glassesEyeY= 390
var cheeksY= 520
var hairY= 200
var faceY= 250
var hairTopY= 180

function draw() {
	background('#F0F0F0');


// hair
fill('#4D332B');
stroke(51);
rect(440, 200, 500, 600, 20,15,10,5)


// face
fill('#D6B45F');
stroke(51);
strokeWeight(3);
rect(540, 250, 300, 500,)

// hairtop
fill('#4D332B');
stroke(51);
strokeWeight(3);
rect(410, hairTopY, 350, 150,)

// eyes
fill('#EFA081');
stroke(51);
strokeWeight(3);
ellipse(600, whiteEyeY, eyeSize, );
ellipse(780, whiteEyeY, eyeSize, );
// white eyes
stroke('#EDF4F9');
strokeWeight(11);
ellipse(600, whiteEyeY, eyeWhiteSize);
ellipse(780, whiteEyeY, eyeWhiteSize);
// pupils
fill('#020202');
stroke(51);
ellipse(610, puppilsEyeY, puppilsSize);
ellipse(790, puppilsEyeY, puppilsSize);

// hat
noStroke();
triangle(mouseX, mouseY+30, mouseX+250, mouseY+30, mouseX+140, mouseY-185);
rect(mouseX-20, mouseY-10, 280, 50)
fill('#E57917');
rect(mouseX, mouseY, 250, 20)

// broom
rect(mouseX-220, mouseY+160, 35, 400,)
fill('#1C0F0B');
triangle(mouseX-200, mouseY+190, mouseX-340, mouseY-40, mouseX-100, mouseY-40);
// triangle(240, 380, 100, 150, 340, 150);

// noStroke();
// triangle(440, 220, 690, 220, 580, 5);
// rect(420, 200, 280, 50)
// fill('#E57917');
// rect(440, 190, 250, 20)

//nose
fill('#EA8F73');
stroke(51);
strokeWeight(3);
rect(670, 480, 35, 90,10)
//cheeks
fill('#E0784F');
noStroke();
ellipse(600, cheeksY, cheeksSize);
ellipse(780, cheeksY, cheeksSize);
//lips
fill('#E0784F');
stroke('#DB4516');
strokeWeight(10);
var mouthSize = map(mouseX, 0, width, 5, 400);
mouthSize = max(0, mouthSize);
rect(610, 620, 140, mouthSize,10)
// rect(610, 620, 140, 40,10)

var glassesSize = map(mouseX, 0, width, 5, 200);
glassesSize = max(0, glassesSize);
fill('#E0E1E2');
strokeWeight(3);
stroke(51);
rect(520, glassesEyeY, glassesSize,glassesSizeH)
rect(720, glassesEyeY, glassesSize, glassesSizeH)
}
