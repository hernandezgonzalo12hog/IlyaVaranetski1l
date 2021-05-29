const PLANE = require('./Plane');

class MY_PLANE  extends PLANE {

    constructor(model, maxSpeed, maxFlightDistance, maxLoadCapacity) {
        super(model, maxSpeed, maxFlightDistance, maxLoadCapacity);

    }
}

module.exports = MY_PLANE;
