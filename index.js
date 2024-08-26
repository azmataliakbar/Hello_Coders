//~ Day:1 Task
//& Question 1: Sum of an Array Instructions:
//todo=> Write a function named sumArray that takes an array of numbers as input.
//todo=> The function should return the sum of all numbers in the array.
//todo=> Ensure your function works correctly by testing it with different inputs.
//todo=> Example:
//todo=> Input: [1, 2, 3, 4, 5]
//todo=> Output: 15
//^1) used for loop in function, in below method
/*
function sumArray(arr: number[]): number {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
 */
//^2) used for while loop in function, in below method
/*
function sumArray(arr: number[]): number {
  let sum = 0;
  let i = 0;
  while (i < arr.length) {
    sum += arr[i];
    i++;
  }
return sum;
}

console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
 */
//^3) used for do-while loop in function, in below method
/*
function sumArray(arr: number[]): number {
  let sum = 0;
  let i = 0;
  do {
    sum += arr[i];
    i++;
  } while (i<arr.length);
  return sum;
}

console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
*/
//^4) used for reduce method in function, in below method
/*
function sumArray(arr: number[]): number {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
 */
//& Question 2: Reverse a String Instructions:
//todo=> Write a function named reverseString that takes a string as input. The function should return the reversed version of the input string. Ensure your function works correctly by testing it with different inputs. Example:
//todo=> Input: "hello" Output: "olleh"
/*
function reverseString(message: string): string {
  
  return message.split('').reverse().join('');
}
console.log(reverseString("hello")); // Output: olleh
 */
//~ Day:2 Task
//& Question 3: First and Last Element Instructions: Objective:
//todo=>  Write a TypeScript function that takes an array of numbers and returns a new array containing only the first and last elements of the input array.
//todo=> Requirements:
//todo=> If the array has only one element, the function should return an array with that element duplicated. Ensure the function handles arrays with a single element correctly.
/*
function firsAndtLastElement(numArr: number[]): number[] {
  if (numArr.length === 1) {
    return [numArr[0], numArr[0]];
  }
  return [numArr[0], numArr[numArr.length - 1]];
}
console.log(firsAndtLastElement([1, 2, 3, 4, 5]));//[ 1, 5 ]
console.log(firsAndtLastElement([7]));//[ 7, 7 ]
console.log(firsAndtLastElement([19, 47]));//[ 19, 47 ]
console.log(firsAndtLastElement([]));//[ undefined, undefined ]
 */
//& Question 4 : Find the Largest Number Instructions: Objective:
//todo=>  Write a TypeScript function that takes an array of numbers and returns the largest number in the array.
//todo=> Requirements:
//todo=> The function should handle arrays with positive and negative numbers. If the array contains only one number, return that number. Ensure the function handles an empty array gracefully (you might decide to return undefined or throw an error based on your needs). Note: This solution avoids using built-in methods like Math.max and demonstrates basic iteration and comparison logic.
/*
function largestNumber(arr: number[]): number | undefined {
  if (arr.length === 0) {
    return undefined; // Return undefined for an empty array
  }
  
  let largest = arr[0]; // Initialize the largest number with the first element
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}
console.log(largestNumber([]));// undefined
console.log(largestNumber([60, 70, 80, 90,100]));// 100
console.log(largestNumber([-61, -71, 0, 91, 111]));// 101
console.log(largestNumber([-33]));// -33
console.log(largestNumber([77]));// 77
 */
//~Day 3: Task
//& Question 5: Remove Duplicates from Array Instructions: 
//todo=> Write a TypeScript function named removeDuplicates that takes an array of numbers and returns a new array with all duplicate elements removed. Do not use built-in methods like Set.
//todo=> Requirements:
//todo=> The function should iterate through the array and check for duplicates manually.
//todo=> You can use additional arrays or variables to keep track of seen elements.
//todo=> Do not use any built-in methods like filter, reduce, or Set.
//todo=> Example: typescript function removeDuplicates(arr: number[]): number[] { // Your code here }
//todo=> Example usage: console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5] console.log(removeDuplicates([10, 10, 20, 30, 30])); // Output: [10, 20, 30]
/*
function removeDuplicates(dup: number[]): number[] {
  let result: number[] = [];
  let seen: boolean[] = [];
  
  for (let i = 0; i < dup.length; i++) {
    if (!seen[dup[i]]) {
      result.push(dup[i]);
      seen[dup[i]] = true;
    }
  }
  return result;
  
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
console.log(removeDuplicates([10, 10, 20, 30, 30])); // Output: [10, 20, 30]
console.log(removeDuplicates([77, 99])); // Output: [77, 99]
console.log(removeDuplicates([])); // Output: []
 */
//& Question 6: Find the Second Largest Number in an Array Instructions: 
//todo=> Write a TypeScript function named findSecondLargest that takes an array of numbers and returns the second largest number in the array. Do not use built-in methods like sort.
//todo=> Requirements:
//todo=> The function should manually find the largest and second largest numbers by iterating through the array.
//todo=> You can use additional variables to keep track of the largest and second largest numbers.
//todo=> Do not use any built-in methods like sort.
//todo=> Example: typescript function findSecondLargest(arr: number[]): number { // Your code here }
//todo=> Example usage: console.log(findSecondLargest([1, 2, 3, 4, 5])); // Output: 4 console.log(findSecondLargest([10, 20, 30, 15, 25])); // Output: 25
/*
function secondLargestNumber(arr: number[]): number | undefined {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] < largest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest === -Infinity? undefined : secondLargest;

}
console.log(secondLargestNumber([]));// undefined
console.log(secondLargestNumber([60, 70, 80, 90,100]));// 90
console.log(secondLargestNumber([22, 44]));// 22
console.log(secondLargestNumber([57]));// undefined
console.log(secondLargestNumber([1, 2, 3, 4, 5]));// 4
console.log(secondLargestNumber([10, 20, 30, 15, 25]));// 25
*/
//~ Day 4: Task
//& Question 7: Find Duplicate Numbers in an Array
//todo=> Description:
//todo=> Write a TypeScript function that takes an array of numbers as input and returns a new array containing only the duplicate numbers from the original array. If there are no duplicates, return an empty array.
//todo=> Function Signature:
//todo=> typescript function findDuplicates(numbers: number[]): number[]{} // Your code here
//todo=> Example:
//todo=> typescript // Input const numbers = [1, 2, 3, 2, 4, 5, 5, 6];
//todo=> Output const duplicates = findDuplicates(numbers); console.log(duplicates); // [2, 5]
//todo=> Hints:
//todo=> Create an empty array to store the result.
//todo=> Use a nested loop to compare each element with every other element.
//todo=> If a duplicate is found, add it to the result array if it is not already included.
/*
function findDuplicates(numbers: number[]): number[] {
  const counts: { [key: number]: number } = {};
  const duplicates: number[] = [];

  for (const num of numbers) {
    if (counts[num] === undefined) {
      counts[num] = 1;
    } else {
      counts[num]++;
    }
  }


  for (const num in counts) {
    if (counts[num] > 1) {
      for (let i = 0; i < counts[num] - 1; i++) {
        duplicates.push(Number(num));
      }
    }
  }

  return duplicates;
}


const numbers = [1, 2, 3, 2, 4, 5, 5, 6];
const duplicates = findDuplicates(numbers);
console.log(duplicates); // Output: [2, 5]

console.log(findDuplicates([1, 2, 3, 4, 5])); // Output: []
console.log(findDuplicates([1, 1, 1, 1])); // Output: [1, 1, 1]
console.log(findDuplicates([7, 8, 8, 9, 9, 9])); // Output: [8, 9, 9]
console.log(findDuplicates([])); // Output: []
 */
//& Question 8: Filter Students with Marks Greater than 80
//todo=> Description:
//todo=> Create an array of objects where each object represents a student with properties name, age, and marks. Write a function that filters and prints the data of students who have marks greater than 80.
//todo=> Function Signature:
//todo=> typescript interface Student { name: string; age: number; marks: number; }
//todo=> function printTopStudents(students: Student[]): void { // Your code here }
//todo=> Example:
//todo=> typescript // Input const students: Student[] = [ { name: "Ali", age: 20, marks: 75 }, { name: "Sara", age: 22, marks: 85 }, { name: "John", age: 21, marks: 90 } ];
//todo=> Output printTopStudents(students); // Should print: // Sara - Age: 22, Marks: 85 // John - Age: 21, Marks: 90
//todo=> Hints:
//todo=> Loop through the array of student objects.
//todo=> Check if the marks property of each student is greater than 80.
//todo=> If true, print the student's details.
/*
interface Student {
  name: string;
  age: number;
  marks: number;
}

function printTopStudents(students: Student[]): void {
  students.forEach(student => {
    if (student.marks > 80) {
      console.log(`${student.name} - Age: ${student.age}, Marks: ${student.marks}`);
    }
  });
}


const students: Student[] = [
  { name: "Ali", age: 20, marks: 75 },
  { name: "Sara", age: 22, marks: 85 },
  { name: "John", age: 21, marks: 90 }
];

printTopStudents(students); // Will print: Sara - Age: 22, Marks: 85 , John - Age: 21, Marks: 90
 */
//~ Day 5: Task
//& Question 9: Array Comparison and Manipulation (Updated)
//todo=> Create a function in TypeScript that takes two arrays of numbers as input. The function should perform the following operations based on the conditions given:
//todo=> If the lengths of both arrays are the same and all elements are the same:
//todo=> Merge both arrays into one array.
//todo=> Multiply all elements of the merged array to produce a single number.
//todo=> Return the product.
//todo=> If the lengths of both arrays are different:
//todo=> Merge both arrays into one array.
//todo=> Return the middle element of the merged array.
//todo=> If the lengths of both arrays are the same but elements are different:
//todo=> Make the elements of both arrays the same by adding corresponding elements.
//todo=> Merge the arrays.
//todo=> Return the sum of the elements of the resulting merged array.
//todo=> Hints:
//todo=> Use loops to compare elements and calculate new values.
//todo=> Avoid using built-in array methods.
//todo=> Think about how to find the middle element of an array when lengths are different.
//todo=> Example: typescript function manipulateArrays(arr1: number[], arr2: number[]): number { // Your implementation here }
//todo=> Example Test Cases // manipulateArrays([1, 2, 3], [1, 2, 3]) should output 36 (product of [1, 2, 3, 1, 2, 3]) // manipulateArrays([1, 2], [3, 4, 5]) should output 3 (middle element of [1, 2, 3, 4, 5]) // manipulateArrays([1, 2], [3, 4]) should output 6 (sum of [1, 2, 1, 2])
/*
function manipulateArrays(arr1: number[], arr2: number[]): number {

  function arraysAreEqual(a: number[], b: number[]): boolean {
      if (a.length !== b.length) return false;
      for (let i = 0; i < a.length; i++) {
          if (a[i] !== b[i]) return false;
      }
      return true;
  }


  function multiplyArrayElements(arr: number[]): number {
      let product = 1;
      for (let i = 0; i < arr.length; i++) {
          product *= arr[i];
      }
      return product;
  }


  function findMiddleElement(arr: number[]): number {
      const middleIndex = Math.floor(arr.length / 2);
      return arr[middleIndex];
  }


  function sumArrayElements(arr: number[]): number {
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
          sum += arr[i];
      }
      return sum;
  }

  if (arr1.length === arr2.length && arraysAreEqual(arr1, arr2)) {
      const mergedArray = arr1.concat(arr2);
      return multiplyArrayElements(mergedArray);
  }


  if (arr1.length !== arr2.length) {
      const mergedArray = arr1.concat(arr2);
      return findMiddleElement(mergedArray);
  }


  if (arr1.length === arr2.length && !arraysAreEqual(arr1, arr2)) {
      const newArray = [];
      for (let i = 0; i < arr1.length; i++) {
          newArray.push(arr1[i] + arr2[i]);
      }
      return sumArrayElements(newArray);
  }

  return 0; // Default return value, should not reach here
}


console.log(manipulateArrays([1, 2, 3], [1, 2, 3])); // Output: 36
console.log(manipulateArrays([1, 2], [3, 4, 5])); // Output: 3
console.log(manipulateArrays([1, 2], [3, 4])); // Output: 10
 */
//& Question 10: Extract First Letters from String Array
//todo=> Create a function in TypeScript that takes an array of strings (names) as input. The function should return a new array containing the first letter of each name.
//todo=> Hints:
//todo=> Iterate through each name in the array.
//todo=> Extract the first letter of each name without using built-in methods.
//todo=> Example: typescript function extractFirstLetters(names: string[]): string[] { // Your implementation here }
//todo=> Example Test Case // extractFirstLetters(["Alice", "Bob", "Charlie", "David", "Eve"]) should output ["A", "B", "C", "D", "E"]
/*
function extractFirstLetters(names: string[]): string[] {
  const firstLetters: string[] = [];

  for (let i = 0; i < names.length; i++) {
      const name = names[i];
      if (name.length > 0) {
          firstLetters.push(name[0]);
      }
  }

  return firstLetters;
}


console.log(extractFirstLetters(["Alice", "Bob", "Charlie", "David", "Eve"])); // Output: ["A", "B", "C", "D", "E"]
 */
//~ ### Day 6: Task
//& ### Question 11: Simple Calculator
//todo=> Task: Create a simple calculator that can perform addition, subtraction, multiplication, and division.
//todo=> Functional Programming Approach:
//todo=> Write functions for each operation: add, subtract, multiply, and divide.
//todo=> Implement a function calculate that takes two numbers and an operation (as a string) and returns the result of the operation.
//todo=> Object-Oriented Programming (OOP) Approach:
//todo=> Create a Calculator class with methods for each operation.
//todo=> Implement a method calculate in the class that takes two numbers and an operation (as a string) and returns the result of the operation.
//^ Functional Programming Approach
//^ Functions for each operation
/*
function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  if (b === 0) {
      throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

Function to calculate based on operation
function calculate(a: number, b: number, operation: string): number {
  switch (operation) {
      case "add":
          return add(a, b);
      case "subtract":
          return subtract(a, b);
      case "multiply":
          return multiply(a, b);
      case "divide":
          return divide(a, b);
      default:
          throw new Error("Invalid operation.");
  }
}

Example usage
console.log(calculate(10, 5, "add")); // Output: 15
console.log(calculate(10, 5, "subtract")); // Output: 5
console.log(calculate(10, 5, "multiply")); // Output: 50
console.log(calculate(10, 5, "divide")); // Output: 2

 */
//^ Object-Oriented Programming (OOP) Approach
/*
class Calculator {
  add(a: number, b: number): number {
      return a + b;
  }

  subtract(a: number, b: number): number {
      return a - b;
  }

  multiply(a: number, b: number): number {
      return a * b;
  }

  divide(a: number, b: number): number {
      if (b === 0) {
          throw new Error("Division by zero is not allowed.");
      }
      return a / b;
  }

  calculate(a: number, b: number, operation: string): number {
      switch (operation) {
          case "add":
              return this.add(a, b);
          case "subtract":
              return this.subtract(a, b);
          case "multiply":
              return this.multiply(a, b);
          case "divide":
              return this.divide(a, b);
          default:
              throw new Error("Invalid operation.");
      }
  }
}

Example usage
const calculator = new Calculator();
console.log(calculator.calculate(10, 5, "add")); // Output: 15
console.log(calculator.calculate(10, 5, "subtract")); // Output: 5
console.log(calculator.calculate(10, 5, "multiply")); // Output: 50
console.log(calculator.calculate(10, 5, "divide")); // Output: 2

 */
//& ### Question 12: Separate Elements by Type
//todo=> Task: Given an array with mixed types of elements, separate them into different arrays based on their type (number, string, boolean).
/*
type SeparatedElements = {
  numbers: number[],
  strings: string[],
  booleans: boolean[]
};

function separateElementsByType(arr: any[]): SeparatedElements {
  const separated: SeparatedElements = {
    numbers: [],
    strings: [],
    booleans: []
  };

  arr.forEach(item => {
    if (typeof item === 'number') {
      separated.numbers.push(item);
    } else if (typeof item === 'string') {
      separated.strings.push(item);
    } else if (typeof item === 'boolean') {
      separated.booleans.push(item);
    }
  });

  return separated;
}


const mixedArray = [1, "hello", true, 42, "world", false, 3.14];
const separatedElements = separateElementsByType(mixedArray);

console.log(separatedElements);
Output:{numbers: [1, 42, 3.14], strings: ["hello", "world"], booleans: [true, false] }

 */
//~ ### Day:7
//& ### Question 13: OOP Related
//todo=> Create a TypeScript class Book that has properties for title, author, publicationYear, and genre. The class should have methods to:
//todo=> 1. Display the book details.
//todo=> 2. Check if the book is a recent publication (within the last 5 years).
//todo=> 3. Change the genre of the book.
//todo=> 4. Check if the book's author matches a given author name.
// *Hints:*
//todo=> - Use console.log to print book details in the displayDetails method.
//todo=> - In the isRecent method, get the current year using new Date().getFullYear() and compare it with publicationYear.
//todo=> - Update the genre property in the changeGenre method.
//todo=> - In the isAuthor method, compare the author property with the given author name.
//* OOP Related
//todo=> Create a TypeScript class Book that has properties for title, author, publicationYear, and genre. The class should have methods to:
//todo=> 1. Display the book details.
//todo=> 2. Check if the book is a recent publication (within the last 5 years).
//todo=> 3. Change the genre of the book.
//todo=> 4. Check if the book's author matches a given author name.
// *Hints:*
//todo=> - Use console.log to print book details in the displayDetails method.
//todo=> - In the isRecent method, get the current year using new Date().getFullYear() and compare it with publicationYear.
//todo=> - Update the genre property in the changeGenre method.
//todo=> - In the isAuthor method, compare the author property with the given author name.
/*
class Book {
  title: string;
  author: string;
  publicationYear: number;
  genre: string;

  constructor(title: string, author: string, publicationYear: number, genre: string) {
      this.title = title;
      this.author = author;
      this.publicationYear = publicationYear;
      this.genre = genre;
  }


  displayDetails(): void {
      console.log(`Title: ${this.title}`);
      console.log(`Author: ${this.author}`);
      console.log(`Publication Year: ${this.publicationYear}`);
      console.log(`Genre: ${this.genre}`);
  }


  isRecent(): boolean {
      const currentYear = new Date().getFullYear();
      return currentYear - this.publicationYear <= 5;
  }

Method to change the genre of the book
  changeGenre(newGenre: string): void {
      this.genre = newGenre;
  }


  isAuthor(authorName: string): boolean {
      return this.author.toLowerCase() === authorName.toLowerCase();
  }
}

Example usage:
const book = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925, "Novel");

book.displayDetails();
Output:
Title: The Great Gatsby
Author: F. Scott Fitzgerald
Publication Year: 1925
Genre: Novel

console.log(book.isRecent()); // Output: false

book.changeGenre("Classic");
console.log(book.genre); // Output: Classic

console.log(book.isAuthor("F. Scott Fitzgerald")); // Output: true
console.log(book.isAuthor("J.K. Rowling")); // Output: false
 */
//& Question 14: Nested Object with Interfaces
//todo=> Create an interface Person that includes properties for name, age, email, phone, and addresses. The addresses property should be an array of objects, each containing street, city, state, and zipcode. Write a function to find the first person living in a specific city and return their name and email.
// *Hints:*
//todo=> - Define the Address and Person interfaces with the required properties.
//todo=> - Use nested loops to iterate through the people array and each person's addresses array.
//todo=> - Check if the city property matches the given city in the function.
//todo=> - Return the name and email of the first matching person or undefined if no match is found.
//^ OOP Related
//todo=> Create a TypeScript class Book that has properties for title, author, publicationYear, and genre. The class should have methods to:
//todo=> 1. Display the book details.
//todo=> 2. Check if the book is a recent publication (within the last 5 years).
//todo=> 3. Change the genre of the book.
//todo=> 4. Check if the book's author matches a given author name.
//  *Hints:*
//todo=> - Use console.log to print book details in the displayDetails method.
//todo=> - In the isRecent method, get the current year using new Date().getFullYear() and compare it with publicationYear.
//todo=> - Update the genre property in the changeGenre method.
//todo=> - In the isAuthor method, compare the author property with the given author name.
/*
interface Address {
  street: string;
  city: string;
  state: string;
  zipcode: string;
}

interface Person {
  name: string;
  age: number;
  email: string;
  phone: string;
  addresses: Address[];
}

function findPersonInCity(people: Person[], city: string): { name: string; email: string } | undefined {
  for (let i = 0; i < people.length; i++) {
      for (let j = 0; j < people[i].addresses.length; j++) {
          if (people[i].addresses[j].city === city) {
              return { name: people[i].name, email: people[i].email };
          }
      }
  }
  return undefined;
}


const people: Person[] = [
  {
      name: "John Doe",
      age: 30,
      email: "john@example.com",
      phone: "123-456-7890",
      addresses: [
          { street: "123 Main St", city: "New York", state: "NY", zipcode: "10001" },
          { street: "456 Maple Ave", city: "Boston", state: "MA", zipcode: "02118" }
      ]
  },
  {
      name: "Jane Smith",
      age: 25,
      email: "jane@example.com",
      phone: "987-654-3210",
      addresses: [
          { street: "789 Elm St", city: "Los Angeles", state: "CA", zipcode: "90001" }
      ]
  }
];

const result = findPersonInCity(people, "Boston");
console.log(result); // Output: { name: 'John Doe', email: 'john@example.com' }
 */
//^ OOP Related
/*
class Book {
  title: string;
  author: string;
  publicationYear: number;
  genre: string;

  constructor(title: string, author: string, publicationYear: number, genre: string) {
      this.title = title;
      this.author = author;
      this.publicationYear = publicationYear;
      this.genre = genre;
  }

  Method to display the book details
  displayDetails(): void {
      console.log(`Title: ${this.title}`);
      console.log(`Author: ${this.author}`);
      console.log(`Publication Year: ${this.publicationYear}`);
      console.log(`Genre: ${this.genre}`);
  }

  Method to check if the book is a recent publication (within the last 5 years)
  isRecent(): boolean {
      const currentYear = new Date().getFullYear();
      return currentYear - this.publicationYear <= 5;
  }

  Method to change the genre of the book
  changeGenre(newGenre: string): void {
      this.genre = newGenre;
  }

  Method to check if the book's author matches a given author name
  isAuthor(authorName: string): boolean {
      return this.author.toLowerCase() === authorName.toLowerCase();
  }
}

Example usage:
const book = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925, "Novel");

book.displayDetails();
Output:
Title: The Great Gatsby
Author: F. Scott Fitzgerald
Publication Year: 1925
Genre: Novel

console.log(book.isRecent()); // Output: false

book.changeGenre("Classic");
console.log(book.genre); // Output: Classic

console.log(book.isAuthor("F. Scott Fitzgerald")); // Output: true
console.log(book.isAuthor("J.K. Rowling")); // Output: false
 */
//~ ### Day 8: TypeScript Modules (Export and Import)
//& #### Question 15: Exporting and Importing Multiple Functions
// *Question:*
//todo=> Create two separate files. In the first file, define and export two functions: calculateArea (calculates the area of a rectangle given its width and height) and calculatePerimeter (calculates the perimeter of a rectangle given its width and height). In the second file, import both functions and use them to calculate the area and perimeter of a rectangle with a width of 5 and a height of 10. Print the results to the console.
// *Hint:*
//todo=> - Use export to export the functions in the first file.
//todo=> - Use named imports to bring the functions into the second file.
//todo=> - Ensure that the file paths are correctly specified when importing.
//^ src/ index.ts
/*
import { calculateArea, calculatePerimeter } from "./rectangle";

const width = 5;
const height = 10;

const area = calculateArea(width, height);
const perimeter = calculatePerimeter(width, height);

console.log(`Area: ${area}`); // Area: 50
console.log(`Perimeter: ${perimeter}`); // Perimeter: 30
*/
//& #### Question 16: Exporting and Importing Interfaces and Classes
// *Question:*
//todo=> Create three separate files. In the first file, define and export an interface Shape with properties name and area, and a method calculateArea(). In the second file, define and export a class Circle that implements the Shape interface. The class should have a property radius and implement the calculateArea method. In the third file, import the Circle class, create an instance of Circle, and print the name and area of the circle.
// *Hint:*
//todo=> - Use export to export the interface in the first file.
//todo=> - Use export to export the class in the second file.
//todo=> - Use named imports to bring the interface and class into the third file.
//todo=> - Ensure that the file paths are correctly specified when importing.
//^ src/index.ts
/*
import { Circle } from './circle';

const myCircle = new Circle(10);
console.log(`Name: ${myCircle.name}`); // Name: Circle
console.log(`Area: ${myCircle.area}`); // Area: 314.1592653589793

 */
//~ Day 9
//& ### Question 17: Implement a Stack using TypeScript
// *Problem Statement:*
//todo=> Implement a stack using TypeScript. The stack should have the following methods:
//todo=> 1. push(item: T): void - Adds an item to the top of the stack.
//todo=> 2. pop(): T | undefined - Removes and returns the item from the top of the stack. If the stack is empty, it should return undefined.
//todo=> 3. peek(): T | undefined - Returns the item at the top of the stack without removing it. If the stack is empty, it should return undefined.
//todo=> 4. isEmpty(): boolean - Returns true if the stack is empty, otherwise false.
// *Constraints:*
//todo=> - Use generics to make the stack implementation type-safe.
//todo=> - The stack should handle various data types (number, string, etc.).
// *Example Usage:*
//todo=> typescript
//todo=> const stack = new Stack<number>();
//todo=> stack.push(1);
//todo=> stack.push(2);
//todo=> console.log(stack.peek()); // Output: 2
//todo=> console.log(stack.pop());  // Output: 2
//todo=> console.log(stack.pop());  // Output: 1
//todo=> console.log(stack.isEmpty()); // Output: true
/*

class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

Example Usage:
const stack = new Stack<number>();
stack.push(1);
stack.push(2);
console.log(stack.peek()); // Output: 2
console.log(stack.pop());  // Output: 2
console.log(stack.pop());  // Output: 1
console.log(stack.isEmpty()); // Output: true
 */
//& ### Question 18: Implement a Queue using TypeScript
// *Problem Statement:*
//todo=> Implement a queue using TypeScript. The queue should have the following methods:
//todo=> 1. enqueue(item: T): void - Adds an item to the end of the queue.
//todo=> 2. dequeue(): T | undefined - Removes and returns the item from the front of the queue. If the queue is empty, it should return undefined.
//todo=> 3. peek(): T | undefined - Returns the item at the front of the queue without removing it. If the queue is empty, it should return undefined.
//todo=> 4. isEmpty(): boolean - Returns true if the queue is empty, otherwise false.
// *Constraints:*
//todo=> - Use generics to make the queue implementation type-safe.
//todo=> - The queue should handle various data types (number, string, etc.).
// *Example Usage:*
//todo=> typescript
//todo=> const queue = new Queue<string>();
//todo=> queue.enqueue("a");
//todo=> queue.enqueue("b");
//todo=> console.log(queue.peek()); // Output: "a"
//todo=> console.log(queue.dequeue());  // Output: "a"
//todo=> console.log(queue.dequeue());  // Output: "b"
//todo=> console.log(queue.isEmpty()); // Output: true
/*
class Queue<T> {
  private items: T[] = [];

  enqueue(item: T): void {
    this.items.push(item);
  }

  dequeue(): T | undefined {
    return this.items.shift();
  }

  peek(): T | undefined {
    return this.items[0];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

Example Usage:
const queue = new Queue<string>();
queue.enqueue("a");
queue.enqueue("b");
console.log(queue.peek()); // Output: "a"
console.log(queue.dequeue());  // Output: "a"
console.log(queue.dequeue());  // Output: "b"
console.log(queue.isEmpty()); // Output: true
 */
//~ ### Day 10: Task
//& # Question 19: Implement a Basic Counter
//todo=> Problem Statement: Create a TypeScript class Counter that manages a simple counter with the following methods:
//todo=> increment(): void - Increments the counter by 1.
//todo=> decrement(): void - Decrements the counter by 1.
//todo=> getValue(): number - Returns the current value of the counter.
//todo=> Example Usage:
//todo=> const counter = new Counter();
//todo=> counter.increment(); // 0 + 1 = 1
//todo=> counter.increment(); // 1 + 1 = 2
//todo=> counter.increment(); // 2 + 1 = 3
//todo=> counter.increment(); // 3 + 1 = 4
//todo=> counter.increment(); // 4 + 1 = 5
//todo=> console.log(counter.getValue()); // Output: 5
//todo=> counter.decrement(); // 5 - 1 = 4
//todo=> console.log(counter.getValue()); // Output: 4
/*
class Counter {
  private count: number;

  constructor() {
      this.count = 0;
  }

  increment(): void {
      this.count += 1;
  }

  decrement(): void {
      this.count -= 1;
  }

  getValue(): number {
      return this.count;
  }
}


const counter = new Counter();
counter.increment(); // 0 + 1 = 1
counter.increment(); // 1 + 1 = 2
counter.increment(); // 2 + 1 = 3
counter.increment(); // 3 + 1 = 4
counter.increment(); // 4 + 1 = 5
console.log(counter.getValue()); // Output: 5
counter.decrement();// 5 - 1 = 4
console.log(counter.getValue()); // Output: 4
 */
//& # Question 20: Implement a Simple Student Record
//todo=> Problem Statement: Create a TypeScript class Student to manage a student's name and grade. The class should have the following methods:
//todo=> setName(name: string): void - Sets the student's name.
//todo=> setGrade(grade: number): void - Sets the student's grade.
//todo=> getRecord(): { name: string; grade: number } - Returns an object with the student's name and grade.
//todo=> Example Usage:
//todo=> const student = new Student();
//todo=> student.setName("Alice");
//todo=> student.setGrade(90);
//todo=> console.log(student.getRecord()); // Output: { name: "Alice", grade: 90 }
/*
class Student {
  private name: string;
  private grade: number;

  constructor() {
      this.name = "";
      this.grade = 0;
  }

  setName(name: string): void {
      this.name = name;
  }

  setGrade(grade: number): void {
      this.grade = grade;
  }

  getRecord(): { name: string; grade: number } {
      return { name: this.name, grade: this.grade };
  }
}


const student = new Student();
student.setName("Alice");
student.setGrade(90);
console.log(student.getRecord()); // Output: { name: "Alice", grade: 90 }
 */
//~ # Day-11
//& # Question 21: Merge Two Sorted Arrays
//todo=> Write a function mergeSortedArrays that takes two sorted arrays of numbers and returns a single sorted array by merging them. You cannot use any built-in sort function.
// typescript
//todo=> function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
//todo=> Your implementation here
//todo=> }
// Example Usage:
//todo=> const arr1 = [1, 3, 5, 7];
//todo=> const arr2 = [2, 4, 6, 8];
//todo=> console.log(mergeSortedArrays(arr1, arr2)); 
// Expected output: [1, 2, 3, 4, 5, 6, 7, 8]
//  Hint:
//todo=> - *Hint 1*: Start with two pointers, one at the beginning of each array.
//todo=> - *Hint 2*: Compare the elements at both pointers and add the smaller element to the result array.
//todo=> - *Hint 3*: Move the pointer of the array from which the element was taken.
//todo=> - *Hint 4*: Repeat until all elements from both arrays are merged.
/*
function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
  const mergedArray: number[] = [];
  let i = 0, j = 0;

  Hint 1: Start with two pointers, one at the beginning of each array.
  while (i < arr1.length && j < arr2.length) {
    Hint 2: Compare the elements at both pointers and add the smaller element to the result array.
      if (arr1[i] < arr2[j]) {
          mergedArray.push(arr1[i]);
          i++; // Hint 3: Move the pointer of the array from which the element was taken.
      } else {
          mergedArray.push(arr2[j]);
          j++;
      }
  }

  If there are remaining elements in arr1, add them to mergedArray
  while (i < arr1.length) {
      mergedArray.push(arr1[i]);
      i++;
  }

  If there are remaining elements in arr2, add them to mergedArray
  while (j < arr2.length) {
      mergedArray.push(arr2[j]);
      j++;
  }

  return mergedArray; // Hint 4: Repeat until all elements from both arrays are merged.
}

Example Usage:
const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];
console.log(mergeSortedArrays(arr1, arr2));
Expected output: [1, 2, 3, 4, 5, 6, 7, 8]
 */
//& # Question 22: Find the First Non-Repeated Character
//todo=> Write a function firstNonRepeatedCharacter that takes a string and returns the first character that does not repeat. If all characters repeat, return an empty string.
// typescript
//todo=> function firstNonRepeatedCharacter(s: string): string {
//todo=> Your implementation here
//todo=> }
// Example Usage:
//todo=> const s = "swiss";
//todo=> console.log(firstNonRepeatedCharacter(s)); 
// Expected output: "w"
// Hint:
//todo=> - *Hint 1*: Create an object to count the frequency of each character in the string.
//todo=> - *Hint 2*: Iterate through the string and update the count for each character.
//todo=> - *Hint 3*: Iterate through the string again and find the first character with a count of 1 in the object.
//todo=> - *Hint 4*: If no character with a count of 1 is found, return an empty string.
/*
function firstNonRepeatedCharacter(s: string): string {
  Hint 1: Create an object to count the frequency of each character in the string.
  const charCount: { [key: string]: number } = {};

  Hint 2: Iterate through the string and update the count for each character.
  for (let char of s) {
      charCount[char] = (charCount[char] || 0) + 1;
  }

  Hint 3: Iterate through the string again and find the first character with a count of 1 in the object.
  for (let char of s) {
      if (charCount[char] === 1) {
          return char;
      }
  }

Hint 4: If no character with a count of 1 is found, return an empty string.
  return '';
}


//^ if we need to call both non repeated characters then use following code
// let nonRepeatedChars = '';
// for (let char of s) {
//     if (charCount[char] === 1) {
//         nonRepeatedChars += char;
//     }
// }

// return nonRepeatedChars;
// }

Example Usage:
const s = "swiss";
console.log(firstNonRepeatedCharacter(s));
Expected output: "w"

 */
//~ Day 12
//& ### Question 23: Remove Duplicates from Sorted Array
// *Problem:*
//todo=> You are given a sorted array that may contain duplicate elements. Your task is to remove the duplicates in-place (without creating a new array) and return the length of the resulting array. The array should be compressed so that the unique elements are placed first.
// *Example:*
//todo=> typescript
//todo=> Input: [1, 1, 2, 2, 3, 4, 4, 5]
//todo=> Output: 5
//todo=> Explanation: The resulting array is [1, 2, 3, 4, 5] and its length is 5.
// *Note:*
//todo=> * Only return the length of the unique elements.
//todo=> * Duplicate elements should be ignored.
/*
function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) return 0;
  
  let uniqueIndex = 0;
  
  for (let i = 1; i < nums.length; i++) {
      if (nums[i] !== nums[uniqueIndex]) {
          uniqueIndex++;
          nums[uniqueIndex] = nums[i];
      }
  }
  
  return uniqueIndex + 1;
}

// Example usage:
const nums = [1, 1, 2, 2, 3, 4, 4, 5];
const length = removeDuplicates(nums);
console.log(length); // Output: 5
console.log(nums.slice(0, length)); // Output: [1, 2, 3, 4, 5]
 */
//& ### Question 24: Move Zeroes
// *Problem:*
//todo=> You are given an array that contains some zero elements. Your task is to move all the zeroes to the end of the array, while keeping the relative order of the non-zero elements unchanged.
// *Example:*
//todo=> typescript
//todo=> Input: [0, 1, 0, 3, 12]
//todo=> Output: [1, 3, 12, 0, 0]
// *Note:*
//todo=> * You must modify the array in-place.
//todo=> * The relative order of the non-zero elements should remain the same.
/*
function moveZeroes(nums: number[]): void {
  let lastNonZeroIndex = 0;

  // Move all non-zero elements to the front of the array
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
          nums[lastNonZeroIndex] = nums[i];
          lastNonZeroIndex++;
      }
  }

  // Fill the remaining part of the array with zeros
  for (let i = lastNonZeroIndex; i < nums.length; i++) {
      nums[i] = 0;
  }
}

// Example usage:
const nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums); // Output: [1, 3, 12, 0, 0]
 */
//~ # Day 13
//& ### Question 25: Count Vowels in a String
// *Problem Statement:*
//todo=> Write a function in TypeScript that takes a string as input and returns the number of vowels (a, e, i, o, u) in the string.
// *Example:*
//todo=> typescript
//todo=> countVowels("hello world"); // Output: 3
//todo=> countVowels("TypeScript"); // Output: 2
// *Function Signature:*
//todo=> typescript
//todo=> function countVowels(str: string): number {
//todo=> Your code here
//todo=> }
// *Hints:*
//todo=> 1. *Loop through the string:*
//todo=>    - Use a loop to iterate over each character in the string.
//todo=> 2. *Check for vowels:*
//todo=>    - Compare each character with the vowels ('a', 'e', 'i', 'o', 'u'). Make sure to check both lowercase and uppercase vowels.
//todo=> 3. *Counting:*
//todo=>    - Maintain a counter variable to keep track of the number of vowels found. Increment this counter each time you encounter a vowel.
//todo=> 4. *Return the count:*
//todo=>    - After completing the loop, return the value of the counter, which represents the total number of vowels in the string.
/*
function countVowels(str: string): number {
  let vowelCount = 0;
  const vowels = "aeiouAEIOU";

  for (let char of str) {
      if (vowels.includes(char)) {
          vowelCount++;
      }
  }

  return vowelCount;
}

// Example usage:
console.log(countVowels("hello world")); // Output: 3
console.log(countVowels("TypeScript")); // Output: 2
console.log(countVowels("Governor Sindh Initiative Program")); // Output:12
 */
//& ### Question 26: Find the Missing Number in an Array
// *Problem Statement:*
//todo=> Write a function in TypeScript that takes an array of numbers containing n distinct numbers taken from the range 1 to n+1, where one number is missing. The function should find and return the missing number.
// *Example:*
//todo=> typescript
//todo=> findMissingNumber([1, 2, 4, 5]); // Output: 3
//todo=> findMissingNumber([3, 7, 1, 2, 8, 4, 5]); // Output: 6
// *Function Signature:*
//todo=> typescript
//todo=> function findMissingNumber(arr: number[]): number {
//todo=>    Your code here
//todo=> }
// *Hints:*
//todo=> 1. *Sum Formula:*
//todo=>    - Use the formula for the sum of the first n natural numbers: \(\text{Sum} = \frac{n(n+1)}{2}\). This gives you the total sum if no numbers were missing.
//todo=> 2. *Sum the Array:*
//todo=>    - Calculate the sum of all elements present in the given array.
//todo=> 3. *Subtract to Find Missing Number:*
//todo=>    - Subtract the sum of the elements in the array from the expected sum (calculated using the formula). The result will be the missing number.
//todo=> 4. *Edge Cases:*
//todo=>    - Consider edge cases where the missing number might be the smallest (1) or the largest number in the range.
/*
function findMissingNumber(arr: number[]): number {
  const n = arr.length + 1;
  const totalSum = (n * (n + 1)) / 2;
  const arraySum = arr.reduce((sum, num) => sum + num, 0);

  return totalSum - arraySum;
}
findMissingNumber([1, 2, 4, 5]); // Output: 3
findMissingNumber([3, 7, 1, 2, 8, 4, 5]); // Output: 6
 */
//^ Please check below more mathematical details:
/* console.log(findMissingNumber([1, 2, 4, 5])); // Output: 3 */
// Step-by-Step Explanation:
// Determine n:
// n is the total number of elements that should be in the array including the missing one.
// The length of the given array is 4, so n = 4 + 1 = 5.
// Calculate the Total Sum using the Formula:
// Total Sum = n ( n + 1 ) / 2
// Substitute n = 5:
// Total Sum = 5 × (5 + 1) / 2 = 30 / 2
// So, the sum of numbers from 1 to 5 is 15.
// Calculate the Sum of the Given Array:
// The array [1, 2, 4, 5] has elements that sum to:
// Array Sum = 1 + 2 + 4 + 5 = 12
// Find the Missing Number:
// The missing number is found by subtracting the sum of the array from the total sum:
// Missing Number = Total Sum − Array Sum = 15 − 12 = 3
// So, the missing number in the array [1, 2, 4, 5] is 3. This is how the function calculates it.
//^ Please check below more mathematical details:
/* console.log(findMissingNumber([3, 7, 1, 2, 8, 4, 5])); // Output: 6 */
// Step-by-Step Explanation:
// Determine n:
// n is the total number of elements that should be in the array including the missing one.
// The length of the given array is 7, so n = 7 + 1 = 8.
// Calculate the Total Sum using the Formula:
// Total Sum = n ( n + 1 ) / 2
// Substitute n = 8:
// Total Sum = 8 × (8 + 1) / 2 = 72 / 2
// So, the sum of numbers from 1 to 8 is 36.
// Calculate the Sum of the Given Array:
// The array [3, 7, 1, 2, 8, 4, 5] has elements that sum to:
// Array Sum = 3 + 7 + 1 + 2 + 8 + 4 + 5 = 30
// Find the Missing Number:
// The missing number is found by subtracting the sum of the array from the total sum:
// Missing Number = Total Sum − Array Sum = 36 − 30 = 6
// So, the missing number in the array [3, 7, 1, 2, 8, 4, 5] is 6. This is how the function calculates it.
//~ # DAY 14
//& ### Q27  *Find the Maximum Sum from Two Arrays*
// *Problem Statement:*
//todo=> Create a function findMaxSum that accepts two arrays of numbers. The function should determine the maximum number from each array and return the sum of these two maximum numbers.
// *Example:*
//todo=> typescript
//todo=> findMaxSum([3, 5, 7, 2, 8], [10, 20, 30, 5]); // Output: 38 (8 from the first array + 30 from the second array)
//todo=> findMaxSum([1, 2, 3], [4, 5, 6]); // Output: 9 (3 from the first array + 6 from the second array)
// *Hints:*
//todo=> 1. *Step 1: Write a Helper Function to Find the Maximum Value in an Array*
//todo=>    - Start by creating a function findMax that takes an array of numbers as its parameter.
//todo=>    - Initialize a variable (e.g., let max = array[0];) to store the first element of the array, assuming it to be the maximum.
//todo=>    - Use a for loop to iterate over the remaining elements of the array.
//todo=>    - During each iteration, compare the current element with max. If the current element is greater, update max.
//todo=>    - After the loop, max will hold the largest number in the array. Return this value.
//todo=> 2. *Step 2: Apply the Helper Function to Both Arrays*
//todo=>    - Use the findMax function to find the maximum value in both input arrays.
//todo=>    - Store these maximum values in two separate variables.
//todo=> 3. *Step 3: Sum the Maximum Values*
//todo=>    - Calculate the sum of the two maximum values obtained from the arrays.
//todo=>    - Return the final sum.
//todo=> 4. *Step 4: Test with Multiple Scenarios*
//todo=>    - Test the function with different arrays to ensure it correctly finds the maximum values and sums them.
//todo=> By following these steps, students will have a clear path to solving the problem, allowing them to build their understanding of both array traversal and function utilization in TypeScript.
/*
Step 1: a Function to Find the Maximum Value in an Array
function findMax(arr: number[]): number {
  let max = arr[0]; // Assume the first element is the maximum
  for (let i = 1; i < arr.length; i++) { // Iterate over the remaining elements
      if (arr[i] > max) { // Update max if the current element is greater
          max = arr[i];
      }
  }
  return max; // Return the largest number in the array
}

Step 2: Apply the Helper Function to Both Arrays
function findMaxSum(arr1: number[], arr2: number[]): number {
  const max1 = findMax(arr1); // Find the max in the first array
  const max2 = findMax(arr2); // Find the max in the second array

  Step 3: Sum the Maximum Values
  return max1 + max2; // Return the sum of the two maximum values
}

Step 4: Test with Multiple Scenarios
console.log(findMaxSum([3, 5, 7, 2, 8], [10, 20, 30, 5])); // Output: 38
console.log(findMaxSum([1, 2, 3], [4, 5, 6])); // Output: 9
 */
//& ### Question 28: *Check if a String is a Palindrome*
// *Problem Statement:*
//todo=> Write a function isPalindrome that takes a string as input and checks if it reads the same backward as forward. The function should return true if the string is a palindrome and false otherwise.
// *Example:*
//todo=> typescript
//todo=> isPalindrome("madam"); // Output: true
//todo=> isPalindrome("hello"); // Output: false
// *Hints:*
//todo=> 1. *Step 1: Normalize the String*
//todo=>    - Convert the string to lowercase to handle case sensitivity (str = str.toLowerCase();).
//todo=>    - If necessary, remove non-alphanumeric characters (e.g., spaces, punctuation) to focus on the actual content.
//todo=>   2. *Step 2: Use Two-Pointer Technique*
//todo=>    - Initialize two pointers: one at the start of the string (let left = 0;) and one at the end (let right = str.length - 1;).
//todo=>    - Use a while loop to compare characters at these pointers. Continue looping until the two pointers meet in the middle.
//todo=>    - If at any point the characters at left and right pointers do not match, return false.
//todo=> 3. *Step 3: Complete the Loop*
//todo=>    - If the loop completes without finding a mismatch, the string is a palindrome. Return true.
//todo=> 4. *Step 4: Test with Various Strings*
//todo=>   - Test the function with both palindromes and non-palindromes to verify that it works as expected.
/*
// Step 1: Normalize the String
function normalizeString(str: string): string {
  // Convert the string to lowercase and remove non-alphanumeric characters
  return str.toLowerCase().replace(/[^a-z0-9]/g, '');
}

// Step 2: Use Two-Pointer Technique
function isPalindrome(str: string): boolean {
  // First, normalize the string
  const normalizedStr = normalizeString(str);
  
  // Initialize two pointers
  let left = 0;
  let right = normalizedStr.length - 1;
  
  // Step 3: Complete the Loop
  while (left < right) {
      // If characters don't match, it's not a palindrome
      if (normalizedStr[left] !== normalizedStr[right]) {
          return false;
      }
      left++;
      right--;
  }
  
  // If we complete the loop, it is a palindrome
  return true;
}

// Step 4: Test with Various Strings
console.log(isPalindrome("madam")); // Output: true
// After normalization, the string becomes "madam".
console.log(isPalindrome("hello")); // Output: false
// After normalization, the string becomes "hello".
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
// After normalization, the string becomes "amanaplanacanalpanama".
console.log(isPalindrome("No 'x' in Nixon")); // Output: true
// After normalization, the string becomes "noxinnixon".
console.log(isPalindrome("12321")); // Output: true
// After normalization, the string becomes "12321".
console.log(isPalindrome("123456")); // Output: false
// After normalization, the string becomes "123456".
 */
//~ # Day-15
//& ### Question 29: Anagrams
// *Problem:*
//todo=> Write a TypeScript function areAnagrams(str1: string, str2: string): boolean that checks if two strings are anagrams of each other. An anagram is a word or phrase formed by rearranging the letters of another word or phrase using all the original letters exactly once.
// *Hints:*
//todo=> 1. *Normalize Case:*
//todo=>    - Convert both strings to lowercase to ensure that the comparison is case-insensitive.
//todo=>    - Traverse each character of the strings and convert uppercase characters to lowercase.
//todo=> 2. *Count Characters:*
//todo=>    - Use a fixed-size data structure like an array to count the occurrences of each character in both strings. Since we're only dealing with lowercase letters, an array of size 26 (for 'a' to 'z') will suffice.
//todo=>    - Initialize two arrays (or two objects with 26 keys) to keep track of character frequencies for each string.
//todo=> 3. *Compare Character Counts:*
//todo=>    - After populating the frequency arrays for both strings, compare them to determine if they are identical.
//todo=>    - If they match, then the two strings are anagrams; otherwise, they are not.
//todo=> 4. *Edge Cases:*
//todo=>    - Check if the strings have different lengths initially. If they do, they cannot be anagrams.
//todo=>    - Handle empty strings as valid anagrams of each other.
/*
function areAnagrams(str1: string, str2: string): boolean {
  // Normalize Case
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  Check if the strings have different lengths
  if (str1.length !== str2.length) {
      return false;
  }

  // Initialize character count arrays for 'a' to 'z'
  // Create an Array of Size 26:

//^ new Array(26) creates a new array with 26 elements.
//^ At this point, the array has a length of 26, but its elements are uninitialized (i.e., they are undefined by default).
//^ Fill the Array with Zeros:

//^ The .fill(0) method fills all 26 elements of the array with the value 0.
//^ After this operation, the array charCount1 will be an array of size 26 where each element is initialized to 0.

  const charCount1: number[] = new Array(26).fill(0);
  const charCount2: number[] = new Array(26).fill(0);

  // Count character occurrences in both strings
  //^ here all characters of word, one by one will change into code number from alphabet to confirm exact alphabet
  for (let i = 0; i < str1.length; i++) {
      charCount1[str1.charCodeAt(i) - 97]++;
      charCount2[str2.charCodeAt(i) - 97]++;
  }

  // Compare character counts
  //^ here from word all alphabets of str1 & str2 will be separated and will be compared with each other for true or false statement
  for (let i = 0; i < 26; i++) {
      if (charCount1[i] !== charCount2[i]) {
          return false;
      }
  }

  return true;
}

// Example usage:
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world"));   // false
 */
/*
Find the character code for 'a'
console.log('a'.charCodeAt(0)); // Outputs: 97

Find the character code for 'b'
console.log('b'.charCodeAt(0)); // Outputs: 98

You can do this for any letter
console.log('c'.charCodeAt(0)); // Outputs: 99
console.log('z'.charCodeAt(0)); // Outputs: 122
 */
//& ### Question 30: Reverse Words in a Sentence
// *Problem:*
//todo=> Write a TypeScript function reverseWords(sentence: string): string that reverses the words in a given sentence. For example, if the input is "Hello world", the output should be "world Hello".
// *Hints:*
//todo=> 1. *Identify Word Boundaries:*
//todo=>    - Traverse the sentence character by character.
//todo=>    - Detect the start and end of each word by identifying spaces or the start/end of the string.
//todo=> 2. *Extract Words:*
//todo=>    - Use indices to keep track of where each word starts and ends.
//todo=>    - Build an array of words from these indices by manually copying characters into new strings.
//todo=> 3. *Reverse the Order of Words:*
//todo=>    - After extracting the words, create a new array to hold them in reverse order.
//todo=>    - Iterate through the original array of words from the end to the beginning and insert them into the new array.
//todo=> 4. *Reconstruct the Sentence:*
//todo=>    - Concatenate the reversed array of words into a single string, ensuring that words are separated by spaces.
//todo=> 5. *Edge Cases:*
//todo=>    - Handle multiple spaces between words by treating consecutive spaces as single separators.
//todo=>    - Consider sentences with leading, trailing, or multiple spaces.
//todo=> ### Detailed Steps:
// *Anagrams:*
//todo=> 1. *Normalize Case:*
//todo=>    - Convert each character to lowercase.
//todo=>    - Example: Convert "Listen" and "Silent" to "listen" and "silent".
//todo=> 2. *Count Characters:*
//todo=>    - Use an array of size 26 for lowercase letters.
//todo=>    - Traverse the first string and increment counts in the array for each character.
//todo=>   - Traverse the second string and decrement counts in the array for each character.
//todo=>    - If the array contains only zeroes after processing both strings, they are anagrams.
//todo=> 3. *Compare Counts:*
//todo=>    - After processing both strings, ensure that the frequency counts match exactly.
// *Reverse Words in a Sentence:*
//todo=> 1. *Identify Word Boundaries:*
//todo=>    - Loop through the sentence and track the start of a word when encountering a non-space character.
//todo=>    - Track the end of a word when encountering a space or the end of the sentence.
//todo=> 2. *Extract Words:*
//todo=>    - Use substring operations to extract words between the tracked start and end indices.
//todo=>    - Store these words in an array.
//todo=> 3. *Reverse Order:*
//todo=>    - Use a loop to iterate from the end of the word array to the beginning, adding each word to a new array.
//todo=> 4. *Reconstruct Sentence:*
//todo=>    - Build the final string by joining words from the reversed array with spaces between them.
/*
function reverseWords(sentence: string): string {
  // Step 1: Trim the sentence to remove leading and trailing spaces, and split by spaces.
  const words = sentence.trim().split(/\s+/); // The regex \s+ handles multiple spaces.

  // Step 2: Reverse the order of the words.
  const reversedWords = words.reverse();

  // Step 3: Join the reversed words with a single space to reconstruct the sentence.
  return reversedWords.join(' ');
}

// Example usage:
console.log(reverseWords("Hello world")); // Output: "world Hello"
console.log(reverseWords("  The quick brown fox  ")); // Output: "fox brown quick The"
console.log(reverseWords("OpenAI is awesome")); // Output: "awesome is OpenAI"
 */
// check the following examples to understand the job of  .trim().split(/\s+/);
/*
let sentence = "  Hello world  ";
console.log(sentence.trim()); // Output: "Hello world"
 */
/*
let sentence = "Hello   world";
console.log(sentence.trim().split(/\s+/)); // Output: ["Hello", "world"]
 */
//~ # Day-16
//& ### Question:31 *Sum of Even Numbers from Multiple Arrays*
// *Problem Statement:*
//todo=> You are given three arrays of integers. Write a function sumEvenNumbers(arr1: number[], arr2: number[], arr3: number[]): number[] that calculates the sum of all even numbers in each array. The function should return a new array containing the sum of even numbers from each of the three arrays.
// *Example:*
//todo=> typescript
//todo=> sumEvenNumbers([1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]) // [6, 14, 22]
//todo=> sumEvenNumbers([2, 4, 6], [1, 3, 5], [10, 20, 30]) // [12, 0, 60]
//todo=> sumEvenNumbers([11, 13, 15], [2, 4], [8, 10, 12]) // [0, 6, 30]
// *Hint:*
//todo=> - Iterate through each array and sum up only the even numbers.
//todo=> - Store the sum for each array in a new array.
//todo=> - Return the new array containing the sums
/*
function sumEvenNumbers(arr1: number[], arr2: number[], arr3: number[]): number[] {
  // Helper function to sum even numbers in a given array
  function sumEvens(arr: number[]): number {
      return arr.filter(num => num % 2 === 0) // it will Filter Even Numbers
                .reduce((acc, num) => acc + num, 0); // it will Sum up the Even Numbers
  }

  // Calculate the sum of even numbers for each array
  const sum1 = sumEvens(arr1);
  const sum2 = sumEvens(arr2);
  const sum3 = sumEvens(arr3);

  // Return the array of sums
  return [sum1, sum2, sum3];
}

// Example usage:
console.log(sumEvenNumbers([1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12])); // Output: [6, 14, 22]
console.log(sumEvenNumbers([2, 4, 6], [1, 3, 5], [10, 20, 30])); // Output: [12, 0, 60]
console.log(sumEvenNumbers([11, 13, 15], [2, 4], [8, 10, 12])); // Output: [0, 6, 30]
 */
//& ### Question:32 *Concatenate Strings from Arrays*
// *Problem Statement:*
//todo=> You are given three arrays of strings. Write a function concatenateFirstLetters(arr1: string[], arr2: string[], arr3: string[]): string[] that extracts the first letter of each string in the arrays, concatenates these letters for each array, and returns a new array containing the concatenated strings.
// *Example:*
//todo=> typescript
//todo=> concatenateFirstLetters(["apple", "banana", "cherry"], ["dog", "elephant", "frog"], ["grape", "honeydew", "kiwi"])
//todo=> ["abc", "def", "ghk"]
//todo=> concatenateFirstLetters(["sun", "moon"], ["star", "planet"], ["galaxy", "comet"])
//todo=> ["sm", "sp", "gc"]
//todo=> concatenateFirstLetters(["table", "chair", "lamp"], ["carpet", "curtain", "sofa"], ["desk", "shelf", "cabinet"])
//todo=> ["tcl", "ccs", "dsc"]
// *Hint:*
//todo=> - Iterate through each string in the arrays, extract the first letter, and concatenate them.
//todo=> - Store the concatenated result for each array in a new array.
//todo=> - Return the new array containing the concatenated strings.
/*
function concatenateFirstLetters(arr1: string[], arr2: string[], arr3: string[]): string[] {
  // Helper function to concatenate the first letters of each string in an array
  function concatenateFirstLettersOfArray(arr: string[]): string {
      return arr.map(str => str.charAt(0)).join('');
  }

  // Concatenate first letters for each of the input arrays
  const result1 = concatenateFirstLettersOfArray(arr1);
  const result2 = concatenateFirstLettersOfArray(arr2);
  const result3 = concatenateFirstLettersOfArray(arr3);

  // Return the array of concatenated strings
  return [result1, result2, result3];
}

// Example usage:
console.log(concatenateFirstLetters(["apple", "banana", "cherry"], ["dog", "elephant", "frog"], ["grape", "honeydew", "kiwi"]));
// Output: ["abc", "def", "ghk"]

console.log(concatenateFirstLetters(["sun", "moon"], ["star", "planet"], ["galaxy", "comet"]));
// Output: ["sm", "sp", "gc"]

console.log(concatenateFirstLetters(["table", "chair", "lamp"], ["carpet", "curtain", "sofa"], ["desk", "shelf", "cabinet"]));
// Output: ["tcl", "ccs", "dsc"]
 */
//~ # Day-17
//& ### Question 33: *Calculate the Product of Odd Numbers*
//todo=> Write a function productOfOdds(numbers: number[]): number that takes an array of numbers as input. The function should calculate the product of all odd numbers in the array and return the result. If there are no odd numbers, return 1.
// *Example:*
//todo=> typescript
//todo=> console.log(productOfOdds([2, 3, 5, 6])); // Output: 15
//todo=> console.log(productOfOdds([2, 4, 6, 8])); // Output: 1
//todo=> *Hint:* Traverse through the array, multiply the odd numbers, and handle the case where no odd numbers are present.
/*
function productOfOdds(numbers: number[]): number {
  // Initialize the product to 1 (the multiplicative identity)
  let product = 1;
  let hasOdd = false;

  // Traverse through the array
  for (const number of numbers) {
      // Check if the number is odd
      if (number % 2 !== 0) {
          product *= number; // Multiply the odd number to the product
          hasOdd = true; // Indicate that we found at least one odd number
      }
  }

  // If no odd numbers were found, product will remain 1 , after : we can fix any number to see in output
  return hasOdd ? product : 1;
  //return hasOdd ? product : 0;
  //return hasOdd ? product : 99;
}

// Example usage:
console.log(productOfOdds([2, 3, 5, 6])); // Output: 15
console.log(productOfOdds([2, 4, 6, 8])); // Output: 1
 */
//& ### Question 34: *Find the Longest Word in a Sentence*
//todo=> Write a function findLongestWord(sentence: string): string that takes a string sentence as input. The function should return the longest word in the sentence. If there are multiple words with the same length, return the first one.
// *Example:*
//todo=> typescript
//todo=> console.log(findLongestWord("The quick brown fox jumps over the lazy dog")); // Output: "jumps"
//todo=> console.log(findLongestWord("I love coding in TypeScript")); // Output: "TypeScript"
//todo=> *Hint:* Split the sentence into words, compare their lengths, and return the longest one.
/*
function findLongestWord(sentence: string): string {

      // Split the sentence into words using spaces
      const words = sentence.split(/\s+/);
  
  // Initialize variables to track the longest word and its length
  let longestWord = '';
  let maxLength = 0;

  // Iterate through each word in the array
  for (const word of words) {
      // Check if the current word's length is greater than the maximum length found so far
      if (word.length >= maxLength) {
          longestWord = word; // Update longestWord
          maxLength = word.length; // Update maxLength
      }
  }

  return longestWord;
}

// Example usage:
console.log(findLongestWord("The quick brown fox jumps over the lazy dog")); // Output: "jumps"

console.log(findLongestWord("I love coding in TypeScript"));// Output: "TypeScript"
 */
//~ # Day-18
//& ### Question: 35 *Sum of Odd Numbers and Multiplication Table*
//todo=> Write a function that takes an array of numbers as input. The function should first find the sum of all the odd numbers in the array. Then, it should generate and return an array containing the multiplication table of that sum from 1 to 10.
// *Function Signature:*
//todo=> typescript
//todo=> function oddSumMultiplicationTable(numbers: number[]): number[] {
//todo=> Your code here
//todo=> }
// *Example:*
//todo=> - Input: [2, 3, 5, 8, 11]
//todo=> - Output: [19, 38, 57, 76, 95, 114, 133, 152, 171, 190]
//todo=>   - (Explanation: The odd numbers are 3, 5, and 11. Their sum is 19. The multiplication table of 19 is generated.)
//todo=> *Hint:*
//todo=> 1. Use a loop to iterate through the array and sum the odd numbers.
//todo=> 2. Use another loop to create the multiplication table for the sum.
/*
function oddSumMultiplicationTable(numbers: number[]): number[] {
  // Step 1: the sum of all odd numbers in the array , here result from given array 3 + 5 + 11 = 19
  let oddSum = numbers.reduce((sum, num) => {
      return num % 2 !== 0 ? sum + num : sum;
  }, 0);

  // Step 2: the multiplication table for the sum of odd numbers which is 19 so 19 X 1 = 19 till 19 so 19 X 10 = 190
  let multiplicationTable: number[] = [];
  for (let i = 1; i <= 10; i++) {
      multiplicationTable.push(oddSum * i);
  }

  return multiplicationTable;
}

// Example usage:
const numbers = [2, 3, 5, 8, 11];
const result = oddSumMultiplicationTable(numbers);
console.log(result); // Output: [19, 38, 57, 76, 95, 114, 133, 152, 171, 190]
 */
//& ### Question: 36 *Filter and Square Even Numbers*
//todo=> Write a function that takes an array of numbers as input. The function should filter out all the even numbers from the array, square each of those even numbers, and return a new array containing these squared values.
// *Function Signature:*
//todo=> typescript
//todo=> function squareEvenNumbers(numbers: number[]): number[] {
//todo=> Your code here
//todo=> }
// *Example:*
//todo=> - Input: [1, 2, 3, 4, 5, 6]
//todo=> - Output: [4, 16, 36]
//todo=>   - (Explanation: The even numbers are 2, 4, and 6. Their squares are 4, 16, and 36.)
// *Hint:*
//todo=> 1. Use a loop or array method to filter out the even numbers.
//todo=> 2. Square each of the filtered numbers and store the results in a new array.
/*
function squareEvenNumbers(numbers: number[]): number[] {
  // Step 1: Filter out even numbers , here from given array numbers are 2, 4, 6
  const evenNumbers = numbers.filter(num => num % 2 === 0);

  // Step 2: Square each of the filtered even numbers , from given array 2^2 , 4^4, 6^6
  const squaredEvenNumbers = evenNumbers.map(num => num * num);

  return squaredEvenNumbers;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5, 6];
const result = squareEvenNumbers(numbers);
console.log(result); // Output: [4, 16, 36]
 */
//~ # Day-19
//& ### Question 37: Find the Maximum Difference
// *Problem Statement:*
//todo=> Given an array of integers, find the maximum difference between any two elements in the array. The difference should be calculated as difference = arr[j] - arr[i] where j > i.
// *Example:*
//todo=> typescript
//todo=> Input: [2, 7, 9, 5, 1, 3, 5]
//todo=> Output: 7
//todo=> Explanation: The maximum difference is between 9 and 2, where 9 - 2 = 7.
// *Hint:*
//todo=> Iterate through the array, keeping track of the minimum value encountered so far. Calculate the difference between the current element and the minimum value and update the maximum difference accordingly.
/*
function findMaxDifference(arr: number[]): number {
  if (arr.length < 2) {
      throw new Error("Array must contain at least two elements");
  }

  let minValue = arr[0];
  let maxDiff = arr[1] - arr[0];

  for (let i = 1; i < arr.length; i++) {
      const currentDiff = arr[i] - minValue;
      // The algorithm checks a total of 5 differences: 7 - 2 = 5, 9 - 2 = 7, 5 - 2 = 3, 3 - 1 = 2, 5 - 1 = 4
      if (currentDiff > maxDiff) {
          maxDiff = currentDiff;
      }
      // Given the array [2, 7, 9, 5, 1, 3, 5]:

      // Initial minValue: 2 (first element).
      // Iteration 1: arr[1] = 7 → 7 is not less than minValue (2), so minValue remains 2.
      // Iteration 2: arr[2] = 9 → 9 is not less than minValue (2), so minValue remains 2.
      // Iteration 3: arr[3] = 5 → 5 is not less than minValue (2), so minValue remains 2.
      // Iteration 4: arr[4] = 1 → 1 is less than minValue (2), so minValue is updated to 1.
      // Iteration 5: arr[5] = 3 → 3 is not less than minValue (1), so minValue remains 1.
      // Iteration 6: arr[6] = 5 → 5 is not less than minValue (1), so minValue remains 1.

      if (arr[i] < minValue) {
          minValue = arr[i];
      }
  }

  return maxDiff;
}

const input1 = [2, 7, 9, 5, 1, 3, 5];
console.log(findMaxDifference(input1));  // Output: 7

const input2 = [8, 16, 32, 15, 4, 34, 64]; // Output: 60
console.log(findMaxDifference(input2));

const input3 = [4];

try {
    console.log(findMaxDifference(input3));
} catch (error) {
  // The below line responsible for the output
    console.error((error as Error).message); // Output: Array must contain at least two elements
}
 */
//& ### Question 38: String Character Frequency
// *Problem Statement:*
//todo=> Write a function that takes a string as input and returns an object where the keys are characters and the values are the frequency of those characters in the string.
// *Example:*
//todo=> typescript
//todo=> Input: "hello"
//todo=> Output: { h: 1, e: 1, l: 2, o: 1 }
// *Hint:*
//todo=> Use an object to store the frequency of each character. Iterate over the string and update the count for each character
/*
function charFrequency(str: string): { [key: string]: number } {
  const frequency: { [key: string]: number } = {};
  // object is empty & string is "hello"
  // when we check h, e, o : means that the characters has not been encountered before
  // for h, frequency[h] = 0
  // for e, frequency[e] = 0
  // for l, frequency[l] = 0
  // for o, frequency[o] = 0
  // then we iterate over the string and update the frequency
  // when we encounter 'h' : frequency[h] = 1
  // when we encounter 'e' : frequency[e] = 1
  // when we encounter 'l' : frequency[l] = 2
  // when we encounter 'o' : frequency[o] = 1
  // finally, we return the frequency object
  for (const char of str) {
      if (frequency[char]) {
          frequency[char]++;
      } else {
          frequency[char] = 1;
      }
  }

  return frequency;
}


const input1 = "hello";
const output1 = charFrequency(input1);
console.log(output1);  // Output: { h: 1, e: 1, l: 2, o: 1 }

const input2 = "aggressiveness";
const output2 = charFrequency(input2);
console.log(output2); // Output: { a: 1, g: 2, r: 1, e: 3, s: 4, i: 1, v: 1, n: 1 }
 */
//~ # Day 20
//& ### Question 39: Check for Prime Number
// *Problem:*
//todo=> Write a TypeScript function that takes a positive integer as input and checks whether it is a prime number. A prime number is a number greater than 1 that has no divisors other than 1 and itself. If the number is prime, return true; otherwise, return false.
// *Hint:*
//todo=> - Use a loop to check divisibility from 2 up to the square root of the number.
//todo=> - If the number is divisible by any of these, it is not prime.
//todo=> typescript
//todo=> function isPrime(num: number): boolean {
//todo=> Your code here
//todo=> }
/*
function isPrime(num: number): boolean {
  // Prime numbers are greater than 1
  if (num <= 1) {
      return false;
  }
  // divisibility from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
          return false; // Not a prime number
      }
  }
  return true; // Prime number
}

// Code Execution for isPrime(7)
// Initial Check:

// The function first checks if 7 is less than or equal to 1. Since 7 is greater than 1, it proceeds to the next step.
// Loop Execution:

// The loop will check divisibility from i = 2 up to the square root of 7. The square root of 7 is approximately 2.64. So, the loop will check divisibility for i = 2.

// Iteration 1 (i = 2):

// The function checks if 7 % 2 === 0.
// The result is 1, meaning 7 is not divisible by 2.
// Since the loop only runs up to i = 2, no more iterations are needed.
// Conclusion:

// Since no divisors were found in the range from 2 to 2, the function concludes that 7 is a prime number and returns true.

console.log(isPrime(7)); // true
console.log(isPrime(10)); // false

// Code Execution for isPrime(10)
// Initial Check:

// The function first checks if 10 is less than or equal to 1. Since 10 is greater than 1, it proceeds to the next step.
// Loop Execution:

// The loop will check divisibility from i = 2 up to the square root of 10. The square root of 10 is approximately 3.16, so the loop will check divisibility for i = 2 and i = 3.

// Iteration 1 (i = 2):

// The function checks if 10 % 2 === 0.
// The result is 0, meaning 10 is divisible by 2.
// Since 10 is divisible by 2, the function immediately returns false, indicating that 10 is not a prime number.
 */
//& ### Question 40: Reverse a Number
// *Problem:*
//todo=> Write a TypeScript function that takes a number as input and returns the number with its digits reversed. For example, if the input is 1234, the output should be 4321.
// *Hint:*
//todo=> - Convert the number to a string, reverse the string, and then convert it back to a number.
//todo=> typescript
//todo=> function reverseNumber(num: number): number {
//todo=> Your code here
//todo=> }
/*
function reverseNumber(num: number): number {
  // Convert the number to a string
  let numStr = num.toString();
  
  // Reverse the string
  let reversedStr = numStr.split('').reverse().join('');
  
  // Convert the reversed string back to a number
  let reversedNum = parseInt(reversedStr);
  
  return reversedNum;
}


console.log(reverseNumber(1234)); // Output: 4321
// Reversing the Number 1234
// Convert to String:

// num.toString() converts 1234 to the string "1234".
// Reverse the String:

// numStr.split('') splits "1234" into an array of characters: ['1', '2', '3', '4'].
// reverse() reverses the array: ['4', '3', '2', '1'].
// join('') joins the reversed array back into a string: "4321".
// Convert Back to Number:

// parseInt("4321") converts the string "4321" back into the number 4321.
console.log(reverseNumber(9876)); // Output: 6789
// Reversing the Number 9876
// Convert to String:

// num.toString() converts 9876 to the string "9876".
// Reverse the String:

// numStr.split('') splits "1234" into an array of characters: ['9', '8', '7', '6'].
// reverse() reverses the array: ['6', '7', '8', '9'].
// join('') joins the reversed array back into a string: "6789".
// Convert Back to Number:

// parseInt("6789") converts the string "6789" back into the number 6789.
*/
//~ # Day-21
//& ### Question 41: Sum of Digits
// *Problem:*
//todo=> Write a function sumOfDigits that takes a number as input and returns the sum of its digits.
// *Example:*
// *Problem:*
//todo=> typescript
// *Problem:*
//todo=> sumOfDigits(123); // Output: 6 (1 + 2 + 3)
// *Problem:*
//todo=> sumOfDigits(4567); // Output: 22 (4 + 5 + 6 + 7)
// *Hint:*
// *Problem:*
//todo=> You can convert the number to a string, split it into individual digits, and then sum them up.
/*
function sumOfDigits(num: number): number {
  // the number to a string, then split it into individual digits
  // 1st => num.toString(); // "123"
  // 2nd =>  numString.split(''); // ['1', '2', '3']
  const digits = num.toString().split('');

  // Convert the string digits back to numbers and sum them up
  // 1st => parseInt('1'); // 1
  // 2nd => parseInt('2'); // 2
  // 3rd => parseInt('3'); // 3
  // 4th => 1 + 2 + 3 // 6
  // 5th => 6 // return the sum as the final result
  const sum = digits.reduce((acc, digit) => acc + parseInt(digit), 0);

  return sum;
}

// Example usage:
console.log(sumOfDigits(123));  // Output: 6
console.log(sumOfDigits(4567)); // Output: 22
 */
//& ### Question 42: Count Consonants in a String
// *Problem:*
// *Problem:*
//todo=> Write a function countConsonants that takes a string as input and returns the number of consonants in the string. Consonants are all alphabetical characters except a, e, i, o, u (both lowercase and uppercase).
// *Example:*
// *Problem:*
//todo=> typescript
// *Problem:*
//todo=> countConsonants("hello"); // Output: 3
// *Problem:*
//todo=> countConsonants("TypeScript"); // Output: 8
/*
function countConsonants(str: string): number {
  // Define vowels to exclude
  const vowels = 'aeiouAEIOU';

  // Initialize consonant count
  let consonantCount = 0;

  // Iterate over each character in the string
  for (const char of str) {
       //^ char.match(/[a-zA-Z]/) checks if the character is an alphabetic letter.
      //^ !vowels.includes(char) ensures the character is not a vowel.
      if (char.match(/[a-zA-Z]/) && !vowels.includes(char)) {
          consonantCount++;
      }
  }

  return consonantCount;
}


console.log(countConsonants("hello"));       // Output: 3
console.log(countConsonants("TypeScript"));  // Output: 8
 */
//~ # Day-22
//& ### Question 43: Count Digits in a Number
//todo=> Given a number, your task is to count and return the number of digits in that number.
// *Example:*
//todo=> typescript
//todo=> function countDigits(num: number): number {
//todo=> Write your logic here
//todo=> }
// Example usage
//todo=> console.log(countDigits(12345)); // Output: 5
//todo=> console.log(countDigits(987));   // Output: 3
/*
function sumOfDigits(num: number): number {
  // Convert the number to a string, then split into individual characters (digits)
 //   num.toString()
// Input: num = 123
// Operation: num.toString()
// Output: "123" (The number 123 is converted to the string "123")
// .split('')
// Input: "123"
// Operation: "123".split('')
// Output: ["1", "2", "3"] (The string "123" is split into an array of its individual characters, resulting in the array ["1", "2", "3"])
  const digits = num.toString().split('');
  
  // Sum up the digits after converting them back to numbers
//   Array of digits as strings: ["1", "2", "3"]

// This shows the result of splitting the string "123" into an array of its characters ["1", "2", "3"].
// Sum of digits: 1+2+3 = 6

// Finally, this shows the sum of the digits, which is 6 for the input 123.
  const sum = digits.reduce((acc, digit) => acc + parseInt(digit), 0);
  
  return sum;
}

// Example usage:
console.log(sumOfDigits(123));  // Output: 6
console.log(sumOfDigits(4567)); // Output: 22
 */
//& ### Question 44: Calculate the Power of a Number
//todo=> Given a base number b and an exponent e, your task is to calculate b raised to the power of e without using built-in methods like Math.pow.
// *Example:*
//todo=> typescript
//todo=> function calculatePower(b: number, e: number): number {
//todo=> Write your logic here
//todo=> }
// Example usage
//todo=> console.log(calculatePower(2, 3)); // Output: 8
//todo=> console.log(calculatePower(5, 0)); // Output: 1
/*
function calculatePower(b: number, e: number): number {
  // Initialize result to 1, as any number raised to the power of 0 is 1
  let result = 1;

  // Multiply result by the base number b, e times
  for (let i = 0; i < e; i++) {
      result *= b;
  }

  return result;
}

// When you want to calculate 2^3, it means you multiply 2 by itself 3 times: 2 x 2 x 2 = 8, 2 x 2 x 2 = 8

// Now, let's break down how the code does this step by step: , Start with result = 1:

// We start with 1 because multiplying any number by 1 doesn't change the number.
// Loop through 3 times (since the exponent is 3):

// Iteration 1: Multiply result by 2.
// result = 1 x 2 = 2
// result=1 x 2 = 2
// Iteration 2: Multiply result by 2 again.
// result = 2 x 2 = 4

// Iteration 3: Multiply result by 2 one more time.

// result = 4 x 2 = 8
// Final Result: After 3 multiplications, the final value of result is 8.
console.log(calculatePower(2, 3));  // Output: 8
// calculate  5^0 : In mathematics, any number raised to the power of 0 is 1:
// 5^0 = 1
// In this case, since the exponent is 0, the loop doesn't run at all. There are no iterations to perform, so the value of result remains unchanged.
console.log(calculatePower(5, 0));  // Output: 1
console.log(calculatePower(3, 4));  // Output: 81
console.log(calculatePower(7, 2));  // Output: 49
 */
//~ # Day-23
//& ### Question 45: Calculate the Factorial of a Number
//todo=> Task: Write a function calculateFactorial that takes a number as input and returns its factorial.
//todo=> Hint: Factorial means multiplying a number by all positive integers less than it. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.
/*
function calculateFactorial(n: number): number {
  // Initialize result to 1, as the factorial of 0 is 1
  let result = 1;

  // Multiply result by each integer from 2 up to n
  for (let i = 2; i <= n; i++) {
      result *= i;
  }

  return result;
}


console.log(calculateFactorial(5));  // Output: 120
console.log(calculateFactorial(0));  // Output: 1
console.log(calculateFactorial(7));  // Output: 5040
 */
//& ### Question 46: Convert a Number to Binary (Without Using Built-in Functions)
//todo=> Task: Write a function convertToBinary that takes a number as input and converts it into its binary form.
//todo=> Hint: Repeatedly divide the number by 2 and note down the remainder. Join the remainders in reverse order to get the binary representation.
/*
function convertToBinary(num: number): string {
  let binary = ''; // This will store the binary representation as a string

  if (num === 0) {
      return '0'; // Special case: the binary representation of 0 is "0"
  }

  while (num > 0) {
      const remainder = num % 2; // Get the remainder when dividing by 2
      binary = remainder.toString() + binary; // Add the remainder to the beginning of the binary string
      num = Math.floor(num / 2); // Divide the number by 2 and update num
  }

  return binary;
}

//convertToBinary(5):

//5 ÷ 2 = 2 remainder 1 → binary = "1"

//2 ÷ 2 = 1 remainder 0 → binary = "01"

// 1 ÷ 2 = 0 remainder 1 → binary = "101"
// Final output: "101"

console.log(convertToBinary(5));   // Output: "101"

// convertToBinary(10):

// 10÷2=5 remainder 0 → binary = "0"

// 5÷2=2 remainder 1 → binary = "10"

// 2÷2=1 remainder 0 → binary = "010"

// 1÷2=0 remainder 1 → binary = "1010"
// Final output: "1010"
console.log(convertToBinary(10));  // Output: "1010"
console.log(convertToBinary(0));   // Output: "0"
console.log(convertToBinary(15));  // Output: "1111"

// convertToBinary(15):
// step 1:
// 15 ÷ 2 = 7 remainder 1 , Binary so far: "1"

// Step 2:
// 7÷2=3 remainder 1 , Binary so far: "11"

// Step 3:
// 3÷2=1 remainder 1 , Binary so far: "111"

// Step 4:
// 1÷2=0 remainder 1 , Binary so far: "1111"

 */
//~ # Day-24
//& ### Question 47: *Generate Fibonacci Sequence*
//todo=> Write a function generateFibonacci(n: number): number[] that generates and returns the first n numbers of the Fibonacci sequence. The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the previous two.
// *Hint:* Use a loop or recursion to build the sequence.
//todo=> *Example:*
//todo=> typescript
//todo=> generateFibonacci(5); // Output: [0, 1, 1, 2, 3]
//todo=> generateFibonacci(7); // Output: [0, 1, 1, 2, 3, 5, 8]
/*
function generateFibonacci(n: number): number[] {
  if (n <= 0) return [];
  if (n === 1) return [0];

  const sequence: number[] = [0, 1];

  for (let i = 2; i < n; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
  }

  return sequence;
}
 */
// n = 5, which is greater than 1, so the function proceeds.
// The sequence starts as [0, 1].
// First Iteration (i = 2):
// Calculate Next Value: sequence[1] + sequence[0] = 1 + 0 = 1
// Update Sequence: The sequence becomes [0, 1, 1].Second Iteration (i = 3):
// Calculate Next Value: sequence[2] + sequence[1] = 1 + 1 = 2
// Update Sequence: The sequence becomes [0, 1, 1, 2].
// Third Iteration (i = 4):
// Calculate Next Value: sequence[3] + sequence[2] = 2 + 1 = 3
// Update Sequence: The sequence becomes [0, 1, 1, 2, 3].
// The loop stops since i = 5 is equal to n.
// The final sequence [0, 1, 1, 2, 3] is returned.
/*
 console.log(generateFibonacci(5)); // Output: [0, 1, 1, 2, 3]
console.log(generateFibonacci(7)); // Output: [0, 1, 1, 2, 3, 5, 8]
 */
// n = 7, which is greater than 1, so the function proceeds.
// Sequence Initialization:
// The sequence starts as [0, 1].
// First Iteration (i = 2):
// Calculate Next Value: sequence[1] + sequence[0] = 1 + 0 = 1
// Update Sequence: The sequence becomes [0, 1, 1].
// Second Iteration (i = 3): Calculate Next Value
// sequence[2] + sequence[1] = 1 + 1 = 2
// Update Sequence: The sequence becomes [0, 1, 1, 2].
// Third Iteration (i = 4):
// Calculate Next Value: sequence[3] + sequence[2] = 2 + 1 = 3
// Update Sequence: The sequence becomes [0, 1, 1, 2, 3].
// Fourth Iteration (i = 5):
// Calculate Next Value: sequence[4] + sequence[3] = 3 + 2 = 5
// Update Sequence: The sequence becomes [0, 1, 1, 2, 3, 5].
// Fifth Iteration (i = 6):
// Calculate Next Value: sequence[5] + sequence[4] = 5 + 3 = 8
// Update Sequence: The sequence becomes [0, 1, 1, 2, 3, 5, 8].
//& ### Question 48: *Replace Vowels with Asterisks*
//todo=> Write a function replaceVowels(str: string): string that takes a string str and returns a new string where all vowels (a, e, i, o, u) are replaced with asterisks (*). The function should be case-insensitive.
// *Hint:* You can use a loop or a regular expression to find and replace vowels.
//todo=> *Example:*
//todo=> typescript
//todo=> replaceVowels('Hello World'); // Output: 'H*ll* W*rld'
//todo=> replaceVowels('TypeScript');  // Output: 'Typ*Scr*pt'
/*
function replaceVowels(str: string): string {
  return str.replace(/[aeiou]/gi, '*');
}

console.log(replaceVowels('Hello World')); // Output: 'H*ll* W*rld'
console.log(replaceVowels('TypeScript'));  // Output: 'Typ*Scr*pt'
 */
//Regular Expression: The regular expression /[aeiou]/gi is used to match all vowels: [aeiou] matches any of the vowels a, e, i, o, u.
// The g flag stands for "global," meaning it will replace all occurrences of the vowels, not just the first one.
// The i flag stands for "case-insensitive," so it will match both uppercase and lowercase vowels.
// Replace Method: The replace method is used to replace each vowel found in the string with an asterisk (*).
// Return the Modified String: The modified string, where all vowels have been replaced with *, is returned.
// Example Outputs: Input: 'Hello World' , Output: 'H*ll* W*rld' / Input: 'TypeScript', Output: 'Typ*Scr*pt'
//~ # Day-25
//& ### Question 49: Calculate the Difference Between the Sum of Odd and Even Digits
//todo=> *Problem:* You are given a positive integer. You need to calculate the sum of the odd digits and the sum of the even digits, then find the difference between these two sums. The difference should be positive.
// *Example:*
//todo=> - Input: number = 1234
//todo=> - Output: 2 (Odd sum: 1 + 3 = 4, Even sum: 2 + 4 = 6, Difference: |4 - 6| = 2)
// *Hint:* Convert the number to a string, then check each digit to see if it's odd or even, and calculate the respective sums.
/*
function calculateDifference(number: number): number {
  // Convert the number to a string to iterate through each digit
  const digits = number.toString();
  
  // Initialize sums for odd and even digits
  let oddSum = 0;
  let evenSum = 0;
  
  // Iterate through each digit
  for (let digit of digits) {
      const num = parseInt(digit, 10); // Convert the string digit back to a number
      
      if (num % 2 === 0) { // ensure the number is odd or even
          // Even digit
          evenSum += num;
      } else {
          // Odd digit
          oddSum += num;
      }
  }

  // Calculate the absolute difference between the sums
  // Math.abs() ensures that the difference is always reported as a positive number.
  // The Math.abs() function in JavaScript (and TypeScript) returns the absolute value of a given number. The absolute value of a number is its distance from zero on the number line, without considering whether it is positive or negative.
  return Math.abs(oddSum - evenSum);
}

const number = 1234;
const result = calculateDifference(number);
console.log(result); // Output: 2
*/
//& ### Question 50: Find the Smallest Divisor of a Number (Greater than 1)
//todo=> *Problem:* You are given a positive integer. Your task is to find the smallest divisor of this number that is greater than 1.
// *Example:*
//todo=> - Input: number = 15
//todo=> - Output: 3 (because 3 is the smallest divisor of 15 that is greater than 1)
// *Hint:* Use a loop to check which number divides the integer without leaving a remainder, starting from 2 upwards.
/*
function findSmallestDivisor(number: number): number {
  // Start from 2 and go upwards then 3 and it stops when it reaches
  for (let i = 2; i <= number; i++) {
      // Check if i is a divisor of number
      if (number % i === 0) {
          return i; // Return the first divisor found 3 as asked in example
      }
  }
  
  // This point is never reached because 1 is always a divisor,
  // and 1 is not a valid output based on the problem statement.
  return number;
}

const number = 15;
const smallestDivisor = findSmallestDivisor(number);
console.log(smallestDivisor); // Output: 3 is the smallest divisor of 15 that is greater than 1
 */
//~ # Day-26
//& ### Question 51: Reverse a Number
//todo=> Write a function reverseNumber(n: number): number that takes a positive integer n and returns the number with its digits reversed.
// Example:
//todo=> typescript
//todo=> reverseNumber(1234); // Output: 4321
//todo=> reverseNumber(567);  // Output: 765
/*
function reverseNumber(rev: number): number {
  // it will convert the number to a string
  const str = rev.toString();
  
  // 1st it will reverse the string & it will join and convert it back to a number
  const reversedStr = str.split('').reverse().join('');
  
  // Return the reversed number as a number
  return parseInt(reversedStr, 10);
}
 */
//* parseInt(reversedStr, 10) converts the reversed string "4321" back to the number 4321.
//* Without the radix 10, the function might interpret the string as a number in a different base (e.g., base-8 if the string starts with 0), which could lead to unexpected results.
//* Without the radix, there’s a risk that parseInt might misinterpret the string, especially if it starts with 0, potentially leading to incorrect results. Specifying 10 as the radix ensures that the string is interpreted as a base-10 number, avoiding such issues.
/*
 console.log(reverseNumber(1234)); // Output: 4321
console.log(reverseNumber(567));  // Output: 765
 */
//& ### Question 52: Find the Average of Numbers in a String
//todo=> Write a function averageOfNumbersInString(str: string): number that extracts all numbers from a given string, calculates their average, and returns the result.
// Example:
//todo=> typescript
//todo=> averageOfNumbersInString('The numbers are 12, 15, and 20.'); // Output: 15.666...
//todo=> averageOfNumbersInString('No numbers here!'); // Output: NaN
/*
function averageOfNumbersInString(str: string): number {
  // Use a regular expression to find all numbers in the string
// str.match(/\d+/g):
// This regular expression finds all sequences of digits (\d+) in the string. The g flag ensures that all matches are returned as an array.
// If no matches are found, match returns null.

  const numbers = str.match(/\d+/g);

  // If no numbers are found, return NaN
  if (!numbers) {
      return NaN;
  }

  // It convert the found numbers from strings to numbers
  // numbers.map(Number):  This applies the Number function to each element in the numbers array.
  // It converts each string (like "12", "15", "20") into a number (12, 15, 20).
  const numArray = numbers.map(Number);

  // It calculate the sum of the numbers , 12 + 15 + 20 = 47
  const sum = numArray.reduce((acc, num) => acc + num, 0);

  // It calculate and return the average , 47 / 3 = 15.66666
  return sum / numArray.length;
}

console.log(averageOfNumbersInString('The numbers are 12, 15, and 20.')); // Output: 15.666...
console.log(averageOfNumbersInString('No numbers here!')); // Output: NaN

 */
//~ # Day-27
//& ### Question 53: Count the Number of Divisors
// *Description:*
//todo=> Write a TypeScript function that takes a positive integer as input and returns the number of its divisors (factors). A divisor is a number that divides the input number without leaving a remainder.
// *Example:*
//todo=> typescript
//todo=> Input: 12
//todo=> Output: 6  // (1, 2, 3, 4, 6, 12)
//todo=> Input: 7
//todo=> Output: 2  // (1, 7)
// *Hint:* Use a loop to check each number from 1 to the given number to see if it divides the number evenly.
/*
function countDivisors(num: number): number {
  let count = 0;

  for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
          count++;
      }
  }

  return count;
}
*/
// Detailed Iteration Process:
// Iteration 1: i = 1
// 12 % 1 === 0 (true), so count is incremented by 1.
// count = 1
// Iteration 2: i = 2
// 12 % 2 === 0 (true), so count is incremented by 1.
// count = 2
// Iteration 3: i = 3
// 12 % 3 === 0 (true), so count is incremented by 1.
// count = 3
// Iteration 4: i = 4
// 12 % 4 === 0 (true), so count is incremented by 1.
// count = 4
// Iteration 5: i = 5
// 12 % 5 !== 0 (false), so count remains the same.
// count = 4
// Iteration 6: i = 6
// 12 % 6 === 0 (true), so count is incremented by 1.
// count = 5
// Iteration 7: i = 7
// 12 % 7 !== 0 (false), so count remains the same.
// count = 5
// Iteration 8: i = 8
// 12 % 8 !== 0 (false), so count remains the same.
// count = 5
// Iteration 9: i = 9
// 12 % 9 !== 0 (false), so count remains the same.
// count = 5
// Iteration 10: i = 10
// 12 % 10 !== 0 (false), so count remains the same.
// count = 5
// Iteration 11: i = 11
// 12 % 11 !== 0 (false), so count remains the same.
// count = 5
// Iteration 12: i = 12
// 12 % 12 === 0 (true), so count is incremented by 1.
// count = 6
/*
 console.log(countDivisors(12)); // Output: 6 // (1, 2, 3, 4, 6, 12)
console.log(countDivisors(7));  // Output: 2 // (1, 7)
 */
//& ### Question 54: Check if a Number is a Perfect Square
// *Description:*
//todo=> Write a TypeScript function that takes a positive integer as input and returns true if the number is a perfect square, otherwise return false. A perfect square is a number that is the square of an integer.
// *Example:*
//todo=> typescript
//todo=> Input: 16
//todo=> Output: true  // (4 * 4 = 16)
//todo=> Input: 20
//todo=> Output: false
// *Hint:* Use the square root function Math.sqrt() and check if the result is an integer.
/*
function isPerfectSquare(num: number): boolean {
  const sqrt = Math.sqrt(num);
  return sqrt === Math.floor(sqrt); // it will confirm that square root of the number should be a whole number/integer.
}


console.log(isPerfectSquare(16)); // Output: true
console.log(isPerfectSquare(20)); // Output: false
 */
// Calculate the Square Root
// Inside the function, the square root of 20 is calculated using Math.sqrt(num).
// Math.sqrt(20) returns approximately 4.47213595499958. This value is stored in the variable sqrt.
// Step 3: Check if the Square Root is an Integer
// The function checks if sqrt is an integer by comparing it to Math.floor(sqrt).
// Math.floor(sqrt) returns the largest integer less than or equal to sqrt. In this case, Math.floor(4.47213595499958) returns 4.
// The function then compares sqrt (4.47213595499958) with Math.floor(sqrt) (4).
// Step 4: Evaluate the Condition
// The condition sqrt === Math.floor(sqrt) is evaluated.
// Since 4.47213595499958 is not equal to 4, the condition is false.
// Step 5: Return the Result
// The function returns false, indicating that 20 is not a perfect square.
//~ # Day-28
//& ### Question 55: Armstrong Number Checker (Without Using split)
//todo=> Problem: Check if a given number is an Armstrong number. An Armstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits.
// JHint:
//todo=> 1. First, count the number of digits in the given number.
//todo=> 2. Then, iterate through each digit by extracting it one by one.
//todo=> 3. Raise each digit to the power of the total number of digits and accumulate the result.
//todo=> 4. Finally, compare the accumulated sum to the original number to determine if it is an Armstrong number.
/*
function isArmstrongNumber(num: number): boolean {
  // Step 1: Here count the number of digits after changing the number into string
  const numStr = num.toString();
  const numberOfDigits = numStr.length;

  // Step 2: Initialize a variable to accumulate the sum of powered digits
  let sum = 0;
  let temp = num;

  // Step 3: Extract each digit and accumulate the powered sum
  while (temp > 0) {
 // To get the last digit , 153 % 10;  // digit = 3
      const digit = temp % 10;
// Number 153
// Total Digits (numberOfDigits): 3 (since 153 has 3 digits).
// Iteration 1:
// Digit: 3 (153 % 10)
// Calculation: Math.pow(3, 3) → 27
// Sum Update: sum += 27 → sum = 27
// Iteration 2:
// Digit: 5 (15 % 10)
// Calculation: Math.pow(5, 3) → 125
// Sum Update: sum += 125 → sum = 152
// Iteration 3:
// Digit: 1 (1 % 10)
// Calculation: Math.pow(1, 3) → 1
// Sum Update: sum += 1 → sum = 153
// Raise the digit to the power of numberOfDigits and add to sum
      sum += Math.pow(digit, numberOfDigits);
      // Initial temp = 153
      // First Iteration:
      // Extract Last Digit:
      // const digit = temp % 10;  // digit = 153 % 10 = 3
      // 153 % 10 gives 3, which is the last digit of 153.
      // Remove Last Digit:
      // temp = Math.floor(temp / 10);  // temp = Math.floor(153 / 10) = 15
      // 153 / 10 equals 15.3.
      // Math.floor(15.3) truncates the decimal part, resulting in 15.
      // temp is now 15.
      // Second Iteration (temp = 15)
      // Extract Last Digit:
      // const digit = temp % 10;  // digit = 15 % 10 = 5
      // 15 % 10 gives 5, which is the last digit of 15.
      // Remove Last Digit:
      // temp = Math.floor(temp / 10);  // temp = Math.floor(15 / 10) = 1
      // 15 / 10 equals 1.5.
      // Math.floor(1.5) truncates the decimal part, resulting in 1.
      // temp is now 1.
      // Third Iteration (temp = 1)
      // Extract Last Digit:
      // const digit = temp % 10;  // digit = 1 % 10 = 1
      // 1 % 10 gives 1, which is the last digit of 1.
      // Remove Last Digit:
      // temp = Math.floor(temp / 10);  // temp = Math.floor(1 / 10) = 0
      // 1 / 10 equals 0.1.
      // Math.floor(0.1) truncates the decimal part, resulting in 0.
      // temp is now 0.
      //Final Comparison:
      // After all digits have been processed and temp becomes 0, the cumulative sum of each digit raised to its power is compared with the original number (153).
      // If the sum matches the original number, then the number is identified as an Armstrong number.
      temp = Math.floor(temp / 10); // Remove the last digit
  }

  // Step 4: Compare the sum to the original number
  // the number 153 is an Armstrong number because: It has 3 digits.    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
  // Since 153 is equal to the sum of its digits each raised to the power of 3, 153 is an Armstrong number.
  // return sum === num; → return 153 === 153;
  // The function returns true because the calculated sum equals the original num.
  return sum === num;
}
 */
/* const number = 153;
if (isArmstrongNumber(number)) {
  console.log(`${number} is an Armstrong number.`); // This is output
} else {
  console.log(`${number} is not an Armstrong number.`);
}
 */
//& ### Question 56: Find the LCM (Least Common Multiple)
//todo=> Problem: Find the Least Common Multiple (LCM) of two numbers. LCM is the smallest number that is a multiple of both given numbers.
// Hint:
//todo=> 1. Calculate the Greatest Common Divisor (GCD) of the two numbers using the Euclidean algorithm.
//todo=> 2. Use the GCD to find the LCM with the formula: [text{LCM}(a, b) = frac{|a times b|}{text{GCD}(a, b)}]
/*
// Function to calculate the Greatest Common Divisor (GCD) using Euclidean algorithm
function gcd(a: number, b: number): number {
  while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
  }
  return a;
}

// Function to calculate the Least Common Multiple (LCM) using the GCD
function lcm(a: number, b: number): number {
  if (a === 0 || b === 0) {
      return 0;  // LCM of zero with any number is zero
  }
  // LCM(a,b) = | a x b| / GCD(a,b)
  // Plug in a = 12, b = 18, and GCD = 6:
  // LCM(12,18) =  | 12 x 18| / 6
  // Calculate the numerator: 12 x 18 = 216
  // Divide by the GCD: 216 / 6 = 36

//   First Iteration:

// We start with a = 12 and b = 18.
// 12 % 18 is 12 because 12 is less than 18, and 18 doesn't divide 12 evenly.
// Update a to 18 and b to 12.
// Second Iteration:

// Now a = 18 and b = 12.
// 18 % 12 is 6 because 18 divided by 12 gives a quotient of 1 and a remainder of 6.
// Update a to 12 and b to 6.
// Third Iteration:

// Now a = 12 and b = 6.
// 12 % 6 is 0 because 12 is evenly divisible by 6 with no remainder.
// Stop Condition:

// The process stops when the remainder is 0.
// The last non-zero remainder before reaching 0 is the GCD.
// The Euclidean algorithm involves repeatedly applying the modulo operation to find the remainder when dividing the two numbers. The GCD is the last non-zero remainder. For 12 and 18, the GCD is 6, which is the largest number that divides both 12 and 18 without leaving any remainder.
  return Math.abs(a * b) / gcd(a, b);
}


const num1: number = 12;
const num2: number = 18;
console.log(`LCM of ${num1} and ${num2} is ${lcm(num1, num2)}`);
 */
//~ # Day-29
//& Question 57: Calculate the Product of Non-Zero Digits*
//todo=> Description:
//todo=> Write a TypeScript function that takes a number as input and returns the product of all non-zero digits in the number.
//todo=> Example:
//todo=> typescript
//todo=> Input: 4056
//todo=> Output: 120  // 4 * 5 * 6 = 120
//todo=> Input: 1002
//todo=> Output: 2  // 1 * 2 = 2
//todo=> Hint: Loop through each digit, skip zeros, and multiply the rest.
/* function productOfNonZeroDigits(num: number): number {
  // Convert the number to a string to access each digit
  const numStr = num.toString();

  // Initialize the product to 1
  let product = 1;

  // Loop through each digit
  for (let i = 0; i < numStr.length; i++) {
      // Get the numeric value of the current digit
      // numStr[i]: Accesses the character at index i of the string numStr. Since numStr is a string representation of a number, numStr[i] will be a character like '4', '0', '5', etc.
     // parseInt(numStr[i], 10): Converts the character to a number.
     // parseInt is a function that parses a string and returns an integer.
     // The first argument (numStr[i]) is the string (or character) to be converted to a number.
    // The second argument (10) specifies the radix (base) of the number system to be used for the conversion. Here, 10 indicates that the number is in base 10, which is the standard decimal numbering system.
   // const digit = ...: Assigns the result of parseInt(numStr[i], 10) to the variable digit.

  // Example:
   // If numStr is "4056" and i is 0, numStr[i] is '4'.
   // parseInt('4', 10) converts the string '4' to the number 4.
   // So, digit will be assigned the value 4.
      const digit = parseInt(numStr[i], 10);

      // Skip if the digit is zero
      // Here the code !== 0 will eliminate the 0 digit & the code *= digit will be multiply non zero digits
      if (digit !== 0) {
          // Multiply the product by the digit & the code *= digit will multiply non zero digits
          product *= digit;
      }
  }

  return product;
}

// Example usage:
console.log(productOfNonZeroDigits(4056)); // Output: 120
console.log(productOfNonZeroDigits(1002)); // Output: 2
 */
//& Question 58: Find the Difference Between the Largest and Smallest Digit*
//todo=> Description:
//todo=> Write a TypeScript function that takes a number as input and returns the difference between its largest and smallest digits.
//todo=> Example:
//todo=> typescript
//todo=> Input: 7593
//todo=> Output: 6  // 9 - 3 = 6
//todo=> Input: 12345
//todo=> Output: 4  // 5 - 1 = 4
//todo=> Hint: Convert the number to a string or use a loop to identify the largest and smallest digits, then calculate their difference.
function differenceBetweenLargestAndSmallestDigit(num) {
    // Convert the number to a string to access each digit
    var numStr = num.toString();
    // Initialize the smallest and largest digits
    var smallestDigit = 9;
    var largestDigit = 0;
    // Loop through each digit
    for (var i = 0; i < numStr.length; i++) {
        // Get the numeric value of the current digit
        var digit = parseInt(numStr[i], 10);
        // Update the smallest and largest digits accordingly
        if (digit < smallestDigit) {
            smallestDigit = digit;
        }
        if (digit > largestDigit) {
            largestDigit = digit;
        }
    }
    // Calculate the difference between the largest and smallest digits
    return largestDigit - smallestDigit;
}
// Example usage:
console.log(differenceBetweenLargestAndSmallestDigit(7593)); // Output: 6
console.log(differenceBetweenLargestAndSmallestDigit(12345)); // Output: 4
