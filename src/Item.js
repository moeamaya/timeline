class Item {

  constructor() {
    this.$domObj = $('<input class="item" type="text" placeholder="Type task...">');
  }

  create(dot) {
    dot.append(this.$domObj);
  }

}