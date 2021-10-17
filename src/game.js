import { randomInRange } from "./utils/random_in_range.js";
import Piece from "./entities/piece.js";

export default class Game {
  constructor() {
    this.canvas = document.querySelector("#canvas");
    this.ctx = this.canvas.getContext("2d");
    this.pieces = [];
    this.animationId = null;
    this.currentPiece = null;
  }

  initGame() {
    this.resizeCanvas();
    this.update();
  }

  update() {
    this.generateCurrentPiece();
    this.animate();

    addEventListener("keydown", (event) => {
      if (event.code == "ArrowLeft") this.currentPiece.move("left");
      if (event.code == "ArrowRight") this.currentPiece.move("right");
      if (event.code == "ArrowDown") this.currentPiece.move("down");
    });
  }

  animate() {
    this.animationId = requestAnimationFrame(this.animate.bind(this));
    this.clearCanvas();
    this.currentPiece.update(this.ctx);
    this.pieces.forEach((piece) => piece.update(this.ctx));
    this.pushCurrentPiece();
  }

  generateCurrentPiece() {
    const pieceType = randomInRange(1, 7);
    this.currentPiece = new Piece(100, 0, pieceType, "#ff0000", canvas.height);
  }

  pushCurrentPiece() {
    if (this.currentPiece.isCollidingBottom) {
      this.pieces.push(this.currentPiece);
      this.generateCurrentPiece();
    }
  }

  resizeCanvas() {
    if (innerWidth < 500) {
      canvas.width = innerWidth;
    } else {
      canvas.width = 500;
    }

    canvas.height = innerHeight;
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}
