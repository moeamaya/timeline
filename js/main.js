'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Dot = (function () {
  function Dot() {
    _classCallCheck(this, Dot);

    this.$items = $('<div class="items">');
    this.$circle = $('<div class="circle">');
    this.$domObj = $('<div class="dot">').append(this.$circle).append(this.$items);
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
  }]);

  return Dot;
})();
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Item = (function () {
  function Item() {
    _classCallCheck(this, Item);

    this.$domObj = $('<input class="item" type="text" placeholder="Type task...">');
  }

  _createClass(Item, [{
    key: 'create',
    value: function create(dot) {
      dot.append(this.$domObj);
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

    this.idMatrix = "hello";
    this.bones = [];
    this.boneMatrices = [];
    //...
  }

  _createClass(Timeline, [{
    key: "create",
    value: function create() {
      console.log("Timeline live!");

      for (var i = 0; i < 10; i++) {
        var dot = new Dot();
        dot.create();
      }
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

  $('.timeline').on('mouseover', '.dot', function (e) {
    Helpers.addPrevClass(e, 'prev');
  });
});
