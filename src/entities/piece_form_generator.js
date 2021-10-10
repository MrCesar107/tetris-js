import Block from "./block.js";

export default class PieceFormGenerator {
  constructor(x, y, type, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.type = type;
    this.pieceForm = {
      1: this.firstPiece,
      2: this.secondPiece,
      3: this.thirdPiece,
      4: this.fourthPiece,
      5: this.fifthPiece,
      6: this.sixthPiece,
      7: this.seventhPiece,
    };
  }

  getPieceForm() {
    return this.pieceForm[this.type](this.x, this.y, this.color);
  }

  firstPiece(x, y, color) {
    return [
      new Block(x, y, color),
      new Block(x, y + 50, color),
      new Block(x, y + 100, color),
      new Block(x, y + 150, color),
    ];
  }

  secondPiece(x, y, color) {
    return [
      new Block(x, y, color),
      new Block(x + 50, y, color),
      new Block(x, y + 50, color),
      new Block(x + 50, y + 50, color),
    ];
  }

  thirdPiece(x, y, color) {
    return [
      new Block(x, y, color),
      new Block(x, y + 50, color),
      new Block(x, y + 100, color),
      new Block(x + 50, y + 100, color),
    ];
  }

  fourthPiece(x, y, color) {
    return [
      new Block(x, y, color),
      new Block(x, y + 50, color),
      new Block(x, y + 100, color),
      new Block(x + 50, y + 50, color),
    ];
  }

  fifthPiece(x, y, color) {
    return [
      new Block(x, y + 100, color),
      new Block(x + 50, y + 50, color),
      new Block(x + 50, y + 100, color),
      new Block(x + 50, y, color),
    ];
  }

  sixthPiece(x, y, color) {
    return [
      new Block(x, y + 100, color),
      new Block(x + 50, y + 50, color),
      new Block(x, y + 50, color),
      new Block(x + 50, y, color),
    ];
  }

  seventhPiece(x, y, color) {
    return [
      new Block(x, y, color),
      new Block(x, y + 50, color),
      new Block(x + 50, y + 50, color),
      new Block(x + 50, y + 100, color),
    ];
  }
}
