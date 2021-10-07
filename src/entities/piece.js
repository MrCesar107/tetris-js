import PieceFormGenerator from "./piece_form_generator.js";

export default class Piece {
  constructor(x, y, type, color) {
    this.x = x;
    this.y = y;
    this.type = type;
    this.color = color;
    this.blocks = [];
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
    this.blocks.forEach((block) => block.update(ctx));
  }
}
