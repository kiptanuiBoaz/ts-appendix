const apples: number = 5;

// Arry

const colors: string[] = ["red", "green", "yellow"];
const myNums: number[] = [2.3, 323, 232, 23]
const decisions: boolean[] = [false, true, true, true, true];

class Car {

}

let car: Car = new Car();

// object literal
let point: { x: number; y: number; } = {
    x: 10,
    y: 20

}
console.log(apples)
// function

const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
}

// When to use annotions
// 1) function that returns an "any" type
const json = '{ "x": "10", "y": "20" }';

const coordinates: { x: number; y: number; } = JSON.parse(json);
