let speed = 5;
let windows = [];
let windowsNum = 500;
let rbits = [];
// let colors = ['orange', 'red', 'green', 'blue', 'white', 'purple', 'aqua']


function preload() {
  for (let i = 0; i < 6; i++) {
     rbits[i] = loadImage('xd-' + i + '.png');
    // rbits[i] = loadAnimation('speenrbitld_000000.png', 'speenrbitld_000001.png', 'speenrbitld_000002.png', 'speenrbitld_000003.png', 'speenrbitld_000004.png', 'speenrbitld_000005.png', 'speenrbitld_000006.png', 'speenrbitld_000007.png', 'speenrbitld_000008.png', 'speenrbitld_000009.png');
	rbits[i].resize(width*3, height*3);
	rbits[i].delay(33);
  
}
}

class Window {
  constructor() {
    this.x = random(-width, width);
    this.y = random(-height, height);
    this.z = random(width);
    this.pz = this.z;
    this.img = random(rbits);
  }
  
  update() {
    this.z = this.z - speed;
    
    if (this.z < 1) {
      this.z = width/2;
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.pz = 1;
    }
  }
  
  show() {    
    let sx = map(this.x/this.z, 0, 4, 0, width/2);
    let sy = map(this.y/this.z, 0, 4, 0, height/2);
    
    let r = map(this.z, 0, width/2, 26, 4);

    image(this.img, sx, sy, r, r);
    // tint(this.color);
    
    this.pz = this.z;
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight, P2D);

  for(let i=0; i < windowsNum; i++) {
    windows[i] = new Window();
  }

}

function draw() {
  clear();
  // frameRate(60);
   background(0);
  translate(width/2, height/2);
  for(let i=0; i < windows.length; i++) {
    windows[i].update();
    windows[i].show();
  }
}

// function windowResized() {
//  resizeCanvas(windowWidth, windowHeight);
// }
