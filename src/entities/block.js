export default class Block {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 50;
    this.color = color;
  }

  update(ctx) {
    this.draw(ctx);
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "#000";
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.stroke();
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.closePath();
  }
}
