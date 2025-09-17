
let hourlyRate = 60;
let dayRate = hourlyRate * 8;
console.log(dayRate);

let budget = 1000;
let workdays = Math.floor(budget / dayRate);
console.log(workdays);

let billable = 22;
let monthlyDiscount = 0.8;
let fullMonths = Math.floor(35 / billable);
console.log(fullMonths)
let remainingDays = 35 - billable;
let discountedMonthlyRate = billable * dayRate * monthlyDiscount;
console.log(discountedMonthlyRate)
let remainingCost = remainingDays * dayRate;
let totalProjectCost = Math.round(discountedMonthlyRate + remainingCost);
console.log(totalProjectCost)