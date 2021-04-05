let array = []

function setup() {
createCanvas(600,600);
strokeWeight(20);
noFill();
background(150,49,150);   
}


function draw() {

if (mouseIsPressed){
  line(mouseX, mouseY, pmouseX, pmouseY);
  array.push([mouseX, mouseY]);
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
