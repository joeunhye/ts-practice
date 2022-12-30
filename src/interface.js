"use strict";
class Circle {
    // radius1 : number;
    constructor(radius) {
        this.radius = radius;
        this.radius = radius;
    }
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}
class Rectangle {
    // width: number;
    // height: number;
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
const shapes = [new Circle(5), new Rectangle(10, 5)];
console.log(shapes);
const person = {
    name: '김사랑',
    age: 20,
};
const expert = {
    name: '김개발',
    skills: ['javascript', 'react']
};
const people = [person, expert];
