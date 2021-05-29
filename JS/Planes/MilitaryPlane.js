const PLANE = require('./Plane');

class MILITARY_PLANE extends PLANE {

    constructor(model, maxSpeed, maxFlightDistance, maxLoadCapacity, militaryType) {
        super(model, maxSpeed, maxFlightDistance, maxLoadCapacity);
        this.militaryType = militaryType;
    }

    getMilitaryType() {
        return this.militaryType;
    }
}

module.exports = MILITARY_PLANE;