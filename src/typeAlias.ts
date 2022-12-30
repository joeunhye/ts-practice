type Person2 = {
    name: string;
    age?: number;
}

type Developer2 = Person2 & {
    skills: string[];
}

const person2: Person2 = {
    name: 'Tom'
}

const expert2: Developer2 = {
    name: 'Jun',
    skills: ['javascript', 'react']
}

type People = Person2[];
const people0: People = [person2, expert2];