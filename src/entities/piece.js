import PieceFormGenerator from "./piece_form_generator.js";

export default class Piece {
  constructor(x, y, type, color) {
    this.x = x;
    this.y = y;
    this.type = type;
    this.color = color;
    this.blocks = [];
    this.direction = "none";
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
    console.log(this.isColliding);
  }

  move(direction) {
    this.setDirection(direction);

    if (this.direction === "left") this.x += -50;
    if (this.direction === "right") this.x += 50;
    if (this.direction === "none") this.stop();
  }

  setDirection(direction) {
    this.direction = direction;
  }

  stop() {
    console.log(this.x);
    this.x += 0;
    this.y = 0;
  }

  checkCollisions() {
    this.blocks.forEach((block) => {
      if (block.x >= 500) {
        this.stop();
        this.x = 450;
      }

      if (block.x <= 0) {
        this.stop();
        this.x = 0;
      }
    });
  }
}
