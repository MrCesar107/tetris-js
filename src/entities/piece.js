import Block from "./block.js";

export default class Piece {
  constructor(x, y, type, color) {
    this.x = x;
    this.y = y;
    this.type = type;
    this.color = color;
    this.blocks = [];
  }

  build() {
    this.blocks = [
      new Block(this.x, this.y, this.color),
      new Block(this.x, this.y + 50, this.color),
      new Block(this.x, this.y + 100, this.color),
      new Block(this.x, this.y + 150, this.color),
    ];
  }

  update(ctx) {
    this.build();
    this.blocks.forEach((block) => block.update(ctx));
  }
}
