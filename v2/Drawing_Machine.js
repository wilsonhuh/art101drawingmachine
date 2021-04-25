let array = []

function setup() {
createCanvas(windowWidth,windowHeight);
strokeWeight(50);
noFill();
background(200,100,200);   
}


function draw() {

if (mouseIsPressed){
    stroke(map(mouseX, 400, 600, 0, 60, true))
    line(width- mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    line(mouseX, mouseY, pmouseX, pmouseY);
  
//  line(mouseX, mouseY, pmouseX, pmouseY);
//  array.push([mouseX, mouseY]);
}

}

function keyTyped(){
  if (key === 's'){
    saveCanvas('fileName','png');
  } else if (key === 'a'){

beginShape();    
    for(let i = 0; i < array.length - 1; i++){
    //line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
    curveVertex(array[i][0], array[i][1]);
  }
endShape();  
  }
  
  return false;
}  
