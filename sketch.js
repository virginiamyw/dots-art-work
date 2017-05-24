function setup() {
  createCanvas (400,600);

}

var brush ={
  x:20,
  y:20,
  speed: {x:10,y:20},



draw: function() {
 
 this.x = this.x + this.speed.x;
 this.y = this.y + this.speed.y;
    
 if (this.y > height || this.y < 0) {
 this.speed.y = this.speed.y * -1;
    }
      if(this.x > width || this.x < 0) {
        this.speed.x = this.speed.x * -1;
        
      }
 
  //mid square left (blue)
    noStroke();
  fill (17,41,139,5);
  rect (brush.x,brush.y,40,40);

   //mid square left (blue)
    noStroke();
  fill (17,41,139,240);
  rect (brush.x,brush.y,40,40);
  
   //uppersquare (blue)
  fill (17,41,139,240);
  rect (160,150,80,80);
  
   //lower rectangle (blue)
  fill (17,41,139,235);
  rect(200,270,80,160);
  
  //upper rectangle (orange)
  fill(255,101,83,200);
  rect(125,190,70,160);
  
  //lowersquare(blue)
  fill (17,41,139,235);
  rect(160,270,40,40);
  
  //lower small square (orange)
  fill(255,101,83,200);
  rect(195,310,45,40);
  
  //lower left square (orange)
  fill(255,101,83,200);
  rect(80,348,45,40);
  
  //lower left square (blue)
  fill (17,41,139,210);
  rect (80,308,80,80);
  
  //right square (orange)
  fill(255,101,83,190);
  rect(240,230,80,80);
  
}
 
 function setup(){
  createCanvas(100, 100, WEBGL);
  img = loadImage("assets/laDefense.jpg");
}

function draw(){
  background(0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  //pass image as texture
  texture(img);
  box(200, 200, 200);
}
      
};

var a ={
  r:23,
  g:123,
  b:20
};
  function draw() {
    brush.draw();
    background(random(255),random(255),random(255),random(255));
   
textSize(random(100));
textFont('Futura');
text("ERROR", mouseX, mouseY);
fill(255, 102, random(255));
text("ERROR", mouseX, mouseY);
fill(0, 102, 153, random(255));
text("ERROR", mouseX, mouseY);
  
  
}


function mouseDragged(){
  
  //lower orange square
  fill(255,101,83,240);
  rect(mouseX,mouseY,80,85);
  

  // prevent default
  return false;
}


function mousePressed() {
var x = 20;
  for (var i=0; i<100; i++) {
    noStroke();
    fill(255);
  //for (var x=40; var<400; x++) {  
    rect (random(width),random(height),x,40);
   
  }
}


