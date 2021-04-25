let array = []
let noiseOffset = 0.0;
let strokeWidth = 80;

function setup() {
createCanvas(windowWidth,windowHeight);
background(200,100,200);   
noFill();
 
}


function draw() {

background(200,100,200, 1);   
strokeWeight(strokeWidth);

noiseOffset += 0.05;
strokeWidth = noise(noiseOffset) * 100;
  
//if (mouseIsPressed){

    stroke(map(mouseX, 400, 600, 0, 60, true))
    line(width- mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    line(mouseX, mouseY, pmouseX, pmouseY);
  
//  line(mouseX, mouseY, pmouseX, pmouseY);
//  array.push([mouseX, mouseY]);
//}

}

function keyTyped(){
  if (key === 's'){
    saveCanvas('fileName','png');
  } else if (key === 'c'){
    clear();

beginShape();    
    for(let i = 0; i < array.length - 1; i++){
    //line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
    curveVertex(array[i][0], array[i][1]);
  }
endShape();  
  }
  
  return false;
}  
