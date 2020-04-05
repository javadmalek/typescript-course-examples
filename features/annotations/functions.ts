const add = (a: number, b: number): number => a + b;

const addInference = (a: number, b: number) => a + b;

const voidInference = (a: number, b: number) => {
  a + b;
};

// arrow function
const subtract = (a: number, b: number): number => a - b;

// name function
function divide(a: number, b: number): number {
  return a / b;
}

// anonymous funtion
const multiply = function (a: number, b: number): number {
  return a * b;
};

// return void, which is equivalent to return null || undefined
const logger = (message: string): void => console.log(message);

// return never: which means we would never reach to the end of function
const throwError = (message: string): never => {
  throw new Error(message);
};

// Destructuring
const todayWeather = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = ({ date, weather }: { date: Date; weather: string }) => {
  console.log(date);
  console.log(weather);
};

logWeather(todayWeather);
