"use strict";
const message = 'hello world';
const done = false;
const number = [1, 2, 3];
const messages = ['hello', 'world'];
let mightBeUndefined = undefined;
let nullableNumber = null;
let color = 'red';
color = 'orange';
// messages.push(2)
console.log(message);
function sum(x, y) {
    return x + y;
}
sum(1, 2);
function sumArray(numbers) {
    return numbers.reduce((a, c) => a + c, 0);
}
const total = sumArray([1, 2, 3, 4, 5]);
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
