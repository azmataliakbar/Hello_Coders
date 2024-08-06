//^ src/ rectangle.ts

// *Question:*
//todo=> Create two separate files. In the first file, define and export two functions: calculateArea (calculates the area of a rectangle given its width and height) and calculatePerimeter (calculates the perimeter of a rectangle given its width and height). In the second file, import both functions and use them to calculate the area and perimeter of a rectangle with a width of 5 and a height of 10. Print the results to the console.

// *Hint:*
//todo=> - Use export to export the functions in the first file.
//todo=> - Use named imports to bring the functions into the second file.
//todo=> - Ensure that the file paths are correctly specified when importing.

export function calculateArea(width: number, height: number): number {
  return width * height;
}

export function calculatePerimeter(width: number, height: number): number {
  return 2 * (width + height);
}
