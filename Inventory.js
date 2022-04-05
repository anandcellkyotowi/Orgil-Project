<<<<<<< HEAD
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
=======
const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 560;

class Inventory {
  constructor() {
    this.position = {
      x: 0,
      y: 0,
    };
    this.width = 300;
    this.height = 70;
  }
  draw() {
    inv.fillStyle = "green";
    inv.fillRect(490, 10, this.width, this.height);
  }
}

const inventory = new Inventory();
inventory.draw();
>>>>>>> 3ac9667fb2d7e903f8ab28523c619bde8bac5290
