
let juiceName = "Apple Juice";
let timeToMixJuiceResult = undefined;

while (timeToMixJuiceResult == undefined) {
    if (juiceName == "Pure Strawberry Joy") {
        timeToMixJuiceResult = 0.5;}
    else if (juiceName == ("Energizer" || "Green Garden")) {
        timeToMixJuiceResult = 1.5;}
    else if (juiceName == "Tropical Island") {
        timeToMixJuiceResult = 3;}
    else if (juiceName == "All or Nothing") {
        timeToMixJuiceResult = 5;}
    else {
        timeToMixJuiceResult = 2.5;}
}

//console.log("Time: " + timeToMixJuiceResult);

let wedgesNeeded = 14;
let limes = ["small", "medium", "large"];
let wedgesCut = 0;
let limesCut = 0;

while (wedgesCut < wedgesNeeded) {
    if (limes[limesCut] == "small") {
        wedgesCut += 6;
        limesCut += 1;
    }
    else if (limes[limesCut] == "medium") {
        wedgesCut += 8;
        limesCut += 1;
    }
    else if (limes[limesCut] == "large") {
        wedgesCut += 10;
        limesCut += 1;
    }
    else {
        console.log("Ran out of wedges")
        break
    }
}

//console.log(wedgesCut + ' wedges cut. ' +
//wedgesNeeded + ' wedges needed.')


let timeLeft = 5;
let orders = ["Apple Juice", "Pure Strawberry Joy", "Energizer", "Green Garden", 
"Tropical Island", "All or Nothing", "Energizer"];
let totalOrderTime = 0;
let remainingOrders = [];
let index = 0;

while (index < orders.length && totalOrderTime < timeLeft) {
    if (orders[index] == "Pure Strawberry Joy") {
        totalOrderTime += 0.5;}
    else if (orders[index] == "Energizer" || orders[index] =="Green Garden") {
        totalOrderTime += 1.5;}
    else if (orders[index] == "Tropical Island") {
        totalOrderTime += 3;}
    else if (orders[index] == "All or Nothing") {
        totalOrderTime += 5;}
    else {
        totalOrderTime += 2.5;}
    index ++;

    if (totalOrderTime >= timeLeft && index != orders.length) {
        remainingOrders = orders.slice(index);
        //console.log("Orders Remaining: " + remainingOrders);
        }
}
