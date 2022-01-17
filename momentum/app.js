// kelvin vairable equal to 293
const kelvin = 293;

Celsius = kelvin - 273;

let fahrenheit = Celsius * (9/5) + 32;

fahrenheit = Math.floor(fahrenheit); 

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);