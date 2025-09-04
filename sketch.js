
function setup() {
  createCanvas(400, 400);
  
}

let xJogador1=0
let xJogador2=0


function draw() {
  ativaJogo()
  desenhaJogadores()
  desenhaLinhaDeChegada()
  
}
  
function ativaJogo(){
  if(focused == true){
   background(220);
  } else {
    background("rgb(35,228,212)");
  }
}
  
function desenhaJogadores() {
  textSize(40)
  text("😃", xJogador1, 100)
  textSize(33)
  text("🫦", xJogador1, 104)
  textSize (40)
  text("💩", xJogador2,200)
}    
  
function desenhaLinhaDeChegada(){
  fill("white")
  rect(350,0,15,400)
  fill("black")
  for (let yAtual = 0; yAtual < 400; yAtual +=20) { rect(350,yAtual,15,10)               
    }
}

function verificarVencedor() {
  if (xJogador1 >350) {
    text("Jogador 1 venceu!", 50, 200)
    noLoop();
      }
  if (xJogador2 > 350){
  text("Jogador 2 venceu!", 50, 200) 
noLoop ();
}
}

function keyReleased(){
  if (key == "a"){
    xJogador1 += rambom(20);
  }
  if (key =="s"){
    xJogador2 += rambom(20);
  }
}

