/* Practicing using objects */ 
//setting up Type objects
function Type(name, weakness, strength){
    this.name = name;
    this.weakness = weakness;
    this.strength = strength;
  };
  
  //setting up types
  let fireType = new Type("Fire", "water", "grassType");
  let waterType = new Type("water", "grass", "fireType");
  let grassType = new Type("grass", "fire", "waterType");
  
  
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
  
  // attack sequence
  function runAttacks(){
    if(Charmander.move[1].strength == Bulbasaur.type.weakness){
      console.log("FAINTED!")
    } else {
      console.log("error")
    }
    
  }
  