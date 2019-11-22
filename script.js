/* Practicing using objects */ 

/* When player picks, it then lets the second player pick.
Need to set up turns so next we can switch until pokemon is dead.
Upon picking, each pokemon needs to show up, buttons need to be deleted
then buttons for moves need to be added*/

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

const charImg = document.createElement("IMG");
charImg.alt = "Picture of Charmander";
charImg.setAttribute('class', 'photo');
charImg.src= "sprites/charmander-active.png";
charImg.style.width = "200px";
charImg.style.height = "200px";

const bulbaImg = document.createElement("IMG");
bulbaImg.alt = "Picture of Bulbasaur";
bulbaImg.setAttribute('class', 'photo');
bulbaImg.src= "sprites/bulbasaur-active.gif";
bulbaImg.style.width = "200px";
bulbaImg.style.height = "200px";

const squirtImg = document.createElement("IMG");
squirtImg.alt = "Picture of Squirtle";
squirtImg.setAttribute('class', 'photo');
squirtImg.src= null;
squirtImg.style.width = "200px";
squirtImg.style.height = "200px";




let turn = 0;

function checkTurn(){
if (turn === 0){
  turn += 1;
} else if (turn === 1) {
  turn -= 1

}
}

let player1 = {
pokemonChoice : undefined
};
let player2 = {
pokemonChoice : undefined
};

let p1selected = false;
let p2selected = false;
let battleSequence = false;


function checkPokemon(){
if ((player1.pokemonChoice != undefined) && (player2.pokemonChoice != undefined)){
  console.log("pokemon Selected")
  $(".pokeSelectButtons").hide();
  $("#queryDisplay").hide();
  battleSequence = true;
  moveSetup();
}
};

$("#charSelect").click(function(){
if (turn === 0){
 
  player1.pokemonChoice = Charmander;
  $("#player1").html(charImg);
  p1selected === true;
   checkTurn();
} else {
  
  player2.pokemonChoice = Charmander;
  $("#player2").html(charImg);
  p2selected === true;
  checkPokemon()
  checkTurn();
 
}

});

$("#bulbaSelect").click(function(){

  if (turn === 0){
    player1.pokemonChoice = Bulbasaur;
    $("#player1").html(bulbaImg);
    p1selected = true;
    checkTurn();
  }else {
    
    player2.pokemonChoice = Bulbasaur;
    $("#player2").html(bulbaImg);
    p2selected = true;
    checkPokemon();
    checkTurn();
    
  }

});

$("#squirtSelect").click(function(){
   if (turn === 0){
    player1.pokemonChoice = Squirtle;
    $("#player1").html(squirtImg);
    p1selected = true;
    checkTurn();
  } else {
    player2.pokemonChoice = Squirtle
    $("#player2").html(squirtImg);
    p2selected = true;
    checkPokemon();
    checkTurn();
  }
});

function moveSetup(){
if (battlesequence = true){
  for (i = 0; i < player1.pokemonChoice.Move.length; i++)
  $("<button>" + player1.pokemonChoice.Move[i].name + "</button>").addClass("moveButtons").attr('id', player1.pokemonChoice.Move[i].name).appendTo("#player1");
  
  ;
  
  for (i = 0; i < player2.pokemonChoice.Move.length; i++)
  $("<button>" + player2.pokemonChoice.Move[i].name + "</button>").addClass("moveButtons").attr('id', player2.pokemonChoice.Move[i].name).appendTo("#player2");
}
};

let attacks = {
p1Attack: undefined,
p2Attack: undefined
}

function runAttacks(){
console.log(p1Attack);
console.log(p2Attack);
}

// make this some kind of loop 

$("#player1").on("click", "#Tackle", function() {
p1Attack = player1.pokemonChoice.Move[0];

});

$("#player1").on("click", "#Ember", function() {
p1Attack = player1.pokemonChoice.Move[1];
runAttacks();
});

$("#player2").on("click", "#Scratch", function() {
p2Attack = player2.pokemonChoice.Move[0];
runAttacks();
});

$("#player2").on("click", "#Vine Whip", function() {
p2Attack = player2.pokemonChoice.Move[1];
runAttacks();
});

