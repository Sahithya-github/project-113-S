function preload() {
}

function setup() {
    canvas = createCanvas(900, 600);
    canvas.position(110, 250);

    video = createCapture(VIDEO);
  video.hide();

    color1="red";
color2="green";
    fill(color1);
    noStroke();
circle(70,90,50);
circle(800,90,50);
circle(800,570,50);
circle(70,560,50);
fill(color2);
    noStroke();
rect(90,80,700,20,20);
rect(800,110,20,450,20);
rect(60,110,20,450,20);
rect(90,550,700,20,20);
   
  }

  function draw() {
   image(video, 120, 120, 600, 400);
    
  }
  
  function take_snapshot(){    
    save('student_name.png');
  }