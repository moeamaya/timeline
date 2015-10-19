'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Dot = (function () {
  function Dot(day) {
    _classCallCheck(this, Dot);

    this._day = day;

    this.$items = $('<div class="items">');
    this.$circle = $('<div class="circle">');
    this.$day = $('<div class="day"> ' + Helpers.formatDay(day) + ' </div>');
    this.$domObj = $('<div class="dot">').append(this.$circle).append(this.$items).append(this.$day);
  }

  _createClass(Dot, [{
    key: 'create',
    value: function create() {
      var _this = this;

      $('.timeline').append(this.$domObj);

      this.$circle.bind('click', function () {
        var item = new Item();
        item.create(_this.$items);
      });
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.$domObj.remove();
    }
  }, {
    key: 'day',
    get: function get() {
      return this._day;
    }
  }]);

  return Dot;
})();
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Item = (function () {
  function Item() {
    _classCallCheck(this, Item);

    this.$event = $('<input class="item" type="text" placeholder="Add event...">');
    this.$linkInput = $('<input class="linkInput" type="text" placeholder="Link...">');
    this.$link = $('<a class="link" href="" target="_blank">Link</a>');

    this.linkState = false;
  }

  _createClass(Item, [{
    key: 'create',
    value: function create(dot) {
      var _this = this;

      dot.append(this.$event).append(this.$linkInput).append(this.$link);
      this.$event.focus();

      this.$linkInput.bind('focusout', function (e) {
        var hasText = $(e.target).val();
        if (hasText) {
          var isValidLink = Helpers.validateLink(hasText);
          if (isValidLink) {
            _this.$linkInput.hide();
            _this.$link.attr('href', hasText).show();
          }
        } else {
          console.log("no linnk");
        }
      });
    }
  }]);

  return Item;
})();
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Timeline = (function () {
  function Timeline() {
    _classCallCheck(this, Timeline);

    this.days = 30; // default to 30 days
    this.daysArray = [];
  }

  _createClass(Timeline, [{
    key: "create",
    value: function create() {
      console.log("Timeline live!");
      var today = new Date();

      for (var i = 0; i < this.days; i++) {
        var day = new Date(today.getFullYear(), today.getMonth(), today.getDate() + i);

        var dot = new Dot(day);
        dot.create();

        this.daysArray.push(dot);
      }
    }
  }, {
    key: "updateDays",
    value: function updateDays(amount) {
      var previousAmount = this.days;
      var delta = amount - previousAmount;

      if (delta > 0) {
        var day = this.daysArray[this.daysArray.length - 1].day;
        var range = Math.abs(delta) + 1;

        for (var i = 0; i < range; i++) {
          var nextDay = new Date(day.getFullYear(), day.getMonth(), day.getDate() + i);
          var newDay = this.createDay(nextDay);
        }
      } else if (delta < 0) {
        var range = Math.abs(delta);

        for (var i = 0; i < range; i++) {
          var day = this.daysArray.pop();
          day.destroy();
        }
      }

      this.days = amount;
    }
  }, {
    key: "createDay",
    value: function createDay(day) {
      var dot = new Dot(day);
      dot.create();
      this.daysArray.push(dot);
    }
  }]);

  return Timeline;
})();
'use strict';

$(function () {

  var timeline = new Timeline();

  timeline.create();

  // ---------------------------
  // Global Events
  // ---------------------------

  $('.timeline').on('mouseenter', '.dot', function (e) {
    var $target = $(e.target);
    var $obj = $target.hasClass("circle") ? $target.parent() : $target;

    Helpers.addPrevClass($obj, 'prev');
  });

  $('.js-days').on('change', function (e) {
    var amount = $(e.target).val();
    timeline.updateDays(amount);
  });
});
