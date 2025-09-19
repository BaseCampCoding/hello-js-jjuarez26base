
let digits1 = [1, 7, 3];
let digits2 = [3, 6, 2];
let number1 = Number(digits1.join(''));
let number2 = Number(digits2.join(''));
let twoSum = number1 + number2;
console.log(twoSum);


let luckyInput = twoSum;
let luckyInputStr = String(luckyInput);
let luckyNumber;
let reverseLuckyInputStr = luckyInputStr.split('').reverse().join('');

if (luckyInputStr == reverseLuckyInputStr) {
    luckyNumber = true;
}
else {
    luckyNumber = false;
}
console.log(luckyNumber);


let userInput = '123';
let errorMesage;

if (userInput == undefined || userInput == null || userInput == '') {
    errorMesage = 'Required field';
}
else if (Number(userInput) == 0) {
    errorMesage = 'Must be a number besides 0';
}
else {
    errorMesage = ''
}
console.log(errorMesage);