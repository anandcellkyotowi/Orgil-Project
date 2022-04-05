const canvas = document.getElementById("canvas");
canvas.width = 800;
canvas.height = 560;

const inv = canvas.getContext("2d");

class Inventory {
  constructor() {
    this.width = 300;
    this.height = 70;
  }
  draw() {
    inv.fillStyle = "grey";
    inv.fillRect(490, 10, this.width, this.height);
  }
}

const inventory = new Inventory();

inventory.draw();
