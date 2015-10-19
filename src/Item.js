class Item {

  constructor() {
    this.$event = $('<input class="item" type="text" placeholder="Add event...">');
    this.$linkInput = $('<input class="linkInput" type="text" placeholder="Link...">');
    this.$link = $('<a class="link" href="" target="_blank">Link</a>');

    this.linkState = false;
  }

  create(dot) {
    dot.append(this.$event)
      .append(this.$linkInput)
      .append(this.$link);
    this.$event.focus();


    this.$linkInput.bind('focusout', (e) => {
      let hasText = $(e.target).val();
      if (hasText) {
        var isValidLink = Helpers.validateLink(hasText);
        if (isValidLink) {
          this.$linkInput.hide();
          this.$link.attr('href', hasText).show();
        }
      } else {
        console.log("no linnk");
      }
      
    });
  }


}