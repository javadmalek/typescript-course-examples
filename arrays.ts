const carMakers = ['toyota', 'ford', 'Saipa'];
const persianNames: string[] = ['Javad',  'Dariush'];
const books = [];
const lightColors: string[] = [];

const dates = [new Date(), new Date(), new Date()];

const carByMakers = [
  ['f150', 'h44j'],
  ['corolla', 'B80'],
  ['zamiad', 'pride'],
];
const carByMakers2: string[][] =  [];


// TS can do type inference when extracting values form an array 
const myCar = carByMakers[0];
const topCar = carMakers.pop();

// TS can prevent us adding incompatible values to the array 
carByMakers.push(100);


// We can get help from  ‘map’, ‘reduce’ , ‘forEach’ funciton 
carMakers.map((car: string): string => {
  return car.toLowerCase();
});

// flexible type of array
const importantDateInference = [new Date(), '2020-10-05'];
const importantDate: (Date | string)[] = [];
importantDate.push(new Date());
importantDate.push('2030-12-04');
importantDate.push('sdfasdfa');
importantDate.push(100);
