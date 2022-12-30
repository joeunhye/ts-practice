"use strict";
function sum(x, y) {
    return x + y;
}
sum(1, 2);
function sumArray(numbers) {
    return numbers.reduce((a, c) => a + c, 0);
}
const total = sumArray([1, 2, 3, 4, 5]);
function returnNothing() {
    console.log('I am just saying hello world');
}
