function preload(){
    nose=loadImage("https://i.postimg.cc/VvmLBzT7/red-nose.png")
    hat=loadImage("https://i.postimg.cc/HLMy6sZH/unnamed-2.png")


}

function setup(){
    canvas = createCanvas( 400 , 400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(400,400);
    video.hide();
    posenet= ml5.poseNet(video,modelLoaded);
    posenet.on('pose', gotPoses);



}

nosex=0
nosey=0
headx=0
heady=0
function gotPoses(results){
if(results.length > 0)
{
    console.log(results);
    //results, 0 , pose, nose, x/y
    console.log("nose x= "+ results[0].pose.nose.x);
    console.log("nose y= "+ results[0].pose.nose.y);
    nosex= results[0].pose.nose.x ;
    nosey= results[0].pose.nose.y ;
    headx=results[0].pose.leftEye.x;
    heady=results[0].pose.leftEye.y;
    

}
}

function modelLoaded(){
    console.log('Model has been loaded!')
}

function draw(){
image(video, 0 , 0 , 400, 400);
fill(255,0,0);
stroke(255,0,0);

image(nose,nosex-10,nosey-10,40,40)
image(hat,headx-60,heady-200,100,100)


}
function takesnapshot(){
    save('myFilterImage.png')
}
