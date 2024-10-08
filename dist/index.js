"use strict";
//~ Day:1 Task
//& Question 1: Sum of an Array Instructions:
Object.defineProperty(exports, "__esModule", { value: true });
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
function areAnagrams(str1, str2) {
    // Normalize Case
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    // Check if the strings have different lengths
    if (str1.length !== str2.length) {
        return false;
    }
    // Initialize character count arrays for 'a' to 'z'
    const charCount1 = new Array(26).fill(0);
    const charCount2 = new Array(26).fill(0);
    // Count character occurrences in both strings
    for (let i = 0; i < str1.length; i++) {
        charCount1[str1.charCodeAt(i) - 97]++;
        charCount2[str2.charCodeAt(i) - 97]++;
    }
    // Compare character counts
    for (let i = 0; i < 26; i++) {
        if (charCount1[i] !== charCount2[i]) {
            return false;
        }
    }
    return true;
}
// Example usage:
//console.log(areAnagrams("listen", "silent")); // true
//console.log(areAnagrams("hello", "world"));   // false
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
//todo=>    - Build the final string by joining words from the reversed array with spaces between them.
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
//todo=> - Return the new array containing the concatenated strings.
//~ # Day-17
//& ### Question 33: *Calculate the Product of Odd Numbers*
//todo=> Write a function productOfOdds(numbers: number[]): number that takes an array of numbers as input. The function should calculate the product of all odd numbers in the array and return the result. If there are no odd numbers, return 1.
// *Example:*
//todo=> typescript
//todo=> console.log(productOfOdds([2, 3, 5, 6])); // Output: 15
//todo=> console.log(productOfOdds([2, 4, 6, 8])); // Output: 1
//todo=> *Hint:* Traverse through the array, multiply the odd numbers, and handle the case where no odd numbers are present.
//& ### Question 34: *Find the Longest Word in a Sentence*
//todo=> Write a function findLongestWord(sentence: string): string that takes a string sentence as input. The function should return the longest word in the sentence. If there are multiple words with the same length, return the first one.
// *Example:*
//todo=> typescript
//todo=> console.log(findLongestWord("The quick brown fox jumps over the lazy dog")); // Output: "jumps"
//todo=> console.log(findLongestWord("I love coding in TypeScript")); // Output: "TypeScript"
//todo=> *Hint:* Split the sentence into words, compare their lengths, and return the longest one.
