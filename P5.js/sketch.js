function setup() {
  createCanvas(400, 300);
  print("I love drawing")
  
    background(0);

}

function draw() {
  // background(220,0,200);
  // background(0);

  
  // line(0,50,400, 300);
  // rectMode(CENTER);
  // fill(0,0,255);
  // stroke(50,300,0);
  // strokeWeight(10);
  // rect(200,150,150,150); 
  
  noStroke();
  fill(255,50);
  // ellipse (200,150,75,75)
  ellipse (mouseX,mouseY,75,75)

}
function mousePressed(){
    background(0);

}