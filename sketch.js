let obstacle =[];

let center;

let car;
let road;
let roadWidth=150

let img;

function preload(){
  img  = loadImage('https://png.pngtree.com/png-vector/20230110/ourmid/pngtree-car-top-view-image-png-image_6557068.png');
}

function setup() {
  
  frameRate(fps)
  
  createCanvas(windowWidth, windowHeight);
  center =createVector(width/2,height/2);
  
  let l= {start:createVector(100,100),end:createVector(300,350)}
  //obstacle.push(l);
  
  road= new Road(10,roadWidth)
  road.generateRoad(10)
  car= new Car(center);
  
  
}

function draw() {
  background(255, 134, 20);
  obstacle =[...road.leftObstacle,...road.rightObstacle]
  
  
  road.velocity= p5.Vector.mult(car.velocity,-1);
  road.updatePath()
  car.update(obstacle,img)
  
  textSize(20)
  textAlign(LEFT,TOP)
  fill(0)
  text('speed '+car.speed.toFixed(0),20,10)
  text('acceleration '+car.acc.toFixed(2),20,30)
  
  
  //print(obstacle)
  
  //line(100,y(100),300,y(350));
  
  //takeInput(car)
  
 //noLoop()
}