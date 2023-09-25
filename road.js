
class Road{
  constructor(segment,roadWidth){
    
    // segment: no of section the height of the screen will be divided into
    this.segment=segment;
    
    this.heightGap = height/segment; //vertical difference between to point on the screen.
    
    this.roadWidth = roadWidth; //width of the road
    
    this.leftLine=[]//contains the info of the left lines
    this.rightLine=[] //contains the info of the right lines.
    
    
    this.leftObstacle=[];
    this.rightObstacle=[]
    
    
   // this.generateRoad(segment)
    
    this.leftLine.push(createVector(width/2-this.roadWidth/2,0))
    this.rightLine.push(createVector(width/2+this.roadWidth/2,0))
    
    this.velocity=createVector(0,0);
    
    this.generateRoad(segment)
    
    
    // contains the information about the obstacle 
      

  
  
  }
  
  generateRoad(segment){
    
    for(let i=1;i<segment;i++){
      let x= this.leftLine[i-1].x
      this.leftLine[i]=createVector(x,this.leftLine[i-1].y+this.heightGap);
      this.rightLine[i]=createVector(x+this.roadWidth,this.leftLine[i-1].y+this.heightGap);
      
      // line(this.leftLine[i-1].x,y(this.leftLine[i-1].y),this.leftLine[i].x,y(this.leftLine[i].y))
      // line(this.rightLine[i-1].x,y(this.rightLine[i-1].y),this.rightLine[i].x,y(this.rightLine[i].y))
      
      
      
      this.leftObstacle.push({
        start:createVector(this.leftLine[i-1].x,this.leftLine[i-1].y),
        end:createVector(this.leftLine[i].x,this.leftLine[i].y)
      })
      
      this.rightObstacle.push({
        start:createVector(this.rightLine[i-1].x,this.rightLine[i-1].y),
        end:createVector(this.rightLine[i].x,this.rightLine[i].y)
      })
      
      
      
     
      
      

      
    }
    
    
  }
  
  updatePath(){
    let l1=[]
    let l2=[]
    for(let i=1;i<this.segment;i=i+1){
      this.leftLine[i-1].add(this.velocity);
      this.rightLine[i-1].add(this.velocity);
      
      this.leftLine[i-1].add(this.velocity);
      this.rightLine[i-1].add(this.velocity);
      
      //this.leftLine[i].add(p5.Vector.sub(this.velocity,2));
      //this.rightLine[i].add(p5.Vector.sub(this.velocity,2));
      
      stroke(255, 36, 11)
      strokeWeight(5)
      line(this.leftLine[i-1].x,y(this.leftLine[i-1].y),this.leftLine[i].x,y(this.leftLine[i].y))
      line(this.rightLine[i-1].x,y(this.rightLine[i-1].y),this.rightLine[i].x,y(this.rightLine[i].y))
      
      strokeWeight(1)
      stroke(0)
      
      l1.push({
        // start:createVector(this.leftLine[i-1].x,this.leftLine[i-1].y),
        //  end:createVector(this.leftLine[i].x,this.leftLine[i].y)
        start:this.leftLine[i-1],end:this.leftLine[i]
      })
      
      
      l2.push({
        // start:createVector(this.rightLine[i-1].x,this.rightLine[i-1].y),
        //  end:createVector(this.rightLine[i].x,this.rightLine[i].y)
        start:this.rightLine[i-1],end:this.rightLine[i]
      })
      
      
      
     beginShape()
      

      noStroke()
      
      fill(2, 28, 61)
      vertex(this.leftLine[i-1].x,y(this.leftLine[i-1].y))
      vertex(this.rightLine[i-1].x,y(this.rightLine[i-1].y))
      vertex(this.rightLine[i].x,y(this.rightLine[i].y))
      vertex(this.leftLine[i].x,y(this.leftLine[i].y))
      
   
      
    endShape()
    stroke(1)
    }
    
    this.leftObstacle = l1;
    this.rightObstacle= l2;
    
    
   //if any point is outside of the screen , then bring it back to the screen
    if(this.leftLine[1].y<-10){
      let a= this.leftLine.shift()
      let x= this.leftLine[this.leftLine.length-1].x + random(-10,10)*random(5,15)
      let y= this.leftLine[this.leftLine.length-1].y + this.heightGap
      this.leftLine.push(createVector(x,y))
    }
    
    if(this.rightLine[1].y<-10){
      let a= this.rightLine.shift()
      let x= this.leftLine[this.leftLine.length-1].x+this.roadWidth;
      let y= this.rightLine[this.rightLine.length-1].y + this.heightGap
      this.rightLine.push(createVector(x,y))
    }
    
  }
  
  
  
  
  

  
}