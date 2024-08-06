//~ Day:1 Task
//& Question 1: Sum of an Array Instructions:
function separateElementsByType(arr) {
    var separated = {
        numbers: [],
        strings: [],
        booleans: []
    };
    arr.forEach(function (item) {
        if (typeof item === 'number') {
            separated.numbers.push(item);
        }
        else if (typeof item === 'string') {
            separated.strings.push(item);
        }
        else if (typeof item === 'boolean') {
            separated.booleans.push(item);
        }
    });
    return separated;
}
// Example Usage:
var mixedArray = [1, "hello", true, 42, "world", false, 3.14];
var separatedElements = separateElementsByType(mixedArray);
console.log(separatedElements);
// Output:
// {
//   numbers: [1, 42, 3.14],
//   strings: ["hello", "world"],
//   booleans: [true, false]
// }
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
//& Question 14: Nested Object with Interfaces
//todo=> Create an interface Person that includes properties for name, age, email, phone, and addresses. The addresses property should be an array of objects, each containing street, city, state, and zipcode. Write a function to find the first person living in a specific city and return their name and email.
// *Hints:*
//todo=> - Define the Address and Person interfaces with the required properties.
//todo=> - Use nested loops to iterate through the people array and each person's addresses array.
//todo=> - Check if the city property matches the given city in the function.
//todo=> - Return the name and email of the first matching person or undefined if no match is found.
//^ OOP Related
// Create a TypeScript class Book that has properties for title, author, publicationYear, and genre. The class should have methods to:
// 1. Display the book details.
// 2. Check if the book is a recent publication (within the last 5 years).
// 3. Change the genre of the book.
// 4. Check if the book's author matches a given author name.
//  *Hints:*
// - Use console.log to print book details in the displayDetails method.
// - In the isRecent method, get the current year using new Date().getFullYear() and compare it with publicationYear.
// - Update the genre property in the changeGenre method.
// - In the isAuthor method, compare the author property with the given author name.
// Nested Object with Interfaces
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

Example usage:
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
// Implement a stack using TypeScript. The stack should have the following methods:
// 1. push(item: T): void - Adds an item to the top of the stack.
// 2. pop(): T | undefined - Removes and returns the item from the top of the stack. If the stack is empty, it should return undefined.
// 3. peek(): T | undefined - Returns the item at the top of the stack without removing it. If the stack is empty, it should return undefined.
// 4. isEmpty(): boolean - Returns true if the stack is empty, otherwise false.
// *Constraints:*
// - Use generics to make the stack implementation type-safe.
// - The stack should handle various data types (number, string, etc.).
// *Example Usage:*
// typescript
// const stack = new Stack<number>();
// stack.push(1);
// stack.push(2);
// console.log(stack.peek()); // Output: 2
// console.log(stack.pop());  // Output: 2
// console.log(stack.pop());  // Output: 1
// console.log(stack.isEmpty()); // Output: true
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
// Implement a queue using TypeScript. The queue should have the following methods:
// 1. enqueue(item: T): void - Adds an item to the end of the queue.
// 2. dequeue(): T | undefined - Removes and returns the item from the front of the queue. If the queue is empty, it should return undefined.
// 3. peek(): T | undefined - Returns the item at the front of the queue without removing it. If the queue is empty, it should return undefined.
// 4. isEmpty(): boolean - Returns true if the queue is empty, otherwise false.
// *Constraints:*
// - Use generics to make the queue implementation type-safe.
// - The queue should handle various data types (number, string, etc.).
// *Example Usage:*
// typescript
// const queue = new Queue<string>();
// queue.enqueue("a");
// queue.enqueue("b");
// console.log(queue.peek()); // Output: "a"
// console.log(queue.dequeue());  // Output: "a"
// console.log(queue.dequeue());  // Output: "b"
// console.log(queue.isEmpty()); // Output: true
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
