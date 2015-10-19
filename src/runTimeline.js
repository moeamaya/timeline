$(function(){

  let timeline = new Timeline();

  timeline.create();




  // ---------------------------
  // Global Events
  // ---------------------------

  $('.timeline').on('mouseenter', '.dot', function(e) {
    let $target = $(e.target);
    let $obj = $target.hasClass("circle") ? $target.parent() : $target;
    
    Helpers.addPrevClass($obj, 'prev');
  });

  $('.js-days').on('change', (e) => {
    var amount = $(e.target).val();
    timeline.updateDays(amount);
  });


});


