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
  '.style.width' : "200px", 
  '.style.height' : "200px"
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
  } else {
    player2.turn = false;
    player1.turn = true
  }
 }

const pickPokemon = (e) => {
  if(player1.turn){
    player1.pokemonChoice = eval(e.target.value);
    checkTurn()
  } else if (!player1.turn){
    player2.pokemonChoice = eval(e.target.value);
    checkTurn()
  }
  if (player1.pokemonChoice && player2.pokemonChoice){
    loadPokemon(player1)
    loadPokemon(player2);
  }
}

pokeChoiceButtons.forEach((button) =>{
  button.addEventListener('click', pickPokemon)
});


const loadPokemon = (player) => {
  battleUI.style.display = "block";
  selectButtonsDisplay.remove();
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
  console.log(moves);

  moves.forEach((move) =>{
    const button = document.createElement('button');
    button.value = move.name
    button.textContent = move.name;
    button.classList = "moveButtons"
    button.addEventListener('mousedown', battleSet)
    console.log(button)
    playerDisplay.appendChild(button)
  });

}

// Need to add click listener that changes moveLoaded to true

// Need to target move buttons in each player's area
// Then need to apply the correct values to the moves

const battleSet = (e) => {
  if(player1.moveLoaded && player2.moveLoaded) return;
  if (player1.turn === true){
    player1.moveLoaded = e.target.value
    console.log(` Player 1 chose: ${player1.moveLoaded}`)
    checkTurn()
  }
  else if (player2.turn === true){
    player2.moveLoaded = e.target.value;
    console.log(` Player 2 chose: ${player2.moveLoaded}`)
    checkTurn()
  }
  if (player1.moveLoaded && player2.moveLoaded){
    console.log('Both moves loaded.')
    //battleExecution()
    loadMoveObjects(player1)
    loadMoveObjects(player2)
  }
}

const loadMoveObjects = (player) => {

  const pokemonMoveSet = player.pokemonChoice.moves;

  const selectedMove = pokemonMoveSet.filter(move => move.name === player.moveLoaded)
   //need to use value to loop through moves, check for name equating to move
  //then use the value of the moves to battle against one another 
  console.log(selectedMove)
  return selectedMove
}

const battleExecution = () =>{
 
  //  change eval later to a safer method. 
  // eval does not work with spaces in the name
  

}


const gifToPngSprites = () =>{}