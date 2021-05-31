const assert = require('chai').assert;

const militaryPlane = require('../Planes/MilitaryPlane');
const passengerPlane = require('../Planes/PassengerPlane');
const militaryType = require('../models/MilitaryType');
const experimentalPlane = require('../Planes/experimentalPlane');
const experimentalTypes = require('../models/ExperimentalTypes');

describe('Test Suite', () => {

    let planes = [
        new passengerPlane('Boeing-737', 900, 12000, 60500, 164),
        new passengerPlane('Boeing-737-800', 940, 12300, 63870, 192),
        new passengerPlane('Boeing-747', 980, 16100, 70500, 242),
        new passengerPlane('Airbus A320', 930, 11800, 65500, 188),
        new passengerPlane('Airbus A330', 990, 14800, 80500, 222),
        new passengerPlane('Embraer 190', 870, 8100, 30800, 64),
        new passengerPlane('Sukhoi Superjet 100', 870, 11500, 50500, 140),
        new passengerPlane('Bombardier CS300', 920, 11000, 60700, 196),
        new militaryPlane('B-1B Lancer', 1050, 21000, 80000, militaryType.BOMBER),
        new militaryPlane('B-2 Spirit', 1030, 22000, 70000, militaryType.BOMBER),
        new militaryPlane('B-52 Stratofortress', 1000, 20000, 80000, militaryType.BOMBER),
        new militaryPlane('F-15', 1500, 12000, 10000, militaryType.FIGHTER),
        new militaryPlane('F-22', 1550, 13000, 11000, militaryType.FIGHTER),
        new militaryPlane('C-130 Hercules', 650, 5000, 110000, militaryType.TRANSPORT),
        new experimentalPlane("Bell X-14", 277, 482, 500, experimentalTypes.HIGH_ALTITUDE, ClassificationLevel.SECRET),
        new experimentalPlane("Ryan X-13 Vertijet", 560, 307, 500, experimentalTypes.VTOL, ClassificationLevel.TOP_SECRET)
    ];
    let planeWithMaxPassengerCapacity = new passengerPlane('Boeing-747', 980, 16100, 70500, 242);

    it('Military planes with Transport type are existing', () => {
        let airport = new airport(planes);
        let transportMilitaryPlanes = airport.getTransportMilitaryPlanes();
        let flag = false;
        for (let militaryPlane of transportMilitaryPlanes) {
            if (militaryPlane.getMilitaryType() === militaryType.TYPE_TRANSPORT) {
                flag = true;
                break;
            }
        }
        assert.isTrue(flag); //add error message and fix == to ===
    });

    it('Finding plane with max capacity', () => {
        let airport = new airport(planes);
        let expectedPlaneWithMaxPassengersCapacity = airport.getPassengerPlaneWithMaxPassengersCapacity();
        assert.isTrue(expectedPlaneWithMaxPassengersCapacity === planeWithMaxPassengerCapacity);
    });


    it('Next plane has bigger capasity then current', () => {
        let airport = new airport(planes);
        airport.sortByMaxLoadCapacity();
        let planesSortedByMaxLoadCapacity = airport.getPlanes();
        let nextPlaneMaxLoadCapacityIsHigherThanCurrent;
        for (let i = 0; i < planesSortedByMaxLoadCapacity.length - 1; i++) {
            let currentPlane = planesSortedByMaxLoadCapacity[i];
            let nextPlane = planesSortedByMaxLoadCapacity[i + 1];
            if (currentPlane.getMinLoadCapacity() < nextPlane.getMinLoadCapacity()) {
                nextPlaneMaxLoadCapacityIsHigherThanCurrent = true; 
                break;
            }
        }
        assert.isTrue(nextPlaneMaxLoadCapacityIsHigherThanCurrent);
    })

    it('There is at least one bomber in military planes', () => {
        let airport = new airport(planes);
        let bomberMilitaryPlanes  = airport.getBomberMilitaryPlanes ();
        let flag = false;
        for (let militaryPlane of bomberMilitaryPlanes) {
            if (militaryPlane.getMilitaryType() === militaryType.BOMBER) {
                flag = true;  //also error message here
            }
        }
        assert.isTrue(flag);
    })

    it('Classification is higher for experemental planes then for unclassified', () => {
        let airport = new airport(planes);
        let bomberMilitaryPlanes = airport.getExperimentalPlanes ();
        let hasUnclassifiedPlanes = false;
        for (let experimentalPlane of bomberMilitaryPlanes) {
            if (experimentalPlane.classificationLevel === ClassificationLevel.UNCLASSIFIED) {
                hasUnclassifiedPlanes = true;
        }
        assert.isFalse(hasUnclassifiedPlanes);
        }
    });

});



