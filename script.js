const charSelect = document.querySelector('.charSelect')
const bulbaSelect = document.querySelector('.bulbaSelect')
const squirtSelect = document.querySelector('.squirtSelect')
const pokeChoiceButtons = document.querySelectorAll('.pokeButtons')
const selectButtonsDisplay = document.querySelector('.pokeSelectButtons')
const playerUIDisplays = document.querySelectorAll('.playerDisplays')
const battleUI = document.querySelector('.battleDisplay');
battleUI.style.display = "none";


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


class Move{
  constructor(name, type, power){
    this.name = name;
    this.type = type;
    this.power = power
  }
}
  

const Tackle = new Move("Tackle", normalType, 2);
const Ember = new Move("Ember", fireType, 3);
const Scratch = new Move("Scratch", normalType, 2);
const vineWhip = new Move("Vine Whip", grassType, 3);
const waterGun = new Move("Water Gun", waterType, 3)


class Pokemon{
  constructor(name, Type, Move, HP, img){
    this.name = name;
    this.Type = Type;
    this.Move = Move;
    this.HP = HP;
    this.img = img
  }

}

//creating the pokemon 
let Charmander = new Pokemon("Charmander", fireType, [Tackle, Ember], 20, 
{
  alt : "Picture of Charmander",
  classList : "photo",
  src:  "sprites/charmander-active.png", 
  width : "200px", 
  height : "200px",
});

let Bulbasaur = new Pokemon("Bulbasaur", grassType, [Scratch, vineWhip], 20, 
{
  alt : "Picture of Bulbasaur",
  classList : "photo",
  src:  "sprites/bulbasaur-active.gif", 
  width : "100px", 
  height : "100px",
});
let Squirtle = new Pokemon("Squirtle", waterType, [Tackle, waterGun], 20, 
{
  alt : "Picture of Squirtle",
  classList : "photo",
  src:  "sprites/squirtle-active-2.png", 
  width : "200px", 
  height : "200px",
});


let player1 = {
name: "player1",
pokemonChoice : undefined,
turn : true
};
let player2 = {
name : 'player2',
pokemonChoice : undefined,
turn : false
};

const checkTurn = () =>{
  if (player1.turn){
    player1.turn = false;
    player2.turn = true;
  } else {
    player2.turn = false;
    player1.turn = true
  }
 }

const pickPokemon = (e) => {
  if(player1.turn){
    player1.pokemonChoice = eval(e.target.value);
    console.log(player1.pokemonChoice)
    checkTurn()
  } else if (!player1.turn){
    player2.pokemonChoice = eval(e.target.value);
    checkTurn()
    console.log(player2.pokemonChoice)
  }
  if (player1.pokemonChoice && player2.pokemonChoice){
    loadPokemon(player1)
    loadPokemon(player2);
  }
}

pokeChoiceButtons.forEach((button) =>{
  button.addEventListener('click', pickPokemon)
});


function loadPokemon(player){
  battleUI.style.display = "block";
  selectButtonsDisplay.remove();
  const playerDisplay = document.querySelector(`.playerDisplays.` + player.name)
  console.log(playerDisplay)
  playerDisplay.style.display = "block";
  const img = document.createElement('img');
  img.src = player.pokemonChoice['img'].src;
  img.style.height = player.pokemonChoice['img'].height;
  img.alt = player.pokemonChoice['img'].alt;
  img.style.width = player.pokemonChoice['img'].width;
  img.style.classList = player.pokemonChoice['img'].classList
  

  console.log(img)
  playerDisplay.appendChild(img); //this is causing child elements to delete

  }





