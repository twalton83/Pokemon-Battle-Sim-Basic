// To Do's

/*  - add type colors to move buttons
    - change header to say who's turn it is
    - option to play 2p versus computer 
    - change sprites from active to inactive 
    - finish battle logic 
    - clean up redundant code
    - allow players to only pick moves from their own moveset
    */


const charSelect = document.querySelector('.charSelect')
const bulbaSelect = document.querySelector('.bulbaSelect')
const squirtSelect = document.querySelector('.squirtSelect')
const pokeChoiceButtons = document.querySelectorAll('.pokeButtons')
const selectButtonsDisplay = document.querySelector('.pokeSelectButtons')
const playerUIDisplays = document.querySelectorAll('.playerDisplays')
const battleUI = document.querySelector('.battleDisplay');
const queryDisplay = document.querySelector('.queryDisplay')

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
const normalType = new Types("Normal", "None", "None")


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
  constructor(name, type, moves, HP, img){
    this.name = name;
    this.type = type;
    this.moves = moves;
    this.HP = HP;
    this.img = img
  }

}

let Charmander = new Pokemon("Charmander", fireType, [Tackle, Ember], 20, 
{
  alt : "Picture of Charmander",
  classList : "sprite",
  src:  "sprites/charmander-active.png", 

});

let Bulbasaur = new Pokemon("Bulbasaur", grassType, [Scratch, vineWhip], 20, 
{
  alt : "Picture of Bulbasaur",
  classList : "sprite",
  src:  "sprites/bulbasaur-active.gif", 

});

let Squirtle = new Pokemon("Squirtle", waterType, [Tackle, waterGun], 20, 
{
  alt : "Picture of Squirtle",
  classList : "sprite",
  src:  "sprites/squirtle-active-2.png", 
});


let player1 = {
name: "player1",
pokemonChoice : undefined,
turn : true,
moveLoaded: undefined
};
let player2 = {
name : 'player2',
pokemonChoice : undefined,
turn : false,
moveLoaded : undefined
};

const checkTurn = () =>{
  if (player1.turn){
    player1.turn = false;
    player2.turn = true;
    queryDisplay.textContent = "Player 2, make your selection."
  } else {
    player2.turn = false;
    player1.turn = true
    queryDisplay.textContent = "Player 1, make your selection."
  }
 }

const pickPokemon = (e) => {
  if(player1.turn){
    player1.pokemonChoice = eval(e.target.value);
    loadPokemon(player1)
    checkTurn()
  } else if (!player1.turn){
    player2.pokemonChoice = eval(e.target.value);
    loadPokemon(player2);
    checkTurn()
  }
  if (player1.pokemonChoice && player2.pokemonChoice){
    selectButtonsDisplay.remove();
    // add logic to set "Player X, make your selection."
    //queryDisplay.textContent = ""
  }
}



pokeChoiceButtons.forEach((button) =>{
  button.addEventListener('click', pickPokemon)
});

const loadPokemon = (player) => {
  battleUI.style.display = "flex";
  const playerDisplay = document.querySelector(`.playerDisplays.` + player.name)
  playerDisplay.style.display = "flex";
  loadImages(player)
  createMoveButtons(player)
}

const loadImages = (player) => {
  // not DRY, fix this later
  const playerDisplay = document.querySelector(`.playerDisplays.` + player.name)
  const img = document.createElement('img');
  const imgData = player.pokemonChoice['img']; 
  for (const attribute in imgData){
    img[attribute] = imgData[attribute]
  }
  playerDisplay.appendChild(img);
}

const createMoveButtons = (player) => {
  const playerDisplay = document.querySelector(`.playerDisplays.` + player.name);
  const moves = player.pokemonChoice.moves;
  moves.forEach((move) =>{
    const button = document.createElement('button');
    button.value = move.name
    button.textContent = move.name;
    button.classList = "moveButtons"
    button.addEventListener('mousedown', battleSet)
    playerDisplay.appendChild(button)
  });
}

const battleSet = (e) => {
  
  if(player1.moveLoaded && player2.moveLoaded) return;
  if (player1.turn === true){
    player1.moveLoaded = e.target.value;
    console.log(` Player 1 chose: ${player1.moveLoaded}`)
    loadMoveObjects(player1)
    checkTurn()
  }
  else if (player2.turn === true){
    player2.moveLoaded = e.target.value;
    console.log(` Player 2 chose: ${player2.moveLoaded}`)
    loadMoveObjects(player2)
    checkTurn()
  }
  if (player1.moveLoaded && player2.moveLoaded){
    console.log('Both moves loaded.')
    battleExecution()
  }
}

const loadMoveObjects = (player) => {
  const pokemonMoveSet = player.pokemonChoice.moves;
  const selectedMove = pokemonMoveSet.filter(move => {
    if (move.name === player.moveLoaded){
      player.moveLoaded = move
    }
  })
  console.log(player.moveLoaded)
}


// split into type checking function, pass in moves and weaknesses 
const battleExecution = () =>{
 if(player1.moveLoaded.type.weakness === player2.pokemonChoice.type.name){
   player1.move.strength *= .5
 } else if (player1.moveLoaded.type.strength === player2.pokemonChoice.type.weakness){
  player1.move.strength *= 2
 } 
}




const gifToPngSprites = () =>{}

