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
  let fireType = new Type("Fire", "water");
  let waterType = new Type("water", "grass");
  let grassType = new Type("grass", "fire");
  
  fireType.weakness = waterType;
  waterType.weakness = grassType;
  grassType.weakness = fireType;
  
  //establishing move object
  function Move(name, type, strength){
    this.name = name;
    this.type = type;
    this.strength = strength;
  };
  
  //setting up moves
  let Tackle = new Move("Tackle", "Normal", 2);
  let Ember = new Move("Ember", fireType, 3);
  let Scratch = new Move("Scratch", "Normal", 2);
  let vineWhip = new Move("Vine Whip", grassType, 3);
  
  //setting up pokemon object
  function Pokemon(name, type, move, HP){
    this.name = name;
    this.type = type;
    this.move = move;
    this.HP = HP;
  };
  
  //creating the pokemon 
  let Charmander = new Pokemon("Charmander", fireType, [Tackle, Ember], 20);
  let Bulbasaur = new Pokemon("Bulbasaur", grassType, [Scratch, vineWhip], 20);
  let Squirtle = new Pokemon("Squirtle", waterType, [Tackle], 20);
 
  const charImg = document.createElement("IMG");
  charImg.alt = "Picture of Charmander";
  charImg.setAttribute('class', 'photo');
  charImg.src="sprites/charmander-active.png";
  charImg.style.width = "200px";
  charImg.style.height = "200px"
 
  const bulbaImg = document.createElement("IMG");
  bulbaImg.alt = "Picture of Bulbasaur";
  bulbaImg.setAttribute('class', 'photo');
  bulbaImg.src="sprites/bulbasaurr-static-2.png";
  bulbaImg.style.width = "200px";
  bulbaImg.style.height = "200px"
 
  const squirtImg = document.createElement("IMG");
  squirtImg.alt = "Picture of Squirtle";
  squirtImg.setAttribute('class', 'photo');
  squirtImg.src="sprites/squirtle-active-2.png";
  squirtImg.style.width = "200px";
  squirtImg.style.height = "200px"
  

  
  function player1turn(){
    if(turn === 0){
      turn += 1;
      console.log(turn);
      //checkForWinner();
    } else if (turn === 1){
      console.log("player 2 turn");
      
  }
  }
    
    function player2turn(){
    if(turn === 1){
      turn -= 1;
      alert("player 1 next");
      //checkForWinner();
    } else if(turn === 0){
              alert("player 1 turn")
      }
  }
  
  /* function checkForWinner(){
    if (player1.hp === 0){
      alert("player2 wins!")
      turn = 2;
      $("#player2btn").show();
      $("#player1btn").show();
    } else if (player2.hp === 0){
      alert("player1 wins!");
      turn = 2;
      $("#player2btn").show();
      $("#player1btn").show();
         
    }
  }
*/

let player1 = {
  pokemonChoice : undefined

};
let player2 = {
  pokemonChoice : undefined
  
};

let turn = 0;
let p1selected = false;
let p2selected = false;
let battleSequence = false;

function checkPokemon(){
  if ((player1.pokemonChoice != undefined) && (player2.pokemonChoice != undefined)){
    console.log("pokemon Selected")
    $(".pokeSelectButtons").hide();
    battleSequence = true;
  }
}


$("#charSelect").click(function(){
  if (turn === 0){
    player1.pokemonChoice = Charmander;
    $("#player1").html(charImg);
    p1selected === true;
    turn = 1;
    checkPokemon()
    ;
  } else if (turn === 1){
    player2.pokemonChoice = Charmander;
    $("#player2").html(charImg);
    p2selected === true;
    turn = 0;
    checkPokemon()
  }

})

  $("#bulbaSelect").click(function(){
  
    if (turn === 0){
      player1.pokemonChoice = Bulbasaur;
      $("#player1").html(bulbaImg);
      p1selected = true;
      turn = 1;
      checkPokemon()
    } else if (turn === 1){
      player2.pokemonChoice = Bulbasaur;
      $("#player2").html(bulbaImg);
      p2selected = true;
      turn = 0;
      checkPokemon()
    }

  })

  $("#squirtSelect").click(function(){
     if (turn = 0){
      player1.pokemonChoice = Squirtle;
      $("#player1").html(squirtImg);
      p1selected = true;
      turn = 1;
      checkPokemon();
    } else if (turn = 1){
      player2.pokemonChoice = Squirtle
      $("#player2").html(squirtImg);
      p2selected = true;
      turn = 0;
      checkPokemon();
    }
  })

 


  
  // create two buttons for each pokemon 
  if (battleSequence == true){
    createMoveButtons();
  }

  // attack sequence
  function runAttack(){

    //need to make the move dynamic based on what user chooses
    if(Charmander.move[1].type == Bulbasaur.type.weakness){
      console.log("works!")
      //
    } else {
      console.log("error")
    }
    
  }
  


function createMoveButtons(){
  for (i = 0; i < player1.pokemonChoice.move.length; i++){
    $("button").appendTo("#player1");
  }
}
