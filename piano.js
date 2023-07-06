status = "";
img = "";
objects = [];
function preload(){
    img = loadImage('piano.jpg');
}
function setup(){
    canvas = createCanvas(380, 380);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function draw(){
    image(img, 0, 0, 380,380);
}
function modelLoaded(){
    status = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(results){
console.log(results);
objects = results;
}