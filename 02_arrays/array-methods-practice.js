// JavaScript Array Methods Practice

const numbers = [12, 5, 20, 8, 15];

// 1. map() - Double every number
const doubled = numbers.map(num => num * 2);

// 2. filter() - Get numbers greater than 10
const filtered = numbers.filter(num => num > 10);

// 3. sort() - Sort numbers in ascending order
const sorted = [...numbers].sort((a, b) => a - b);

// 4. some() - Check if any number is greater than 18
const hasGreaterThan18 = numbers.some(num => num > 18);

// 5. every() - Check if all numbers are positive
const allPositive = numbers.every(num => num > 0);

console.log("Original:", numbers);
console.log("Doubled:", doubled);
console.log("Filtered:", filtered);
console.log("Sorted:", sorted);
console.log("Some greater than 18:", hasGreaterThan18);
console.log("All positive:", allPositive);
