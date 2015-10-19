class Dot {

  constructor(day) {
    this._day = day;

    this.$items = $('<div class="items">');
    this.$circle = $('<div class="circle">');
    this.$day = $(`<div class="day"> ${Helpers.formatDay(day)} </div>`);
    this.$domObj = $('<div class="dot">')
      .append(this.$circle)
      .append(this.$items)
      .append(this.$day);
  }

  create() {
    $('.timeline').append(this.$domObj);

    this.$circle.bind('click', () => {
      let item = new Item();
      item.create(this.$items);
    });
  }

  destroy() {
    this.$domObj.remove();
  }

  get day() {
    return this._day
  }


}