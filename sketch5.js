var spot ={
    x: 100,
    y: 50

}

var col = {
    r:255,
    g:0,
    b:0
}

function setup()
{
  createCanvas(innerWidth,innerHeight); 
    background(0);
}

function draw()
{
    col.r = random(100, 255);
    col.g = 0;
    col.b = random (100,255);
    
    spot.x = random (0,width);
    spot.y = random (0,height);
    
    noStroke();
    fill(col.r,col.g,col.b,200);
    ellipse (spot.x, spot.y, 25, 25);
    
     if(mouseIsPressed)
    {
    fill(0);
    ellipse(mouseX,mouseY,100,100);
    }
}
