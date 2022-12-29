const message: string = 'hello world';
const done: boolean = false;
const number: number[] = [1,2,3]
const messages: string[] = ['hello', 'world'];

let mightBeUndefined: string | undefined = undefined;
let nullableNumber: number | null = null;
let color: 'red' | 'orange' | 'yellow' = 'red';
color = 'orange';
// messages.push(2)
console.log(message);

function sum(x: number, y: number): number {
    return x + y
}

sum(1, 2)

function sumArray(numbers: number[]): number {
    return numbers.reduce((a, c) => a + c, 0)
}

const total = sumArray([1, 2, 3, 4, 5]);

interface Shape {
    getArea() : number
}

class Circle implements Shape {
    radius : number;

    constructor(radius: number) {
        this.radius = radius;
    }

    getArea() {
        return this.radius * this.radius * Math.PI
    }
}
class Rectangle implements Shape {
    width: number;
    height: number;
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}