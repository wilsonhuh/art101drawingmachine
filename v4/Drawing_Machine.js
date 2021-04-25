let array = []
let noiseOffset = 0.0;
let strokeWidth = 80;
let button;

function setup() {
createCanvas(windowWidth,windowHeight);
//createCanvas(600,600);
background(135, 206, 235); 
sun();

button = createButton("Save");
button.mousePressed(save);
button.size(70,30);
button.style("font-family", "arial");
button.style("font-size", "20px");
button.position((windowWidth/2)-35,100);
}

function sun(){
strokeWeight(0);
fill(250,250,150);
ellipse(0,0,500);  
}  

function draw() {
strokeWeight(strokeWidth);

noiseOffset += 0.90;
strokeWidth = noise(noiseOffset) * 120;
  
if (mouseIsPressed){


 //   stroke(map(mouseX, windowWidth, windowHeight, 0, 60, true));
 stroke(0, random(0,20), random(0,70), 200);
    line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    line(mouseX, mouseY, pmouseX, pmouseY);
//   line(height- mouseY, width - mouseX, height - pmouseY, width - pmouseX);
//   line(mouseY, mouseX, pmouseY, pmouseX);
    

    

  
//  line(mouseX, mouseY, pmouseX, pmouseY);
//  array.push([mouseX, mouseY]);
}

}

function keyTyped(){
  if (key === 'c'){
    clear();
    background(135, 206, 235);
    sun();
  } else if (key === 's'){
   
    
function save(){
 
}  

//beginShape();    
//    for(let i = 0; i < array.length - 1; i++){
//    //line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
//    curveVertex(array[i][0], array[i][1]);
//  }
//endShape();  
  }
  
  return false;
}  
