let lesparticules = [];
let cnv;


function setup() {
    cnv =  createCanvas(windowWidth, windowHeight);
    cnv.position(0,0);
    cnv.style("z-index: -100");
}


function draw() {
    clear(); // met un arriere plan transparant
    lesparticules.push(new particule());
    for(let i = 0; i < lesparticules.length; i ++){
        lesparticules[i].diplay();
    }
}











class particule{

    constructor( ){
       this.x = width/2;
       this.y = height/2;
       this.speedX = random(-2, 2);
       this.speedY = random(-2, 2);
    }
   
    diplay() {
   
        fill("red")
       circle(this.x, this.y, 10);
       this.x += this.speedX;  
       this.y += this.speedY;
    }
    
}