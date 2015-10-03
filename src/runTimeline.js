$(function(){

  let timeline = new Timeline();

  timeline.create();





  // ---------------------------
  // Global Events
  // ---------------------------

  $('.timeline').on('mouseover', '.dot', function(e) {
    Helpers.addPrevClass(e, 'prev');
  });


});


