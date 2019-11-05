// 1. Counting Sheep
// function countSheep(num) {
//   if(num === 0) {
//     console.log('All sheep jumped over the fence');
//   } else {
//     console.log(`${num}: Another sheep jumped over the fence`);
//     countSheep(num -1);
//   }
// }

// countSheep(3);

// 2. Power Calculator
// function powerCalculator(base, exponent) {
//   if(exponent < 0) {
//     return 'Exponent should be >= 0';
//   } else {
//     if(exponent === 0) {
//       return 1;
//     }
//     return base * powerCalculator(base, exponent - 1);
//   }
// }

// console.log(powerCalculator(10,3));

// 3. Reverse String
// function reverseString(string) {
//   if(string === '') {
//     return '';
//   } else {
//     return string[string.length - 1] + reverseString(string.slice(0, string.length -1));
//   }
// }

// console.log(reverseString('hello'));

// 4. nth Triangular Number
// function triangularNumber(number) {
//   if (number <= 0) {
//     return 'Number must be greater than 0';
//   } else {
//     if(number === 1) {
//       return number;
//     }
//     return number + triangularNumber(number - 1);
//   }
// }

// console.log(triangularNumber(9));

// 5. String Splitter
// function stringSplitter(string, separator) {
//   let index = string.indexOf(separator);

//   if(index === -1) {
//     return [string];
//   } else {
//     return [string.slice(0,index)].concat(stringSplitter(string.slice(index + 1), separator));
//   }
// }

// console.log(stringSplitter('02/02/2020', '/'));

// 6. Fibonacci
// function fib(number) {
//   if(number <= 0) {
//     return 'Pick a number greater than 0';
//   }
//   if(number === 1 || number === 2) {
//     return 1;
//   }
//   else {
//     return fib(number - 1) + fib(number - 2);
//   }
// }

// console.log(fib(5));

// 7. Factorial
// function fact(number) {
//   if (number === 1) {
//     return 1;
//   } else {
//     return number * fact(number - 1);
//   }
// }

// console.log(fact(5));

//8. Maze
