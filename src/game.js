import Piece from "./entities/piece.js";

export default class Game {
  constructor() {
    this.canvas = document.querySelector("#canvas");
    this.ctx = this.canvas.getContext("2d");
    this.pieces = [
      new Piece(0, 0, 1, "#ff0000"),
      new Piece(100, 100, 2, "#00ff00"),
      new Piece(200, 200, 3, "#0000ff"),
      new Piece(300, 300, 4, "#f2ce18"),
      new Piece(400, 400, 5, "#682bed"),
    ];
  }

  initGame() {
    this.resizeCanvas();
    this.pieces.forEach((piece) => piece.update(this.ctx));
  }

  resizeCanvas() {
    if (innerWidth < 500) {
      canvas.width = innerWidth;
    } else {
      canvas.width = 500;
    }

    canvas.height = innerHeight;
  }
}
