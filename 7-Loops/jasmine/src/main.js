
let birdsPerDay = [3, 5, 9, 3, 16, 4, 7, 20, 2, 6, 4, 12, 0, 8];
let total = 0;

for (let index = 0; index < birdsPerDay.length; index++) {
    total += birdsPerDay[index];
}
//console.log(total);


let week = 1;
let daysPerWeek = 7;
let weekStart = (week - 1) * daysPerWeek;
let weekEnd = week * daysPerWeek;
let weekTotal = 0;

for (index = weekStart; index < weekEnd && index < birdsPerDay.length; index++) {
    weekTotal += birdsPerDay[index];
}
//console.log(weekTotal);


for (index = 0; index < birdsPerDay.length; index+= 2) {
    birdsPerDay[index] += 1;
}
//console.log(birdsPerDay);