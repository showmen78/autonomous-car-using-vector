const len = 300;

class Sensor{
  constructor(start,angle){
    this.start= start;//start point of the sensor (car position )
    this.angle = angle; // angle of the sensor wrt the car
    
    this.end = createVector(0,0)
    this.direction = createVector(0,0)
    
    
  }
  
  checkIntersection(obstacle){
    // lines is a list of line-> {start:vector(x,y),end:vector(x,y)}
    //returns the intersection point 
    let line1= {start:this.start,end:this.end};
    let l1 =null;
    
    for(let i=0;i<obstacle.length;i++){
      l1 = findIntersection(line1,obstacle[i])
      
      if(l1 !== null){
        return l1
      }
    }
    

   // if no intersection , then return null
    return null;
  }
  
  show(){
    stroke(245, 245, 245)
    line(this.start.x,y(this.start.y),this.end.x,y(this.end.y));
  }
  
  update(carPos,carAngle,obstacle){
    //set the car position as the start position of the sensor
    // obstacle is a list of line-> {start:vector(x,y),end:vector(x,y)}
    this.start=carPos;
    
    // calculate the end points of the sensors
    this.end.x = sin(this.angle + carAngle);
    this.end.y = cos(this.angle + carAngle);
    
    //multiply the len with the unit vector representing sensor direction.
    this.end = this.end.mult(len);
    this.end.add(carPos); //end point wrt to the origin
    
    //check if it intersect with any obstacles
    let intersection = this.checkIntersection(obstacle)
    
    if (intersection !== null){
      //if there is intersection , then the intersection point is the end point of the sensor.
      this.end= intersection;
    }
    
    //direction of the sensor from car
    this.direction = p5.Vector.sub(this.end,this.start)
    
    this.show();
  }

















































}