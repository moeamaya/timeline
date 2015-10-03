$(function(){

  var WEEK = 90; // 90px = 1 week
  var PRICE = 3500; // $3500 = 1 week

  var $schedule = $('.schedule');
  var $price = $('.price');

  // Resizeable div
  interact('.resize-drag')
  .draggable({
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
    restrict: {
      restriction: "parent",
      endOnly: true,
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    },

    // call this function on every dragmove event
    onmove: dragMoveListener,
    // call this function on every dragend event
    onend: function (event) {
      var textEl = event.target.querySelector('p');

      textEl && (textEl.textContent =
        'moved a distance of '
        + (Math.sqrt(event.dx * event.dx +
                     event.dy * event.dy)|0) + 'px');
    }
  })
  .resizable({
    edges: { bottom: true, top: true },
    onend: function(event) {
      var height = event.target.clientHeight;
      
      calcSchedule(height);
    }
  })
  .on('resizemove', function (event) {
    var target = event.target,
        x = (parseFloat(target.getAttribute('data-x')) || 0),
        y = (parseFloat(target.getAttribute('data-y')) || 0);

    // update the element's style
    target.style.height = event.rect.height + 'px';

    // translate when resizing from top or left edges
    x += event.deltaRect.left;
    y += event.deltaRect.top;

    target.style.webkitTransform = target.style.transform =
        'translate(' + x + 'px,' + y + 'px)';

    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);


  });




  function dragMoveListener (event) {
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  };

  // this is used later in the resizing demo
  window.dragMoveListener = dragMoveListener;



  function calcSchedule(height){
    var weeks = height / WEEK;
    var weeksRoundHalf = Math.round(weeks * 2) / 2;
    $schedule.text(weeksRoundHalf);

    calcPrice(weeksRoundHalf);
  };

  function calcPrice(weeks){
    var price = weeks * PRICE;
    $price.text(price);
  };


});


