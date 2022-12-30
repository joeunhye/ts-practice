interface Shape {
    getArea() : number
}

class Circle implements Shape {
    // radius1 : number;

    constructor(public radius: number) {
        this.radius = radius;
    }

    getArea() {
        return this.radius * this.radius * Math.PI
    }
}
class Rectangle implements Shape {
    // width: number;
    // height: number;
    constructor(private width: number, private height: number) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

console.log(shapes);

interface Person {
    name: string;
    age?: number
}

interface Developer {
    name: string;
    age?: number;
    skills: string[]
}

const person: Person = {
    name: '김사랑',
    age: 20,
}
const expert: Developer = {
    name: '김개발',
    skills: ['javascript', 'react']
}

const people: Person[] = [person, expert];
