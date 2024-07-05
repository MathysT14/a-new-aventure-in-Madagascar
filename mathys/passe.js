let entreeTexte, lebouton;




function setup() {
    createCanvas(400, 400);
    entreeTexte = createInput();
    entreeTexte.position(500, 650);
    entreeTexte.size(500, 50);
    lebouton = createButton("lancerpagesuivante");
    lebouton.position(1050, 670);
    lebouton.mousePressed(lancerpagesuivante);
}

function draw() {
    clear(); // met un arriere plan transparant

}


function lancerpagesuivante() {
    if (entreeTexte.value() == "16") {
        window.location.href = "page9.html"
        noLoop();
    }
}

class particule{

 constructor( ){
    this.x = 400;
    this.y = 300;
    this.speedX = random(-2, 2);
    this.speedY = random(-2, 2);
 }

 diplay() {

    circle(x, y, 10);
    this.x += this.speedX;  
    this.y += this.speedY;
    
    

    
 }






}