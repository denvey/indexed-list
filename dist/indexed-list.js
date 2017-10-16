/*! lozad.js - v1.0.8 - 2017-10-16
* https://github.com/ApoorvSaxena/lozad.js
* Copyright (c) 2017 Apoorv Saxena; Licensed MIT */


(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.IndexedList = factory());
}(this, (function () { 'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IndexedList = function () {
  function IndexedList(options) {
    var _this = this;

    _classCallCheck(this, IndexedList);

    this.touchStart = function (e) {
      if (!_this.isMove) {
        e.preventDefault();
        var pageX = _this.isTouch ? e.touches[0].pageX : e.pageX;
        var pageY = _this.isTouch ? e.touches[0].pageY : e.pageY;
        _this.start(pageX, pageY);
      }
    };

    this.touchMove = function (e) {
      if (_this.isMove) {
        e.preventDefault();
        var pageX = _this.isTouch ? e.touches[0].pageX : e.pageX;
        var pageY = _this.isTouch ? e.touches[0].pageY : e.pageY;
        _this.move(pageX, pageY);
      }
    };

    this.start = function (pageX, pageY) {
      _this.isMove = true;
      // this.move(clientX, clientY);
    };

    this.move = function (pageX, pageY) {
      var target = document.elementFromPoint(pageX, pageY);
      var targetEl = void 0;
      if (target.innerText && target.innerText.length < 3) {
        targetEl = document.querySelector(_this.options.content + ' li[data-ch="T"]');
      }

      if (targetEl) {
        targetEl.scrollIntoView();
      }
    };

    this.end = function () {
      _this.move = false;
    };

    this.options = {
      navEl: typeof options.nav === "string" ? document.querySelector(options.nav) : options.nav,
      content: options.content
    };
    this.isTouch = 'ontouchstart' in document;
    // this.navRect = navEl.getBoundingClientRect();
    this.envObj = {
      touchstart: 'touchstart',
      touchmove: 'touchmove',
      touchend: 'touchend'
    };
    if (!this.isTouch) {
      this.envObj = {
        touchstart: 'mousedown',
        touchmove: 'mousemove',
        touchend: 'mouseup'
      };
    }
    this.isMove = false;
    this.initialize(options);
  }

  _createClass(IndexedList, [{
    key: 'initialize',
    value: function initialize() {
      var navEl = this.options.navEl;
      var envObj = this.envObj;

      navEl.addEventListener(envObj.touchstart, this.touchStart, false);
      document.addEventListener(envObj.touchmove, this.touchMove, false);
      navEl.addEventListener(envObj.touchend, this.touchEnd, false);
    }
  }, {
    key: 'touchEnd',
    value: function touchEnd(e) {
      if (this.isMove) {
        e.preventDefault();
        this.end();
      }
    }
  }, {
    key: 'trigger',
    value: function trigger(event, callback) {}
  }, {
    key: 'on',
    value: function on(event, callback) {}
  }, {
    key: 'off',
    value: function off(event, callback) {}
  }]);

  return IndexedList;
}();

return IndexedList;

})));
