class Light {
  _element;
  _state = 0;
  _flashInterval;

  static STATES = {
    REGULATE: 0,
    FLASHING: 1,
  };

  static COLOURS = {
    RED: 0,
    ORANGE: 1,
    GREEN: 2,
  };

  constructor(element) {
    this._element = element;
  }

  green() {
    this.allOff();
    this._element.children[2].classList.remove("off");
  }

  orange() {
    this.allOff();
    this._element.children[1].classList.remove("off");
  }

  red() {
    this.allOff();
    this._element.children[0].classList.remove("off");
  }

  shiftToRed() {
    this.allOff();
    this.orange(); // Turn orange to warn
    setTimeout(() => {
      this.red(); // Turn red
    }, 3000); // Wait 3 seconds
  }

  flash(colour) {
    this.allOff();
    switch (colour) {
      case Light.COLOURS.RED:
        this.red();
        setTimeout(() => {
          this.allOff();
        }, 1000);
        break;
      case Light.COLOURS.ORANGE:
        this.orange();
        setTimeout(() => {
          this.allOff();
        }, 1000);
        break;
      case Light.COLOURS.GREEN:
        this.green();
        setTimeout(() => {
          this.allOff();
        }, 1000);
        break;
    }
  }

  startFlashing(colour) {
    this.setState(Light.STATES.FLASHING);
    this._flashInterval = setInterval(() => {
      this.flash(colour);
    }, 2000);
    this.flash(colour);
  }

  stopFlashing() {
    this.setState(Light.STATES.REGULATE);
    clearInterval(this._flashInterval);
    setTimeout(() => {
      this.red();
    }, 1000);
  }

  toggleFlash(colour) {
    if (this._state === Light.STATES.FLASHING) {
      this.stopFlashing();
    } else {
      this.startFlashing(colour);
    }
  }

  allOff() {
    const children = Array.from(this._element.children);
    children.forEach((child) => {
      child.classList.add("off");
    });
  }

  setState(state) {
    this._state = state;
  }
}
