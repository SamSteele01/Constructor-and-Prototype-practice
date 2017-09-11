//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (name, hungry, status, color) {
  this.name = name
  this.hungry = hungry;
  this.status = status;
  this.color = color;
}

// Instances of Dog
// Needed: sadie, moonshine, atticus
let sadie = new Dog("Sadie", false, "normal", "black");
let moonshine = new Dog("Moonshine", true);
let atticus = new Dog("Atticus")

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (cool) {
  this.cool = cool
  this.pet = function(name){
    name.status = "happy";
  }
  this.feed = function(name){
    name.hungry = false;
  }
}

// Instances of Human
// Needed: mason, julia
let mason = new Human(false);
let julia = new Human(true);
