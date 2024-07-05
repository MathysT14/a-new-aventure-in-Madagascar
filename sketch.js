let x = 50;
let image1



function setup() {

  createCanvas(windowWidth, windowHeight);
  image1 = loadImage("ezgif.com-animated-gif-maker.gif");
}

function draw() {
  clear(); // met un arriere plan transparant
  rect(x, 200, 80, 230, 20)// Percentage RGB notation.
  fill('rgb(100%, 0%, 10%)');


  x = x + 25;
  if (x > windowWidth) {
    x = 0;
  }

  image(image1, 450, 400, 500, 300);

}
