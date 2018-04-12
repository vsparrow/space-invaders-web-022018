class CrewMember {
  constructor(position){
    this.position = position;
    this.currentShip = "Looking for a Rig";
  }
  engageWarpDrive(){
    if(this.currentShip == "Looking for a Rig"){return "had no effect"}
    // else {}
  }
  setsInvisibility(){
        if(this.currentShip == "Looking for a Rig"){return "had no effect"}
        else if (this.position=="Defender") {
          // console.log(this.currentShip);
          // console.log("Setting setsInvisibility");
          // console.log(this.currentShip.cloaked );
          this.currentShip.cloaked = true;
          // console.log(this.currentShip.cloaked );
          return this.currentShip
        }
  }
  chargePhasers(){
        if(this.currentShip == "Looking for a Rig"){return "had no effect"}
  }
}//class
