let squares 
images = []
i = 0


function preload () {
  
  images.push(loadImage("images/orang.webp")) //munge


}


function setup () {
  createCanvas (windowWidth,windowHeight) 

  squares = [{x:0,y:0,xdirect:false,ydirect:true,red:100, green:100,blue:0},{x:windowWidth/2,y:windowHeight/2,xdirect:false,ydirect:true,red:0,green:200,blue:0},{x:windowWidth/4,y:windowHeight/4,xdirect:false,ydirect:true,red:0,green:255,blue:0},{x:windowWidth/8,y:windowHeight/8,xdirect:false,ydirect:true,red:0,green:255,blue:50}]  //positions and directions of squares
  xdirect = true
  ydirect = true
} 

function drawsquare(square){
  fill(square.red,square.green,square.blue)
    rect (square.x,square.y,50,50) //moving square
    
    if (square.xdirect) {
      square.x += 2
    } else {
      square.x -= 2
    } // x axis direction
  
    if (square.x > windowWidth-50){
      square.xdirect = false
    }  // x axis boundary
  
    if (square.x < 0){
      square.xdirect = true 
    } // x axis opposite boundary
  
    if (square.ydirect) {
      square.y += 2
    } else {
      square.y -= 2
    } // y axis direction
  
    if (square.y > windowHeight-50){
      square.ydirect = false
    } // y axis boundary
  
    if (square.y < 0){
      square.ydirect = true
    } // opposite direction
}

function draw () {
  clear ()
  image(images[i], 0,0,windowWidth,windowHeight)

  textSize(100)
  fill(0,200,0)
  strokeWeight(3)
  text ("Nijel",windowWidth-200,windowHeight-30)
  
  for (let square of squares){
    drawsquare(square)
  }
} 
