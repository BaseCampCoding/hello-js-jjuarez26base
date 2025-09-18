
let stack = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Task 1
let position = 2;
let getItemResult = stack[position];
console.log(getItemResult);

// Task 2
let replacementCard =  21;
stack[position] = replacementCard;
console.log(stack);

// Task 3
let newCardTop = 11;
stack.unshift(newCardTop);
console.log(stack);

// Task 4
stack.splice(position, 1);
console.log(stack);

// Task 5
stack.shift();
console.log(stack);

// Task 6
let newCardBottom = 11;
stack.push(newCardBottom);
console.log(stack);

// Task 7
stack.pop();
console.log(stack);

// Task 8
let stackSize = 11;
let checkSizeOfStackResult = stack.length == stackSize;
console.log(checkSizeOfStackResult);

/*
if (stack.length == stackSize) {
    let checkSizeOfStackResult = true;
    console.log(checkSizeOfStackResult);
    console.log(stack.length);
    console.log(stackSize);
}

else {
    let checkSizeOfStackResult = false;
    console.log(checkSizeOfStackResult);
    console.log(stack.length);
    console.log(stackSize);
}
*/