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
