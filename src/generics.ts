function merge<A, B>(a: A, b: B): A & B {
    return {
      ...a,
      ...b
    };
}

const merged = merge({ foo: 1 }, { bar: 1 });

function wrap<T>(param: T) {
    return {
        param
    }
}

const wrapped = wrap(10);

interface Items<T> {
    list: T[]
}

const items: Items<string> = {
    list: ['a', 'b', 'c']
}

type Items2<T> = {
    list: T[]
}

const items2: Items2<string> = {
    list: ['d', 'e', 'f']
} 

class Queue<T> {
    list: T[] = [];
    get length() {
        return this.list.length;
    }
    enqueue(item: T) {
        this.list.push(item);
    }
    dequeue() {
        return this.list.shift();
    }
}

const queue = new Queue<number>();
queue.enqueue(1)