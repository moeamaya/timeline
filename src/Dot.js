class Dot {

  constructor() {
    this.$items = $('<div class="items">');
    this.$circle = $('<div class="circle">');
    this.$domObj = $('<div class="dot">')
      .append(this.$circle)
      .append(this.$items);
  }

  create() {
    $('.timeline').append(this.$domObj);

    this.$circle.bind('click', () => {
      let item = new Item();
      item.create(this.$items);
    })
  }

}