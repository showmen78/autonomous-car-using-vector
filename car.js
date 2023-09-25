const carWidth=70,carHeight =70;

let acc = 30, maxSpeed = 250, friction =5,angularSpeed=2.5;

const sensorNo=10; //TOTAL NO OF SENSOR WILL BE sensorNO+1 , INCLUDING THE FORWARD SENSOR WITH ANGLE 0.
const treshHold=2 //1.5


class Car{
  
  constructor(pos){
    //start - p5 vector( position of the car)
    this.pos = pos;
    
    //car angle 
    this.angle = 0;
    
    //acceleration of the car.
    this.acc=acc;
    this.speed=0;//speed of the car;
    this.velocity= createVector(0,2);//velocity of the car;
    
    this.accelerated=false;//if the car is being accelerated or not;
    
    this.forward= createVector(0,0); //forward Vector of the car;
    this.turn=0; //0-> no rotation ; 1-> turn right ; -1-> turn left;
    
    // a list of sensors
    this.sensor = []
    
    //direction of the equivalent vector of the sensors.
    this.direction= createVector(0,0);
    
    //creating sensors
    //the forward sensor, with relative angle 0 with the car.
    this.sensor.push(new Sensor(this.pos,this.angle))
    
    for (let i =0; i<sensorNo; i++){
      let angle = -PI/2 + (i*PI/(sensorNo-1));
      
      if (angle !==0){
        this.sensor.push(new Sensor(this.pos,this.angle+angle))
      }
      
    }
    
    
  }
  
  show(img){
    //show the car.
    
    //update rotation of the car
   // this.angle += this.turn*angularSpeed*dt;

    push()
    stroke(245, 245, 245)
    translate(this.pos.x,y(this.pos.y))
    rotate(this.angle);
    //rect(0-carWidth/2,0-carHeight/2,carWidth,carHeight);
    image(img,0-carWidth/2,0-carHeight/2,carWidth,carHeight)
    pop()
   
  }
  
  updateDirection(){
    
    //print(this.sensor.length)
    this.direction.mult(0);
    //print(this.direction.x,this.direction.y)
    for(let i =0;i<this.sensor.length;i++){
      this.direction.add(this.sensor[i].direction)
    }
    
    stroke(0,255,0)
    strokeWeight(2.5)
    line(this.pos.x,y(this.pos.y),this.pos.x+this.direction.x,y(this.pos.y+this.direction.y))
     
    strokeWeight(1)
    stroke(0)

  }
  
  updateRotation(){
    // rotate the car towards the direction of the equivalent direction of the sensors.
    
    
    let a= createVector(100,0)
    
    //calculate the cross product of the car forward vector and the direction vector
    let cross=p5.Vector.cross(this.forward,p5.Vector.normalize(this.direction));
    
    
    //line(this.pos.x,y(this.pos.y),a.x+this.pos.x,y(this.pos.y+a.y))
    if(cross.z !==0){
      this.angle += -1.2*cross.z*angularSpeed*dt;
    }
  
  }
  
  move(){
    //update the speed and position of the car;
    
    //calculate the forward vector of the car.
    // this.forward.x = sin(this.angle);
    // this.forward.y = cos(this.angle);
    
    //the sensor with relative angle 0 indicates the forward direction of the car.
    this.forward= p5.Vector.normalize(this.sensor[0].direction)
    
    let d= p5.Vector.mag(this.sensor[0].direction)
    if(this.accelerated || d>len/treshHold ){
      // if accelerated then set the acceleration to acc
      
      //if the car gets closer to the obstacle its acceleration decreases and vice versa.
      //if the length of the equivalent direction of the car is less than that of its
      //actual length then the acceleration will be negative.
      //this.acc= acc* -2*(len/1.7 -p5.Vector.mag(this.sensor[0].direction))/(len)
      
      this.acc= acc*((maxSpeed-this.speed)/maxSpeed)*-(len/treshHold-d)/len
    }

  
    else{
      //if no acceleration , then set the acceleration to 0
       this.acc= 10*acc*((maxSpeed-this.speed)/maxSpeed)*-(len/treshHold-d)/len
    }
    
    //if(this.speed=== maxSpeed && p5.Vector.mag(this.sensor[0].direction)===len){this.acc=0}
    
    //calculate the new speed value
    this.speed = max(0,min(this.speed+(this.acc-friction)*dt,maxSpeed));
    
    //calculate the new velocity.
    this.velocity.x= this.forward.x*this.speed*dt;
    this.velocity.y= this.forward.y*this.speed*dt;

    //update the position of the car
    //this.pos.add(this.velocity);
    
  }  
  
  

  
  update(obstacle,img){
  
    //this.updateRotation()
    this.move()
    this.show(img)
    //this.sensor.update(this.pos,this.angle,obstacle)
    this.sensor.forEach((s)=>{
      s.update(this.pos,this.angle,obstacle)
    })
  
    //update the equivalent direction of the car
    this.updateDirection()
    this.updateRotation()
  
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
}