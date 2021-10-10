import PieceFormGenerator from "./piece_form_generator.js";

export default class Piece {
  constructor(x, y, type, color) {
    this.x = x;
    this.y = y;
    this.type = type;
    this.color = color;
    this.blocks = [];
    this.direction = "none";
    this.isCollidingLeft = false;
    this.isCollidingRight = false;
    this.isCollidingBottom = false;
  }

  build() {
    this.blocks = new PieceFormGenerator(
      this.x,
      this.y,
      this.type,
      this.color
    ).getPieceForm();
  }

  update(ctx) {
    this.build();
    this.checkCollisions();
    this.blocks.forEach((block) => block.update(ctx));
  }

  move(direction) {
    this.setDirection(direction);

    if (this.direction === "left" && !this.isCollidingLeft) this.x += -50;
    if (this.direction === "right" && !this.isCollidingRight) this.x += 50;
  }

  setDirection(direction) {
    this.direction = direction;
  }

  stop() {
    this.x += 0;
    this.y = 0;
  }

  checkCollisions() {
    if (
      this.blocks[this.blocks.length - 1].x +
        this.blocks[this.blocks.length - 1].width >=
      500
    )
      this.isCollidingRight = true;
    else if (this.blocks[0].x <= 0) this.isCollidingLeft = true;
    else {
      this.isCollidingLeft = false;
      this.isCollidingRight = false;
    }
  }
}
