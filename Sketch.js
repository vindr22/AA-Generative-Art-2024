var stars = [];
let yoff = 0.0;
let sun = 250;
let fishes = [];

function setup() {
  createCanvas(600, 400);
  
  for (let i = 0; i < 1000; i++) {
    stars[i] = new Star();
  }

  for (let i = 0; i < 14; i++) {
    fishes[i] = new Fish();
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
    let scale = this.size + sin(this.t) * 2;
    noStroke();
    ellipse(this.x, this.y, scale, scale);
  }
}

class Fish {
  constructor() {
    this.x = random(width);
    this.y = random(280, height - 25);
    this.size = random(15, 30);
    this.speed = random(1, 4);
    this.direction = random() > 0.5 ? 1 : -1; // 1 for right, -1 for left
  }
  draw() {
    fill(203, 195, 227); // Orange color for fish
    ellipse(this.x, this.y, this.size, this.size / 2);
    triangle(
      this.x - (this.size / 2)*this.direction,
      this.y,
      this.x - (this.size / 2 + this.size / 4)*this.direction,
      this.y - this.size / 4,
      this.x - (this.size / 2 + this.size / 4)*this.direction,
      this.y + this.size / 4
    );
  }
  swim() {
    this.x += this.speed * this.direction;
    if (this.x < -this.size / 2 || this.x > width + this.size / 2) {
      this.direction *= -1;
    }
  }
}

function draw() {
  background(21, 28, 50);

  // Draw stars
  fill(255, 255, 255);
  for (let i = 0; i < stars.length; i++) {
    stars[i].draw();
  }

  // Draw sun
  noStroke();
  fill(255, 254, 216);
  if (sun > 215) {
    circle(300, sun--, 150);
  } else if (sun === 215) {
    circle(300, sun, 150);
  }

  // Draw ocean
  fill(0, 0, 140);
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

  // Draw fishes
  for (let i = 0; i < fishes.length; i++) {
    fishes[i].swim();
    fishes[i].draw();
  }
}
