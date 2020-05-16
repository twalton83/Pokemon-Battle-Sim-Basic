

//setting up Type objects
function Type(name, weakness, strength){
  this.name = name;
  this.weakness = weakness;
  this.strength = strength;
};

//setting up types
let fireType = new Type("Fire");
let waterType = new Type("water");
let grassType = new Type("grass");

fireType.weakness = waterType;
waterType.weakness = grassType;
grassType.weakness = fireType;
fireType.strength = grassType;
waterType.strength = waterType;
grassType.strength = waterType;

//establishing move object
function Move(name, type, power){
  this.name = name;
  this.type = type;
  this.power = power
};

//setting up moves
let Tackle = new Move("Tackle", "Normal", 2);
let Ember = new Move("Ember", fireType, 3);
let Scratch = new Move("Scratch", "Normal", 2);
let vineWhip = new Move("Vine Whip", grassType, 3);
let waterGun = new Move("Water Gun", waterType, 3)

//setting up pokemon object
function Pokemon(name, Type, Move, HP){
  this.name = name;
  this.Type = Type;
  this.Move = Move;
  this.HP = HP;
};

//creating the pokemon 
let Charmander = new Pokemon("Charmander", fireType, [Tackle, Ember], 20);
let Bulbasaur = new Pokemon("Bulbasaur", grassType, [Scratch, vineWhip], 20);
let Squirtle = new Pokemon("Squirtle", waterType, [Tackle, waterGun], 20);


const charizardImg = {
  alt : "Picture of Charmander",
  classList : "photo",
  src:  "sprites/charmander-active.png", 
  width : "200px", 
  height : "200px",
}

const squirtleImg = {
  alt : "Picture of Squirtle",
  classList : "photo",
  src:  "sprites/squirtle-active-2.png", 
  width : "200px", 
  height : "200px",
}


const bulbasaurImg = {
  alt : "Picture of Bulbasaur",
  classList : "photo",
  src:  "sprites/bulbasaur-active.png", 
  width : "200px", 
  height : "200px",
}


let turn = 0;

function checkTurn(){
if (turn === 0){
  turn += 1;
} else if (turn === 1) {
  turn -= 1

}
}

let player1 = {
pokemonChoice : undefined,
};
let player2 = {
pokemonChoice : undefined,
};

let p1selected = false;
let p2selected = false;
let battleSequence = false;





