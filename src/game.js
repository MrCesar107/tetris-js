export default class Game {
  constructor() {
    this.canvas = document.querySelector("#canvas");
    this.ctx = this.canvas.getContext("2d");
  }

  initGame() {
    this.resizeCanvas();
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
