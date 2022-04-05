class Sprite {

  constructor(x, y, sx, sy, w, h) {

    this.x = x; this.y = y; this.sx = sx; this.sy = sy; this.w = w; this.h = h;

    this.vx = this.vy = 0;

  }

  collidePoint(point) {

    if (point.x < this.x || point.x > this.x + this.w || point.y < this.y || point.y > this.y + this.h) return false;

    return true;

  }

  collideRect(sprite) {
    
    if (this.x > sprite.x + sprite.w || this.x + this.w < sprite.x || this.y > sprite.y + sprite.h || this.y + this.h < sprite.y) return false;

    return true;
        
  }

  updatePosition(gravity, friction, floor) {

    this.vy += gravity;

    this.x += this.vx;
    this.y += this.vy;

    this.vx *= friction;
    this.vy *= friction;

    if (this.y + this.h > floor) {

      this.y = floor - this.h;
      this.vy = 0;

    }

  }
  addItem(sprite) {
          
    if (this.items.length == this.columns) {
  
      sprite.vy = -4;
      return false;
  
    }
  
    this.items.push(sprite)
  
    return true;
        
  }
  
  dropItem(index, x, y) {
  
    var item = this.items[index];
  
    if (item) {
  
      this.items.splice(index, 1);
      item.x = x;
      item.y = y - item.h;
      item.vx = Math.random() * 2 - 1;
      item.vy = Math.random() * -5 - 1;
  
    } return item;
  }
}
var items = [new Sprite(Math.random() * 240, 100, 96, 16,  ),
  new Sprite(Math.random() * 240, 100, 0, 32,  ),
  new Sprite(Math.random() * 240, 100, 16, 32,  ),
  new Sprite(Math.random() * 240, 100, 32, 32,  ),
  new Sprite(Math.random() * 240, 100, 48, 32,  ),
  new Sprite(Math.random() * 240, 100, 64, 32,  ),
  new Sprite(Math.random() * 240, 100, 80, 32,  ),
  new Sprite(Math.random() * 240, 100, 96, 32,  )
];

function loop(time_step) {
  window.requestAnimationFrame(loop);

  if (
    pointer.down &&
    inventory.items.length > 0 &&
    inventory.collidePoint(pointer)
  ) {
    let index = Math.floor(
      (pointer.x - inventory.x) / (inventory.w / inventory.columns)
    );

    pointer.x = player.x + player.w * 0.5;

    let item = inventory.dropItem(index, player.x, player.y);

    if (item) items.unshift(item);
  }

  for (let index = map.length - 1; index > -1; --index) {
    let value = map[index];
    let tile_x = (index % map_columns) * tile_size;
    let tile_y = Math.floor(index / map_columns) * tile_size;

    buffer.drawImage(
      tile_set,
      (value % 8) * tile_size,
      Math.floor(value / 8) * tile_size,
      tile_size,
      tile_size,
      tile_x,
      tile_y,
      tile_size,
      tile_size
    );
  }

  player.vx = (pointer.x - player.x - tile_size * 0.5) * 0.025;
  player.updatePosition(map_gravity, map_friction, map_floor);

  buffer.drawImage(
    tile_set,
    player.sx,
    player.sy,
    player.w,
    player.h,
    Math.round(player.x),
    Math.round(player.y),
    player.w,
    player.h
  );

  var front_item_index = undefined;

  for (let index = items.length - 1; index > -1; --index) {
    let item = items[index];

    if (
      item.y + item.h >= map_floor &&
      item.collideRect(player) &&
      pointer.down &&
      item.collidePoint(pointer)
    ) {
      front_item_index = index;
    }

    item.updatePosition(map_gravity, map_friction, map_floor);

    buffer.drawImage(
      tile_set,
      item.sx,
      item.sy,
      item.w,
      item.h,
      Math.round(item.x),
      Math.round(item.y),
      item.w,
      item.h
    );
  }

  if (
    front_item_index != undefined &&
    inventory.addItem(items[front_item_index])
  )
    items.splice(front_item_index, 1);

  buffer.fillStyle = inventory.color;
  buffer.fillRect(inventory.x, inventory.y, inventory.w, inventory.h);

  for (let index = inventory.items.length - 1; index > -1; --index) {
    let item = inventory.items[index];
    let dest_x = inventory.x + index * tile_size * 2;

    buffer.drawImage(
      tile_set,
      item.sx,
      item.sy,
      item.w,
      item.h,
      dest_x,
      inventory.y,
      tile_size * 2,
      tile_size * 2
    );
  }

  context.drawImage(
    buffer.canvas,
    0,
    0,
    buffer.canvas.width,
    buffer.canvas.height,
    0,
    0,
    context.canvas.width,
    context.canvas.height
  );

  pointer.down = false;
}