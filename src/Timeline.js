class Timeline {

  constructor() {
    this.days = 30; // default to 30 days
    this.daysArray = [];
  }


  create() {
    console.log("Timeline live!");
    let today = new Date();

    for (let i = 0; i < this.days; i++) {
      let day = new Date(today.getFullYear(), today.getMonth(), today.getDate() + i);

      let dot = new Dot(day);
      dot.create();

      this.daysArray.push(dot);
    }
  }

  updateDays(amount) {
    let previousAmount = this.days;
    let delta = amount - previousAmount;

    if (delta > 0) {
      let day = this.daysArray[this.daysArray.length - 1].day;
      let range = Math.abs(delta) + 1;

      for (let i = 0; i < range; i++) {
        let nextDay = new Date(day.getFullYear(), day.getMonth(), day.getDate() + i);
        let newDay = this.createDay(nextDay);
      }  
        
    } else if (delta < 0) {
      let range = Math.abs(delta);

      for (let i = 0; i < range; i++) {
        let day = this.daysArray.pop();
        day.destroy();
      }

    }

    this.days = amount;
  }


  createDay(day) {
    let dot = new Dot(day);
    dot.create();
    this.daysArray.push(dot);
  }


}
