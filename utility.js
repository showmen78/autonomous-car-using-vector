let fps = 60;
const dt = 1/fps

function y(x){
  return height-x;
}



function findIntersection(line1, line2) {
  let x1 = line1.start.x;
  let y1 = line1.start.y;
  let x2 = line1.end.x;
  let y2 = line1.end.y;
  let x3 = line2.start.x;
  let y3 = line2.start.y;
  let x4 = line2.end.x;
  let y4 = line2.end.y;

  let den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);

  if (den === 0) {
    // Lines are parallel and do not intersect
   // line(line2.start.x,line2.start.y,mouseX,mouseY)
    return null;
  }

  let t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den;
  let u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / den;

  if (t >= 0 && t <= 1 && u >= 0 && u <= 1) {
    // Intersection point lies within both line segments
    let intersectionX = x1 + t * (x2 - x1);
    let intersectionY = y1 + t * (y2 - y1);
    
    //line(line2.start.x,line2.start.y,intersectionX,intersectionY)
    return createVector(intersectionX, intersectionY);
  } else {
    // Lines do not intersect within their segments
  //  line(line2.start.x,line2.start.y,mouseX,mouseY)
    return null;
  }
}



function takeInput(car){
 if (keyIsDown(87)){
    // w key is pressed then accelerate the car
     car.accelerated=true;
    
  }
  else{
    // if w key is not pressed then car.acceleration = false
    car.accelerated=false;
  }
  
  if (keyIsDown(65)){
    //turn left
    car.turn = -1
  }
  
  else if (keyIsDown(68)){
  //turn right
   car.turn =1;
}
  else{
    car.turn =0;
    
  }
}