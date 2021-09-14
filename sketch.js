function setup() {
  createCanvas(800, 600);
 background('white');

}

function draw() {
  noStroke();
 fill('red');
 
 // x ranges from 0 to 800
 for (var x = 0; x < 800; x += 1) {
 // calculate scaled sine
 var y = sin(x/100) * 100;
 
 // draw several points at offsets 
 for (var offset = -100; offset <= 100; offset += 10) { 
 ellipse(x + offset, y + 300 + offset, 2); 
 } 
 
 }

}