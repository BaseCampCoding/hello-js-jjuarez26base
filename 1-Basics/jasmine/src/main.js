
const EXPECTED_MINUTES_IN_OVEN = 40;

let actualMinutesInOven = 25;

let remainingMinutesInOven = EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;

console.log(remainingMinutesInOven);

var numberOfLayers = 3;

var preparationTimeInMinutes = numberOfLayers * 2;

console.log(preparationTimeInMinutes);

let totalTimeInMinutes = preparationTimeInMinutes + actualMinutesInOven;

console.log(totalTimeInMinutes);