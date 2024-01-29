var stars = [];
let yoff = 0.0;
sun = 250

function setup() {
  createCanvas(600, 400);
  for (var i = 0; i < 1000; i++) {
		stars[i] = new Star();
	}
}

class Star {
	constructor() {
		this.x = random(width);
		this.y = random(height);
		this.size = random(0.25, 3);
		this.t = random(TAU);
	}
	draw() {
		this.t += 0.1;
		var scale = this.size + sin(this.t) * 2;
		noStroke();
		ellipse(this.x, this.y, scale, scale);
	}
}

function draw() {
  background(21, 28, 50);
  
  //star
  fill(255,255,255)
  for (var i = 0; i < stars.length; i++) {
		stars[i].draw();
	}
  
  //sun
  noStroke();
  fill(255, 254, 216);
  if(sun>215){
    circle(300, sun--, 150);
  }
  else if(sun==215){
    circle(300, sun, 150);
  }  

  //ocean
  fill(0,0,140);

  beginShape();

  let xoff = 0; 

  for (let x = 0; x <= width; x += 10) {

    let y = map(noise(xoff, yoff), 0, 1, 200, 300);

    vertex(x, y);
    xoff += 0.05;
  }

  yoff += 0.01;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
  
}
