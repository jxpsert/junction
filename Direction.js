class Direction {
  _lights = [];

  constructor(...lights) {
    lights.forEach((light) => {
      this._lights.push(light);
    });
  }

  flash(colour) {
    this._lights.forEach((light) => {
      light.flash(colour);
    });
  }

  green() {
    this._lights.forEach((light) => {
      light.green();
    });
  }

  orange() {
    this._lights.forEach((light) => {
      light.orange();
    });
  }

  red() {
    this._lights.forEach((light) => {
      light.red();
    });
  }

  shiftToRed() {
    this._lights.forEach((light) => {
      light.shiftToRed();
    });
  }

  toggleFlash(colour) {
    if (this._lights[0]._state === Light.STATES.FLASHING) {
      this._lights.forEach((light) => {
        light.stopFlashing();
      });
    } else {
      this._lights.forEach((light) => {
        light.startFlashing(colour);
      });
    }
  }
}
