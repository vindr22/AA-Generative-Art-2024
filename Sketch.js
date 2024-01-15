function setup() {
  CANVAS_HEIGHT = 400
  CANVAS_WIDTH = 600
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
}

function draw() {
  background(0, 0, 87);
  fill(255, 105, 65)
  circle(CANVAS_WIDTH/2, CANVAS_HEIGHT/2, 225);
  fill(15, 117, 246)
  rect(0, CANVAS_HEIGHT/2, CANVAS_WIDTH, CANVAS_HEIGHT/2)

}
