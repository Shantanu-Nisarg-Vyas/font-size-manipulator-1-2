function setup() {
    video = createCapture(VIDEO);
    video.size(1000, 900);
    canvas = createCanvas(1000, 1000);
    canvas.position(1234, 145);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function draw() {
    background("#C71585");
}

function modelLoaded() {
    console.log("PoseNet Initialized!")
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
    }
}