let factor = 2

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0, 255, 255);
  fill(255,0,0)
  let points = 100
  translate(width/2, height/2)
  for(let i=0; i < points; i++){
  let angle = i * 2 * PI / points
  let x = 200 * cos(angle)
  let y = 200 * sin(angle)
  circle(x, y, 5)
    let x2 = 100 * cos(angle * factor)
    let y2 = 100 * sin(angle * factor)
    line(x, y, x2, y2)
  }
  factor += 0.01
  
}
