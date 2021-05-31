const PLANE = require('./Plane');

class PASSENGER_PLANE extends PLANE {
    constructor(model, maxSpeed, maxFlightDistance, maxLoadCapacity, passengersCapacity) {
        super(model, maxSpeed, maxFlightDistance, maxLoadCapacity);
        this._passengersCapacity = passengersCapacity;
    }
    getPassengersCapacity() {
        return this._passengersCapacity;
    }
}

module.exports = PASSENGER_PLANE;