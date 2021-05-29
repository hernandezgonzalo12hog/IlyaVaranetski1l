const PLANE = require('./Planes/Plane');
const MILITARY_PLANE = require('./Planes/MILITARY_PLANE');
const PASSENGER_PLANE = require('./Planes/PassengerPlane');
const AIRPORT = require('./Airport');
const MILITARY_TYPE = require('./models/MilitaryType');
const EXPERIMENTAL_PLANE = require('./Planes/ExperimentalPlane');
const EXPERIMENTAL_TYPE = require('./models/ExperimentalTypes');
const CLASSIFICATION_LEVEL = require('./models/ClassificationLevel');

(() => {

    let planes = [
        new PASSENGER_PLANE('Boeing-737', 900, 12000, 60500, 164),
        new PASSENGER_PLANE('Boeing-737-800', 940, 12300, 63870, 192),
        new PASSENGER_PLANE('Boeing-747', 980, 16100, 70500, 242),
        new PASSENGER_PLANE('Airbus A320', 930, 11800, 65500, 188),
        new PASSENGER_PLANE('Airbus A330', 990, 14800, 80500, 222),
        new PASSENGER_PLANE('Embraer 190', 870, 8100, 30800, 64),
        new PASSENGER_PLANE('Sukhoi Superjet 100', 870, 11500, 50500, 140),
        new PASSENGER_PLANE('Bombardier CS300', 920, 11000, 60700, 196),
        new MILITARY_PLANE('B-1B Lancer', 1050, 21000, 80000, MILITARY_TYPE.TYPE_BOMBER),
        new MILITARY_PLANE('B-2 Spirit', 1030, 22000, 70000, MILITARY_TYPE.TYPE_BOMBER),
        new MILITARY_PLANE('B-52 Stratofortress', 1000, 20000, 80000, MILITARY_TYPE.TYPE_BOMBER),
        new MILITARY_PLANE('F-15', 1500, 12000, 10000, MILITARY_TYPE.TYPE_FIGHTER),
        new MILITARY_PLANE('F-22', 1550, 13000, 11000, MILITARY_TYPE.TYPE_FIGHTER),
        new MILITARY_PLANE('C-130 Hercules', 650, 5000, 110000, MILITARY_TYPE.TRANSPORT),
        new EXPERIMENTAL_PLANE("Bell X-14", 277, 482, 500, EXPERIMENTAL_TYPE.HIGH_ALTITUDE, CLASSIFICATION_LEVEL.SECRET),
        new EXPERIMENTAL_PLANE("Ryan X-13 Vertijet", 560, 307, 500, EXPERIMENTAL_TYPE.VTOL, CLASSIFICATION_LEVEL.TOP_SECRET)
    ];

    let airport = new AIRPORT(planes);
    let militaryAirport = new AIRPORT(airport.getMilitaryPlanes());
    let passengerAirport = new AIRPORT(airport.getPasPl());
    console.log(`Military airport sorted by max distance: ${AIRPORT.print(militaryAirport.sortByMaxDistance())}`);
    console.log(`Passenger airport sorted by max speed: ${AIRPORT.print(passengerAirport.sortByMaxSpeed())}`);
    console.log(`Plane with max passenger capacity: ${AIRPORT.print(passengerAirport.getPassengerPlaneWithMaxPassengersCapacity())}`);
})();