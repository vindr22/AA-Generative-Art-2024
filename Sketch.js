let yoff = 0.0; // 2nd dimension of perlin noise
sun = 250

function setup() {
  createCanvas(600, 400);
}


function draw() {
  background(0, 0, 87);
  noStroke();
  fill(255, 141, 18);
  if(sun>215){
    circle(300, sun--, 150);
  }
  else if(sun==215){
    circle(300, sun, 150);
  }  

  fill(10, 56, 226);
  // We are going to draw a polygon out of the wave points
  beginShape();

  let xoff = 0; // Option #1: 2D Noise
  // let xoff = yoff; // Option #2: 1D Noise

  // Iterate over horizontal pixels
  for (let x = 0; x <= width; x += 10) {
    // Calculate a y value according to noise, map to

    // Option #1: 2D Noise
    let y = map(noise(xoff, yoff), 0, 1, 200, 300);

    // Option #2: 1D Noise
    // let y = map(noise(xoff), 0, 1, 200,300);

    // Set the vertex
    vertex(x, y);
    // Increment x dimension for noise
    xoff += 0.05;
  }
  // increment y dimension for noise
  yoff += 0.01;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
  
}
