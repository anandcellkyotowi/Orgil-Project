const gravity = 1.5;

class Filter {
  constructor({ x, y }) {
    this.position = {
      x,
      y,
    };
    this.width = 50;
    this.height = 50;
    this.image = new Image();
    this.image.src = "./img/filter.png"

    this.velocity = {
      x: 0,
      y: 0,
    };
  }
  draw() {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height,
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
class Branch {
  constructor({ x, y }) {
    this.position = {
      x,
      y,
    };
    this.width = 50;
    this.height = 50;
    this.image = new Image();
    this.image.src = "./img/mucir.png"

    this.velocity = {
      x: 0,
      y: 0,
    };
  }
  draw() {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height,
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
class Tish {
  constructor({ x, y }) {
    this.position = {
      x,
      y,
    };
    this.width = 50;
    this.height = 50;
    this.image = new Image();
    this.image.src = "./img/ish.png"

    this.velocity = {
      x: 0,
      y: 0,
    };
  }
  draw() {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height,
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
class WaterGun {
  constructor({ x, y }) {
    this.position = {
      x,
      y,
    };
    this.width = 50;
    this.height = 50;
    this.image = new Image();
    this.image.src = "./img/watergun.png"

    this.velocity = {
      x: 0,
      y: 0,
    };
  }
  draw() {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height,
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

const inventory = new Inventory();
const items = [
  new Filter({ x: 50, y: 10 }),
  new WaterGun({ x: 350, y: 10 }),
  new Branch({ x: 700, y: 10 }),
  new Tish({ x: 200, y: 10 }),
];

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  inventory.draw();
  items.forEach((item) => {
    item.update();
  });
}
animate();
