function setup() {
  createCanvas(400, 300);
  
}

function draw() {
  background(120);
  line(100, 0, 100, 300);
  line(200, 0, 200, 300);
  line(300, 0, 300, 300);
  
  
  if (mouseX > 0 && mouseX <= 100) {
    
  textSize(50)
    background('green')
    fill('red');
    text('I',mouseX,mouseY+100);
  }
  
  else if (mouseX > 100 && mouseX <= 200) {
    background('brown')
  textSize(50)
    fill('blue');
    text('Love',mouseX+20,mouseY);
  }
  
  else if (mouseX > 200 && mouseX <= 300) {
    background('')
    textSize(50)
    fill('orange');
    text('cats!',mouseX,mouseY-40);
  }
  
  
  else if (mouseX > 300 && mouseX <= 400) {
    background('gold');
    textSize(10);
    fill('purple');
    text(' meow meow' ,mouseX-160,mouseY);
    
  }
  
  
  
  
}







