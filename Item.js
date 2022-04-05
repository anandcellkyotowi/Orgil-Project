const gravity = 1.5;

class Items {
  constructor({ x, y, color }) {
    this.position = {
      x,
      y,
    };
    this.width = 50;
    this.height = 50;
    this.color = color;

    this.velocity = {
      x: 0,
      y: 0,
    };
  }
  draw() {
    ctx.fillStyle = "green";
    ctx.fillRect(
      this.position.x,
      this.position.y,
      this.width,
      this.height,
      this.color
    );
  }
  update() {
    this.draw();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    if (this.position.y + this.height + this.velocity.y <= canvas.height) {
      this.velocity.y += gravity;
    } else {
      this.velocity.y = 0;
    }
  }
}

const items = [
  new Items({ x: 50, y: 10 }),
  new Items({ x: 350, y: 10 }),
  new Items({ x: 700, y: 10 }),
  new Items({ x: 200, y: 10 }),
];

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  items.forEach((item) => {
    item.update();
  });
}
animate();
