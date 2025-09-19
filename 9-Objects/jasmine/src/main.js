
let scoreBoard = {
    "The Best Ever": 1000000,
    "Cheater": 999999999999999
};
console.log(scoreBoard);

let newPlayerName = "New Player";
let newPlayerScore = 100;
scoreBoard[newPlayerName] = newPlayerScore
console.log(scoreBoard);

let playerToRemove = "Cheater";
delete scoreBoard[playerToRemove];
console.log(scoreBoard);

let playerNameToUpdate = "New Player";
let scoreToAdd = 1000;
scoreBoard[playerNameToUpdate] += scoreToAdd;
console.log(scoreBoard);

let mondayBonus = 100;
for (const key in scoreBoard) {
    if (!Object.hasOwn(scoreBoard, key)) continue;
    
    scoreBoard[key] += mondayBonus;
}

console.log(scoreBoard);