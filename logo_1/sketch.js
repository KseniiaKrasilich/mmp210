// kseniia krasilich logo-1
var r = 0;
var rr = 0;
var rrr = 0;
var rrrr = 0;
var c = 5;
var s = 100;
var b = 100;
var bb = 100;
var speed = 25;
function setup() {
	createCanvas(1200, 900);
}
function draw() {
	background(220);
	push();
   
	translate(width/2, 0);
	

	if (r < PI) {
        r = map(frameCount, 0, 20, 0, PI*2);
    }
    rotate(r); 
    
    fill(100, rr, 100);
	noStroke();
	
	rr += c;
	if (rr > 255 || rr < 0) {
		c *= -1;
	}
    
	ellipse(0, -500, s);
    s+= 10
    if(s > 500){
        s=500
       }
    	
pop();
   
   textSize(100);
    fill(rr, 0, 100);
    textFont('Comic Sans MS');
	textAlign(CENTER);
    text('MMP 210', bb, 500);
    bb += speed;
	if (bb > 600 ) {
		speed *= 0;
        
	}
  
   pop();
    ellipse(200, 200, s);
    pop();
    fill(100, 0, rr);
    ellipse(1000, 200, s);
    pop();
    fill(100, rr, 0);
    ellipse(1000, 800, s);
    pop();
    fill(rr, 70, 0);
    ellipse(200, 800, s);
    pop();
    translate(200, 200);
	var rrr = frameCount / 40 * PI;
	rotate(rrr);
	rect(100, 100, 100, 100);
    pop();
    fill(rr, 0, 0);
    translate(400, 0);
	var rrrr = frameCount / 40 * PI;
	rotate(rrrr);

	rect(300, 200, 100, 100);
}
