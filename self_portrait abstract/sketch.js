
function setup() {
	createCanvas(1600, 950);
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
	var x = mouseX;
	var y = mouseY;

	
// hair
fill('#4D332B');
stroke(51);
rect(mouseX-100, mouseY-50, 500, 600, 20,15,10,5)


// face
fill('#EFA081');
stroke(51);
strokeWeight(3);
rect(mouseX, mouseY, 300, 500,)

// hairtop
fill('#4D332B');
stroke(51);
strokeWeight(3);
rect(mouseX-130, mouseY-70, 350, 150,)

// eyes
fill('#EFA081');
stroke(51);
strokeWeight(3);
ellipse(mouseX+60, whiteEyeY, eyeSize, );
ellipse(mouseX+240, whiteEyeY, eyeSize, );
// white eyes
stroke('#EDF4F9');
strokeWeight(11);
ellipse(mouseX+60, whiteEyeY, eyeWhiteSize);
ellipse(mouseX+240, whiteEyeY, eyeWhiteSize);
// pupils
fill('#020202');
stroke(51);
ellipse(mouseX+70, puppilsEyeY, puppilsSize);
ellipse(mouseX+250, puppilsEyeY, puppilsSize);
// glasses
fill('#E0E1E2');
strokeWeight(3);
rect(mouseX-20, glassesEyeY, glassesSizeW,glassesSizeH)
rect(mouseX+180, glassesEyeY, glassesSizeW, glassesSizeH)

//nose
fill('#EA8F73');
stroke(51);
strokeWeight(3);
rect(mouseX+130, 480, 35, 90,10)
//cheeks
fill('#EF8EBE');
noStroke();
ellipse(mouseX+60, cheeksY, cheeksSize);
ellipse(mouseX+240, cheeksY, cheeksSize);
//lips
fill('#F498C2');
stroke('#F23B8E');
strokeWeight(10);
// rect(mouseX+70, 620, 140, mouthSize,10)
}
