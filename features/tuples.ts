const drink = {
  color: 'brown',
  cabonated: true,
  suger: 40,
};

// a tuple array
const pepsi = ['brown', true, 40];
const cocacola: [string, boolean, number] = ['brown', true, 50];

// Type alias
type Drink = [string, boolean, number];
const sprit: Drink = ['clear', true, 50];
const tea : Drink = ['brown', false, 0];


const carSec: [number, number] = [400, 3354];
const carState = {
  horsePower: 400,
  weight: 3354,
};