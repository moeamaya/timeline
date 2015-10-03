class Timeline {

  constructor() {

    this.idMatrix = "hello";
    this.bones = [];
    this.boneMatrices = [];
    //...
  }


  create() {
    console.log("Timeline live!");
    
    for (let i = 0; i < 10; i++) {
       let dot = new Dot()
       dot.create()
    }
  }


}
