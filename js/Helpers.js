var Helpers = {
  staggerType: function(char, $src, delay){
    setTimeout(function(){
      $src.append(char)
    }, delay);
  },

  // appends a string to a jQuery objects
  // in a randomized typing like fashion
  typeConsole: function(str, $src){
    var max = 80;
    var min = 0;

    for(var i = 0; i < str.length; i++){
      var delay = Math.floor(Math.random() * (max - min)) + min + (i * max);
      this.staggerType(str[i], $src, delay)
    };
  },

  // input a min and max range in seconds ie (1, 10)
  // returns a random time value in milliseconds
  randomTime: function(min, max){
    return ( Math.random() * (max - min) + min ) * 1000;
  },

  // get previous sibling and add a class
  addPrevClass: function($obj, className) {
    var $prevSibling = $obj.prev();
    if ($prevSibling) {
      $prevSibling.addClass(className);
    }

    $obj.bind('mouseleave', function(){
      $prevSibling.removeClass(className);
    });
  },

  monthNames: [
    "Jan", "Feb", "Mar",
    "Apr", "May", "Jun", "Jul",
    "Aug", "Sept", "Oct",
    "Nov", "Dec"
  ],

  formatDay: function(day){
    var month = this.monthNames[day.getMonth()];
    return month + ' ' + day.getDate();
  },

  validateLink: function(value) {
    return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test( value );
  }


};