import 'reflect-metadata';

const plane = {
  color: 'red',
};

Reflect.defineMetadata('note', 'hi there', plane);
Reflect.defineMetadata('height', 10, plane);
Reflect.defineMetadata('subKey', 'value of sub key', plane, 'color');

const note = Reflect.getMetadata('note', plane);
const height = Reflect.getMetadata('height', plane);
const subKey = Reflect.getMetadata('subKey', plane, 'color');

console.log('note:', note);
console.log('height:', height);
console.log('subKey:', subKey);
