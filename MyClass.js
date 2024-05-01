/**
 * Add code for your class constructor in this file
 */
class Star {
    constructor(x, y) {
      this.x = x;                // X coordinate
      this.y = y;                // Y coordinate
      this.size = random(10, 30); // Size of the star
      this.speedX = random(-3, 3); // Horizontal speed
      this.speedY = random(-3, 3); // Vertical speed
  
      // assign a color
      this.color = color(random(255), random(255), random(255));
    }
  
    //  update the star's position 
    move() {
      this.x += this.speedX;
      this.y += this.speedY;
      // Reverse direction if hitting the canvas boundary
      if (this.x <= 0 || this.x >= width) {
        this.speedX *= -1;
      }
      if (this.y <= 0 || this.y >= height) {
        this.speedY *= -1;
      }
    }
  
    //  display the star on the canvas
    display() {
      push();
      translate(this.x, this.y);
      fill(this.color);
      beginShape();
      for (let i = 0; i < 5; i++) {
        let angle = radians(i * 144);
        let sx = cos(angle) * this.size;
        let sy = sin(angle) * this.size;
        vertex(sx, sy);
      }
      endShape(CLOSE);
      pop();
    }
  }