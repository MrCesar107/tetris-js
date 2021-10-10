import Piece from "./entities/piece.js";

export default class Game {
  constructor() {
    this.canvas = document.querySelector("#canvas");
    this.ctx = this.canvas.getContext("2d");
    this.pieces = [new Piece(100, 0, 1, "#ff0000")];
    this.animationId = null;
  }

  initGame() {
    this.resizeCanvas();
    this.update();
  }

  update() {
    this.animate();

    addEventListener("keydown", (event) => {
      if (event.code == "ArrowLeft") this.pieces[0].move("left");
      if (event.code == "ArrowRight") this.pieces[0].move("right");
    });
  }

  animate() {
    this.animationId = requestAnimationFrame(this.animate.bind(this));
    this.clearCanvas();
    this.pieces[0].update(this.ctx);
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
