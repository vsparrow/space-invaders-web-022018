class Spaceship {
  constructor(name,crewArray,phasers,shields){
    this.name = name
    this.phasers=phasers
    this.shields=shields
    this.docked = true
    this.phasersCharge = "uncharged"
    this.warpDrive = "disengaged"
    this.cloaked = false
    this.crew = []
    // if(crewArray.length == 0){this.docked=true}
    if(crewArray.length > 0){
      // console.log("THERE IS A CREW!");
      // console.log(this.name);
      this.docked = false;
      this.crewSetup(crewArray)//wont work
      // this.call.crewSetup(this,crewArray)
      // this.crew.push()
    }//crew

  }//constructor
  crewSetup(crewArray){
    // console.log("typeof this");
    // console.log(typeof this);
    let ship = this;
    crewArray.forEach(function(crew){
          // console.log(typeof this);
          // console.log(crew);
      // console.log("inside crewSetup");
      // console.log(name); //Cannot read property 'name' of undefined
        // crew.currentShip=name //this sends name, we need send object
        ship.crew.push(crew)
        crew.currentShip=ship
    })
  }//crewSetup
}//class



// Space flight is no joke, and neither is this lab.
// You're going to need to create two ES6 JS classes, Spaceship and CrewMember.
// These classes will pump out instances that are by default unable to interact with one another.
// A space ship will be inactive if it is created without a crew.
//
// And a crew member by default will be hanging out in the Cantina looking for a ride
//   if they were not put inside a ship when it is initialized.
// Crew members will also be unable to use their special abilities if they're not assigned to a ship.
//   For example, a pilot cannot engageWarpDrive if s/he is not in a ship and,
//   therefore, can't make the Kessel Run in less than twelve parsecs.
//  Crew members also should be unable to perform certain actions that their positions are incapable of doing.
//
// To have these two objects be aware of one another,
// we need to have the ship become aware of its crew members on instantiation.
// This will also require you to make sure a crew member becomes aware of their ship when they are added to it.
//
// TLDR; A ship cannot exist without a crew
//  and an individual crew member can't use their special ability if not assigned to a ship.
