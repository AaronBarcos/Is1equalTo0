class Suelos {
  constructor(xPos, yPos, w) {
    this.x = xPos;
    this.y = yPos;
    this.w = w;
    this.h = 15;
  }

  // MÉTODOS

  drawSuelos = () => {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.w, this.h);
    ctx.fillStyle = "#c1272d";
    ctx.strokeStyle = 'black';
    ctx.stroke();
    ctx.fill();
  };
}
