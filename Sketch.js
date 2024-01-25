function setup() {
  CANVAS_HEIGHT = 400
  CANVAS_WIDTH = 600
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  sun = 400
  
}

function draw() {
  background(0, 0, 87);
  fill(254, 255, 141)

  //this is where i gave up on adding sun beam
  //i asked yoyo to add radients around the sun instead
  //for (var i = 0; i < 600; i += 30) {
    //triangle(CANVAS_WIDTH/2, CANVAS_HEIGHT/2, i, i, i, i+30)
  //}
  
  noStroke();
  fill(255, 141, 18);
  if(sun>144){
    circle(300, sun--, 150);
  }
  else if(sun==144){
    circle(300, sun, 150);
  }  

  fill(10, 56, 226)
  rect(0, CANVAS_HEIGHT/2-40, CANVAS_WIDTH, CANVAS_HEIGHT/2+40)
  noFill();
  
}
