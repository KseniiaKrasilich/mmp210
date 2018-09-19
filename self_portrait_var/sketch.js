function setup() {
	createCanvas(950, 950);
}

var hairColorDark = "#130C09";
var hairColorMedDark = "#352016";
var hairColorLight = "#3D2318";
var cheeklightest = "#FFE0C2";
var underEyeBrowLight = "#FCD2AC";
var underEyeBrow = "#F2A27F";
var cheekPinky = "#FFC6AF";
var eyelidPinky = "#DB806C";
var skinToneMed = "#FFBA95";
var skinUnderNoseTriangle = "#FFB587";
var skinDarkNeck = "#FFB587";
var skinForehead = "#EFAA8B";
var skinNostrilsUnder = "#FFA881";
var skinNostrilsUpper = "#DD7F66";
var skinNostrils = "#D97A55";
var skinChin = "#E79F79";
var skinNoseBridge = "#E3966F";
var skinNecklight = "#F7D1B7";
var skinLips = "#FF92A0";
var skinLipsRose = "#C4424C";
var skinLipsUpper = "#FFB0C3";
var eyeBrowLight = "#704735";
var eye = "#F2DBD3";
var eyeColorPupil = "#7E6548";
var eyeColorWhite = "#F0FFFE";

//coordinate lip
var LipAx = 354;
var LipAy = 426;
var LipBx = 384;
var LipBy = 426;

function draw() {
	background(400);

	fill(hairColorDark);
	triangle(526, 94, 506, 180, 479, 153);//2
	triangle(526, 94, 535, 151, 506, 180);//3
	triangle(535, 151, 550, 243, 506, 180);//4
	triangle(409, 260, 486, 256, 484, 267);//400
	fill(hairColorMedDark);
	triangle(440, 42, 479, 153, 401, 169);//AA
	triangle(535, 151, 603, 182, 550, 243);//6
	triangle(646, 282, 655, 475, 579, 408);//11
	triangle(440, 42, 225, 202, 275, 102);//A
	triangle( 512, 612, 579, 408, 603, 561);//51
	triangle(261, 395, 218, 549, 198, 419);//O
	fill(hairColorLight);
	triangle(275, 102, 163, 324, 175, 192);//B

	triangle(603, 182, 579, 408, 552, 320);//9
		triangle(479, 153, 198, 419, 163, 324);//E
		fill('#4D332B');
		quad(163, 324, 198, 419, 218, 549, 163, 455);//F

		triangle(479, 153, 163, 324, 225, 202);//D
		triangle(479, 153, 312, 374, 198, 419);//N
		triangle(603, 182, 552, 320, 550, 243);//8

	triangle(603, 182, 646, 282, 579, 408);//10
	triangle(552, 320, 579, 408, 508, 483);//12

	fill(hairColorMedDark)
	triangle(440, 42, 526, 94, 479, 153);//1
	triangle(440, 42, 401, 169, 225, 202);//C
	triangle(261, 395, 342, 587, 218, 549);//L
	triangle( 512, 612, 579, 408, 510, 514);//52
	triangle( 508, 483, 579, 408, 510, 514);//54

	fill(cheeklightest);//light cheeks
	triangle(382, 281, 353, 334, 330, 351);//36-1
	triangle(440, 337, 425, 388, 477, 360);//15-1
	triangle(477, 360, 458, 425, 425, 388);//14-1


fill(underEyeBrow);//under eyebrow
triangle(457, 286, 410, 278, 484, 267);//40

fill(underEyeBrowLight);//under eyebrow light
triangle(457, 286, 513, 294, 484, 267);//40-1

fill(cheekPinky);//
triangle(477, 360, 458, 425, 552, 320);//14
triangle(440, 337, 552, 320, 477, 360);//15
triangle(366, 340, 367, 388, 340, 369);//01
triangle(366, 340, 390, 374, 367, 388);//03


fill(eyelidPinky);
quad(457, 286, 500, 306, 490, 316, 455, 297);//20-1
quad(457, 286, 455, 297, 422, 317, 419, 308);//30-1
triangle(485, 330, 455, 334, 490, 316);//33-1
triangle(422, 317, 455, 334, 440, 337);//17

fill(skinToneMed);//cheack middle skin tone
//eye lead
triangle( 457, 286, 513, 294, 500, 306);//20
triangle( 410, 278, 457, 286, 419, 308);//30
triangle(435, 453, 458, 426, 425, 388);//14-11
triangle(485, 330, 552, 320, 490, 316);//33
triangle(422, 317, 398, 343, 440, 337);//17-1
triangle(440, 337, 425, 388, 398, 343);//15-11
triangle(398, 343, 382, 281, 422, 317);//18
triangle( 308, 508, 366, 540, 342, 587);//055
triangle( 342, 587, 366, 540, 406, 651);//58
triangle(324, 453, 308, 508, 310, 441);//PQQ
triangle( 411, 536, 508, 483, 406, 651);//56
triangle(354, 426, 324, 453, 310, 441);//PQ
triangle(506, 180, 486, 256, 479, 153);//5
triangle(425, 388, 435, 453, 410, 402);//012-1
triangle(508, 483, 383, 480, 435, 453);//16
triangle(506, 180, 550, 243, 486, 256);//7
triangle(550, 243, 513, 294, 486, 256);//22
triangle(483, 453, 458, 425, 552, 320);//13-1
triangle(435, 453, 508, 483, 458, 425);//13-11
triangle(312, 374, 288, 415, 308, 508);//P-1
triangle(312, 374, 332, 385, 310, 441);//PP
triangle(382, 281, 332, 385, 312, 374);//36-111
triangle(324, 453, 352, 480, 308, 508);//64

fill(skinUnderNoseTriangle);

triangle(360, 408, 376, 408, 367, 388);//09-1

fill(skinDarkNeck);

quad(398, 343, 425, 388, 410, 402, 400, 388);//020
triangle( 508, 483, 510, 514, 406, 651);//55
triangle( 512, 612, 406, 651, 510, 514);//53
triangle(550, 243, 552, 320, 513, 294);//21
triangle(552, 320, 490, 316, 513, 294);//31

fill(skinForehead);//regular skintone
quad(479, 153, 451, 259, 409, 260, 405, 250)//23
quad(405, 250, 409, 260, 410, 278, 382, 281)//38
triangle(410, 278, 422, 317, 382, 281);//34

fill(skinNostrilsUnder);// under nozdry
triangle(410, 402, 384, 426, 367, 388);//08
triangle(354, 426, 348, 400, 367, 388);//010

triangle(332, 385, 348, 400, 310, 441);//Q
triangle(348, 400, 354, 426, 310, 441);//QQ
triangle(384, 426, 435, 453, 410, 402);//012


fill(skinNostrilsUpper);// upper nozdry
triangle(340, 369, 367, 388, 332, 385);//02
triangle(390, 374, 400, 388, 367, 388);//04

fill(skinNostrils);//nozdry
triangle(400, 388, 410, 402, 367, 388);//06
triangle(367, 388, 348, 400, 332, 385);//07

fill(skinChin);//chin

triangle( 352, 480, 366, 540, 308, 508);//88
quad(391, 497, 411, 536, 366, 540, 374, 512);//60-1
triangle(358, 503, 374, 512, 366, 540);//61-1
triangle( 383, 480, 508, 483, 411, 536);//59
triangle(483, 453, 508, 483, 552, 320);//13
triangle(278, 433, 288, 415, 308, 508);//P-1

fill(skinNoseBridge);

triangle(312, 374, 278, 433, 261, 395);//P
//nose
quad(382, 281, 366, 340, 351, 360, 353, 334);//36
triangle(382, 281, 398, 343, 366, 340);//35
triangle(398, 343, 400, 388, 366, 340);//06
quad(332, 385, 330, 351, 353, 334, 351, 360);//36-11

fill(skinNecklight); //lhighights face
triangle( 383, 480, 391, 479, 374, 512);//60
triangle(479, 153, 486, 256, 451, 259);//23-1
quad(360, 408, 376, 408, 384, 426, 354, 426);//09
quad(352, 480, 383, 480, 374, 512, 358, 503);//061
triangle( 411, 536, 366, 540, 406, 651);//57

fill(skinLips);
triangle(384, 426, 435, 453, 370, 438);//011
triangle(370, 438, 324, 453, LipAx, LipAy);//013
triangle(435, 453, 383, 480, 372, 453);//016
triangle(383, 480, 352, 480, 372, 453);//62
triangle(372, 453, 352, 480, 324, 453);//63
fill(skinLipsRose);
triangle(370, 438, 435, 453, 324, 453);//015//rose
fill(skinLipsUpper);//uppertriangle
triangle(384, 426, 370, 438, LipAx, LipAy);//014


fill(eyeBrowLight);
triangle( 603, 561, 579, 408, 655, 475);//50 //brow
triangle(484, 267, 410, 278, 409, 260);//600
triangle(486, 256, 513, 294, 484, 267);//500

//eye
fill(eye);
quad(490, 316, 455, 334, 422, 317, 455, 297)

fill(eyeColorPupil);
noStroke();
ellipse(456, 315, 25, 30);
fill(eyeColorWhite);
ellipse(452, 315, 14, 15);
}
