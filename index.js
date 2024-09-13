console.log("================Part 1: Fizz Buzz================");

// Fizz Buzz
// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("Fizz Buzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

console.log("================Part 2: Prime Time================");

// Prime Time
// Declare an arbitrary number, n.
// Create a loop that searches for the next prime number, starting at n and incrementing from there.
// As soon as you find the prime number, log that number and exit the loop.

let n = 99;
let foundPrime = false;

for (let i = n + 1; !foundPrime; i++) {
  let isPrime = true; // Assume i is prime until proven otherwise
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false; // i is not prime
    }
  }
  if (isPrime) {
    // If i is prime, log it and exit the loop
    console.log(i);
    foundPrime = true; // Change the condition to exit the loop
  }
}
console.log("================Part 3: Feeling Loopy================");
// Loop through the characters of a given CSV string.
// Store each “cell” of data in a variable.
// When you encounter a comma, move to the next cell.
// When you encounter the “\r\n” sequence, move to the next “row.”
// Log each row of data.
const exampleString =
  "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

let cell1 = "",
  cell2 = "",
  cell3 = "",
  cell4 = "";
let currentCell = "";
let cellIndex = 1;

for (let i = 0; i < exampleString.length; i++) {
  const char = exampleString[i];

  // When encountering a comma, move to the next cell
  if (char === ",") {
    if (cellIndex === 1) cell1 = currentCell;
    else if (cellIndex === 2) cell2 = currentCell;
    else if (cellIndex === 3) cell3 = currentCell;
    currentCell = ""; // Reset for the next cell
    cellIndex++; // Move to the next cell
  } else if (char === "\n") {
    //When encountering a newline, move to the next row
    cell4 = currentCell; // The last cell in the row
    console.log(cell1, cell2, cell3, cell4); // Log the current row
    currentCell = ""; // Reset for the next row
    cell1 = cell2 = cell3 = cell4 = ""; // Reset all cells for the next row
    cellIndex = 1; // Reset cell index for the new row
  } else {
    // Otherwise, keep building the current cell
    currentCell += char; // Build the current cell character by character
  }
}
// Handle the last row if it doesn't end with a newline
if (currentCell) {
  cell4 = currentCell;
  console.log(cell1, cell2, cell3, cell4); // Log the final row
}
