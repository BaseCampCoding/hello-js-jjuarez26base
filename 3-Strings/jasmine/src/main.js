
let line = "Stands so high";
let frontDoorLetter = line[0]

let frontDoorWord = "SHIRE";
let firstLetter = frontDoorWord[0];
let remainingLetters = frontDoorWord.slice(1);
let frontDoorPassword = firstLetter + remainingLetters.toLowerCase();

let lineWithWhitespace = "Reins and harness";
let removeWhiteSpace = lineWithWhitespace.trim();
let backDoorLetter = removeWhiteSpace[removeWhiteSpace.length - 1];

let backDoorWord = 'Horse';
let backDoorPassword = backDoorWord + ", please";