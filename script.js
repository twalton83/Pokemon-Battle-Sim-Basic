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
  
  $("#squirtSelect").click(function(){
      $('#player1Pokemon').css('backgroundImage', 'url(sprites/squirtle-static.png)');
  })

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
  