function setup () {
    video = createCapture(VIDEO);
    video.size(500,500);

    canvas = createCanvas(550, 550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function modelLoaded () {
    comsole.log('PoseNet Is Initialized');
}

function gotPoses(result)
{
    if(result.length > 0)
    {
        console.log(results);
    }
}