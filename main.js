img="";
nx=0;
ny=0;
mx=0;
my=0;

function preload() {
	world_start = loadSound("world_start.wav");
	mj=loadSound("jump.wav");
	mc=loadSound("coin.wav");
	ko=loadSound("gameover.wav");
	d=loadSound("mariodie.wav");
	mk=loadSound("kick.wav");
	setSprites();
	MarioAnimation();
	img= loadImage("mario.jpg");
}

function setup() {
	canvas = createCanvas(650,400);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video=createCapture(VIDEO);
	video.size(600,300);
video.parent("gc");
	poseNet= ml5.poseNet(video,ml);
	poseNet.on('poses',gp);
}

function draw() {
	background("#D3D3D3");
	if(nx>300){
		mx=mx-1
	}
	if(nx<=300){
		mx=mx+1
	}
	if(ny<150){
		my=my-1;
	}
	if(ny>=150){
		my=my+1
	}
	image(img,mx,my,40,70);
	game();
}

function ml(){
	console.log("Model Loaded!");
}

function gp(results){
if(results.length>0){
	nx=results[0].pose.nose.x;
	ny=results[0].pose.nose.y;
	console.log("Nose X = "+nx+", Nose Y = "+ny);
}
}





