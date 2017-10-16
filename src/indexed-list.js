export default class IndexedList {
  constructor(options) {
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
    }
    if (!this.isTouch) {
      this.envObj = {
        touchstart: 'mousedown',
        touchmove: 'mousemove',
        touchend: 'mouseup'
      }
    }
    this.isMove = false;
    this.initialize(options)
  }

  initialize() {
    const { navEl } = this.options;
    const { envObj } = this;
    navEl.addEventListener(envObj.touchstart, this.touchStart, false);
    document.addEventListener(envObj.touchmove, this.touchMove, false);
    navEl.addEventListener(envObj.touchend, this.touchEnd, false);
  }

  touchStart = (e) => {
    if ( !this.isMove ) {
      e.preventDefault();
      let pageX = this.isTouch ? e.touches[0].pageX: e.pageX;
      let pageY = this.isTouch ? e.touches[0].pageY: e.pageY;
      this.start(pageX, pageY);
    }
  }

  touchMove = (e) => {
    if ( this.isMove ) {
      e.preventDefault();
      let pageX = this.isTouch ? e.touches[0].pageX: e.pageX;
      let pageY = this.isTouch ? e.touches[0].pageY: e.pageY;
      this.move(pageX, pageY);
    }
  }

  touchEnd(e) {
    if ( this.isMove ) {
      e.preventDefault();
      this.end();
    }
  }

  start = (pageX, pageY) => {
    this.isMove = true;
    // this.move(clientX, clientY);
  }

  move = (pageX, pageY) => {
    const target = document.elementFromPoint(pageX, pageY);
    let targetEl;
    if (target.innerText && target.innerText.length < 3) {
      targetEl = document.querySelector(`${this.options.content} li[data-ch="T"]`);
    }
  
    if (targetEl) {
      targetEl.scrollIntoView()
    }
  }

  end = () => {
    this.move = false;
  }

  trigger(event, callback) {

  }
  on(event, callback) {

  }
  off(event, callback) {

  }
}
