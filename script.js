

class Types {
  constructor(name, strength, weakness){
    this.name = name;
    this.weakness = weakness;
    this.strength = strength;
  }
}

const fireType = new Types("Fire", "Grass", "Water")
const waterType = new Types("Water", "Fire", "Grass")
const grassType = new Types("Grass", "Water",  "Fire")
const normalType = new Types("Normal")


//establishing move object
class Move{
  constructor(name, type, power){
    this.name = name;
    this.type = type;
    this.power = power
  }
}
  
//setting up moves
const Tackle = new Move("Tackle", normalType, 2);
const Ember = new Move("Ember", fireType, 3);
const Scratch = new Move("Scratch", normalType, 2);
const vineWhip = new Move("Vine Whip", grassType, 3);
const waterGun = new Move("Water Gun", waterType, 3)


class Pokemon{
  constructor(name, Type, Move, HP){
    this.name = name;
    this.Type = Type;
    this.Move = Move;
    this.HP = HP;
  }

}

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






