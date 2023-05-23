

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(1, 1, 1);
  
}

function draw() {
//stars 
  noStroke();
  fill('white');
  ellipse(12, 42, 20, 20) //draws stars
ellipse(41, 82, 20, 20) //draws stars
ellipse(91, 33, 20, 20) //draws stars
ellipse(120, 20, 20, 20) //draws stars

  
  //The Ground
  noStroke(); 
  fill('darkgray'); // colors the floor
  rect(0,400,windowWidth,100); // changed the floor dimensions 


  //The House
  fill('blue'); // colors the inside of the house 
  stroke('#85FFE3');// colors the outline of the house 
  rect(50,200,320,200); // makes the dimensions of the floor

  //Windows
  fill('pink');  // colors the inside 
  strokeWeight(10);// controles the thickness of the outline 
  stroke('brown'); // colors the outline 
  rect(100,250,50,50); //changes the dimensions of the window 
  rect(270,250,50,50); //changes the dimensions of the window 

  //Triangle
  fill('#FFD390'); // colors the inside 
  stroke('#A1F073') // colors the outline
  triangle(75,190, 360,190, 250,140); // changes the dimesions of the roof.
}