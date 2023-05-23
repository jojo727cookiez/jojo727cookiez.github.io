function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('grey')
  fill('purple');
  ellipse(200,200,200,300);
  fill('blue')
  ellipse(160,150,40,60)
  fill('blue')
  ellipse(240,150,40,60)
  fill('orange')
  triangle(200,195,185,225,200,225)
  noFill(blue);
  
  bezier(250, 250, 200, 280, 170, 260, 140, 250, 160, 260, 100, 0);
  
  //Show Mouse coordinates
  textSize(20)
  strokeWeight(1)
  fill(0,0,0);
  text('Mouse X:  '+ mouseX,0,20);
  text('Mouse Y:  '+ mouseY,0,40);
  

  

  
}