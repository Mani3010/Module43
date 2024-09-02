// Q1
/*function countOccurrences(text) {
    const wordCounts = new Map();
    const words = text.split(/\s+/); // Split text by spaces

    words.forEach(word => {
        word = word.toLowerCase(); // Case insensitive
        const count = wordCounts.get(word) || 0;
        wordCounts.set(word, count + 1);
    });

    return wordCounts;
}

// Example usage:
const text = "Hello world world hello";
console.log(countOccurrences(text)); // Map(2) { 'hello' => 2, 'world' => 2 }
*/
//Q2
/*
function removeDuplicates(arr) {
    return new Set(arr);
}

// Example usage:
const numbers = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(numbers)); // Set { 1, 2, 3, 4, 5 }
*/
// Q3
/*
function swapValues(a, b) {
    [a, b] = [b, a];
    return [a, b];
}

// Example usage:
const [x, y] = swapValues(5, 10);
console.log(x, y); // 10 5
 */
//Q4
/*
function extractElements(arr) {
    const [first, second, , , last] = arr;
    return [first, second, last];
}

// Example usage:
const array = [1, 2, 3, 4, 5];
console.log(extractElements(array)); // [1, 2, 5]
 */
//Q5
// function findMinMax(arr) {
//     // Ensure the array is not empty to avoid errors
//     if (arr.length === 0) {
//         throw new Error("Array cannot be empty");
//     }

//     return {
//         max: Math.max(...arr),
//         min: Math.min(...arr)
//     };
// }

// // Example usage:
// const numbers = [5, 2, 7, 1, 9];
// const result = findMinMax(numbers);
// console.log(result); // { max: 9, min: 1 }
//Q6
/*
function extractNameAndStreet(person) {
    // Destructuring the person object to get name and street
    const { name, address: { street } } = person;
    
    // Returning an object with name and street
    return { name, street };
}

// Sample object
const person = {
    name: "Mithun",
    age: 21,
    address: {
        street: "B8, Block B, Industrial Area.",
        city: "Sector 62, Noida",
        state: "Uttar Pradesh",
    },
};

// Using the function to extract name and street
const result = extractNameAndStreet(person);
console.log(result);
*/
