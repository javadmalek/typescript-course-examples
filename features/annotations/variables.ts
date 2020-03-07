let apples: number = 10;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Arrays
let colors: string[] = ['red', 'blue', 'green'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// Classes
class Car {}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 7
};

// Function
const logNumber: (i: number) => void = (i: number) => console.log(i);

// When to use annotations
// 1) Function that returns the 'any' type because Typescript cann't predict the data type
const json = '{"x": 10, "y": 20}';
const coordinate: { x: number; y: number } = JSON.parse(json);
console.log(coordinate); // { x: 10, y: 20 };

// 2) When we declare a variable in one line and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean; // or it is better to set an initial value like false; at the same line

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3) Variables whose type can’t be inferred correctly (not suggested)
const numbers = [-20, -10, 10];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
