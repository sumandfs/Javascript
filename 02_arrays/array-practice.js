// JavaScript Array Practice

const numbers = [10, 15, 20, 25, 30];

// 1. Calculate sum of array elements
const sum = numbers.reduce((total, num) => total + num, 0);

// 2. Find even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);

// 3. Find largest number
const largestNumber = Math.max(...numbers);

console.log("Original Array:", numbers);
console.log("Sum:", sum);
console.log("Even Numbers:", evenNumbers);
console.log("Largest Number:", largestNumber);
