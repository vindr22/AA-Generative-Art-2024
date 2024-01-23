function setup() {
  CANVAS_HEIGHT = 400
  CANVAS_WIDTH = 600
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  light_H = 400
  light_W = 600
  yCoor = 0

}

function draw() {
  background(0, 0, 87);
  fill(254, 255, 141)
  for (var i = 0; i < 600; i += 30) {
    //debug line 16 plz
    triangle(CANVAS_WIDTH/2, CANVAS_HEIGHT/2, i, i, i, i+30)
  }
  fill(255, 105, 65)
  circle(CANVAS_WIDTH/2, CANVAS_HEIGHT/2, 225);
  fill(15, 117, 246)
  rect(0, CANVAS_HEIGHT/2, CANVAS_WIDTH, CANVAS_HEIGHT/2)
}
