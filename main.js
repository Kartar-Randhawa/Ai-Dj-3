song1="";
song2="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
function preload(){
    song1=loadSound("ganni.mp3")
    song2=loadSound("samaan.mp3")
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
     video=createCapture(VIDEO);
     video.hide();

     poseNet=ml5.poseNet(results,modelLoaded);
     poseNet.on('pose', gotPoses)
}
function modelLoaded(){
    console.log('PoseNet Is Initialized');
}
function gotPoses(results){
    console.log(results)
    if(results.length>0){
      rightWristX=results[0].pose.rightWristX;
      rightWristY=results[0].pose.rightWristY;
      console.log("rightWristX ="+rightWristX+"rightWristY = "+rightWristY);

      leftWristX=results[0].pose.leftWristX;
      leftWristY=results[0].pose.leftWristY;
      console.log("leftWristX ="+leftWristX+"leftWristY ="+leftWristY);
    }
}
function draw(){
    image(video,0,0,600,500);
}
function play(){
    song1.play();
    song2.play();
}