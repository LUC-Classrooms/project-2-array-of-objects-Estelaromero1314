/*
 Project 2 - Array of Objects
 Name: Estela Romero
 Comments:  array of stars that bounce around the canvas.
 * Each star is an instance of the Star class, which includes properties for position, size, and movement.



/*** 
 * Please see the full assignment instructions in COMP 125 on Sakai (or under the "Markdown" tab)
 * Make an array of objects of the same type. Start by creating an object constructor funciton. Test it with individual object instances. Then create an array and initialize it with objects created from your constructor.
 * Use the draw() function to display and move your objects independently on the canvas.
***/

// Global variables
var stars = [];

// Star class definition
function Star(x, y) {
  this.x = x;
  this.y = y;
  this.size = random(10, 30);
  this.speedX = random(-2, 2);
  this.speedY = random(-2, 2);

  // move the star and handle boundary 
  this.move = function() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x <= 0 || this.x >= width) this.speedX *= -1;
    if (this.y <= 0 || this.y >= height) this.speedY *= -1;
  };

  // display the star on the canvas
  this.display = function() {
    push();
    translate(this.x, this.y);
    fill(255);
    beginShape();
    for (let i = 0; i < 5; i++) {
      let angle = radians(i * 144);
      let x = cos(angle) * this.size;
      let y = sin(angle) * this.size;
      vertex(x, y);
    }
    endShape(CLOSE);
    pop();
  };
}

function setup() {
  createCanvas(680, 480);
  // add to the array  10 stars
  for (let i = 0; i < 10; i++) {
    stars.push(new Star(random(width), random(height)));
  }
}

function draw() {
  background(0);  // Set the background to black for better visibility
  stars.forEach(star => {
    star.move();
    star.display();
  });
}