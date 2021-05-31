const militaryPlane = require('./Planes/MilitaryPlane');
const passengerPlane = require('./Planes/PassengerPlane');
const militaryType = require('./models/MilitaryType');
const experimentalPlane = require('./Planes/ExperimentalPlane');
const experimentalType = require('./models/ExperimentalTypes');
const classificationLevel = require('./models/ClassificationLevel');

(() => {

    let planes = [
        new passengerPlane('Boeing-737', 900, 12000, 60500, 164), //camelcase
        new passengerPlane('Boeing-737-800', 940, 12300, 63870, 192),
        new passengerPlane('Boeing-747', 980, 16100, 70500, 242),
        new passengerPlane('Airbus A320', 930, 11800, 65500, 188),
        new passengerPlane('Airbus A330', 990, 14800, 80500, 222),
        new passengerPlane('Embraer 190', 870, 8100, 30800, 64),
        new passengerPlane('Sukhoi Superjet 100', 870, 11500, 50500, 140),
        new passengerPlane('Bombardier CS300', 920, 11000, 60700, 196),
        new militaryPlane('B-1B Lancer', 1050, 21000, 80000, militaryType.TYPE_BOMBER),
        new militaryPlane('B-2 Spirit', 1030, 22000, 70000, militaryType.TYPE_BOMBER),
        new militaryPlane('B-52 Stratofortress', 1000, 20000, 80000, militaryType.TYPE_BOMBER),
        new militaryPlane('F-15', 1500, 12000, 10000, militaryType.TYPE_FIGHTER),
        new militaryPlane('F-22', 1550, 13000, 11000, militaryType.TYPE_FIGHTER),
        new militaryPlane('C-130 Hercules', 650, 5000, 110000, militaryType.TRANSPORT),
        new experimentalPlane("Bell X-14", 277, 482, 500, experimentalType.HIGH_ALTITUDE, classificationLevel.SECRET),
        new experimentalPlane("Ryan X-13 Vertijet", 560, 307, 500, experimentalType.VTOL, classificationLevel.TOP_SECRET)
    ];

    const airport = new airport(planes); 
    const militaryAirport = new airport(airport.getMilitaryPlanes());
    const passengerAirport = new airport(airport.getPasPl());
    console.log(`Military airport sorted by max distance: ${airport.print(militaryAirport.sortByMaxDistance())}`);
    console.log(`Passenger airport sorted by max speed: ${airport.print(passengerAirport.sortByMaxSpeed())}`);
    console.log(`Plane with max passenger capacity: ${airport.print(passengerAirport.getPassengerPlaneWithMaxPassengersCapacity())}`);
})();