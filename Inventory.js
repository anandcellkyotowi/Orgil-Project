class Inventory {
  constructor() {
    this.position = {
      x:560,
      y:10
    }
    this.width = 230;
    this.height = 50;
  }
  draw() {
    ctx.fillStyle = 'grey';
    ctx.fillRect(this.position.x, this.position.y , this.width, this.height);
  }
}