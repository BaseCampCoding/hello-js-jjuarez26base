
let kind = 'car';

if (kind == "car" || kind == "truck") {
    let needsLicenseResult = true;
    console.log(needsLicenseResult);
}

else {let needsLicenseResult = false;
    console.log(needsLicenseResult);
}

let option1 = 'Corolla';
let option2 = 'Prius';
let chooseVehicleResult;
if (option1 > option2){
    chooseVehicleResult = option2 + " is clearly the better choice.";
}
else {
    chooseVehicleResult = option1 + " is clearly the better choice.";
}
console.log(chooseVehicleResult);

let originalPrice = 22725;
let age = 7
let calculateResellPriceResult;

if (age < 3) {
   calculateResellPriceResult = originalPrice * 0.8;
   console.log(calculateResellPriceResult);
}   
else if (age > 10){
    calculateResellPriceResult = originalPrice * 0.5;
    console.log(calculateResellPriceResult);
}
else if (age >= 3){
    calculateResellPriceResult = originalPrice * 0.7;
    console.log(calculateResellPriceResult);
} 
else {
    console.log('All checks failed.');
}