///? chapter 38 - 40

// Q1
// function power(a, b) {
//     return Math.pow(a, b);
//   }

// console.log(power(2, 4)); 

// Q2
// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//       return true; 
//     } else {
//       return false; 
//     }
//   }

//   const year = +prompt("Enter year");
//   if (isLeapYear(year)) {
//     console.log(year + " is a leap year.");
//   } else {
//     console.log(year + " is not a leap year.");
//   }

// Q3
// function calculateSemiPerimeter(a, b, c) {
//     return (a + b + c) / 2;
// }

// function calculateTriangleArea(a, b, c) {
//     const s = calculateSemiPerimeter(a, b, c);
//     const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
//     return area;
// }

// const sideA = +prompt("Enter side A");
// const sideB = +prompt("Enter side B");
// const sideC = +prompt("Enter side C");
// const area = calculateTriangleArea(sideA, sideB, sideC);

// document.write("The area of the triangle is: " + area);

// Q4
// function calculateAverage(subject1, subject2, subject3) {
//     return (subject1 + subject2 + subject3) / 3;
// }

// function calculatePercentage(subject1, subject2, subject3) {
//     const totalMarks = subject1 + subject2 + subject3;
//     const maximumMarks = 300;
//     return (totalMarks / maximumMarks) * 100;
// }

// function mainFunction(subject1, subject2, subject3) {
//     const average = calculateAverage(subject1, subject2, subject3);
//     const percentage = calculatePercentage(subject1, subject2, subject3);

//     console.log("Marks in Subject 1: " + subject1);
//     console.log("Marks in Subject 2: " + subject2);
//     console.log("Marks in Subject 3: " + subject3);
//     console.log("Average Marks: " + average);
//     console.log("Percentage: " + percentage + "%");
// }

// const subject1Marks = +prompt("Enter subject 1 marks");
// const subject2Marks = +prompt("Enter subject 2 marks");;
// const subject3Marks = +prompt("Enter subject 3 marks");;
// mainFunction(subject1Marks, subject2Marks, subject3Marks);

// Q5
// function customIndexOf(str, charToFind) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === charToFind) {
//             return i;
//         }
//     }
//     return -1;
// }

// const text = "Hello, World!";
// const charToSearch = "o";
// const index = customIndexOf(text, charToSearch);

// if (index !== -1) {
//     console.log(`"${charToSearch}" found at index ${index}`);
// } else {
//     console.log(`"${charToSearch}" not found in the string`);
// }

// Q6
// function removeVowels(sentence) {
//     if (sentence.length > 25) {
//       return "Sentence is too long. It should be 25 characters or less.";
//     }

//     const vowels = "aeiouAEIOU";
//     let result = "";

//     for (let i = 0; i < sentence.length; i++) {
//       const char = sentence[i];
//       if (vowels.indexOf(char) === -1) {
//         result += char;
//       }
//     }

//     return result;
//   }

//   // Example usage:
//   const sentence = "This is a test sentence without vowels.";
//   const result = removeVowels(sentence);
//   console.log(result);

// Q7
// function countSuccessiveVowels(text) {
//     text = text.toLowerCase();
//     let count = 0;

//     for (let i = 0; i < text.length - 1; i++) {
//         const currentChar = text[i];
//         const nextChar = text[i + 1];

//         switch (currentChar + nextChar) {
//             case "aa":
//             case "ee":
//             case "ii":
//             case "oo":
//             case "uu":
//                 count++;
//                 break;
//             default:
//                 break;
//         }
//     }
//     return count;
// }

// const sentence = "Pleases read this application and give me gratuity";
// const result = countSuccessiveVowels(sentence);
// console.log("Number of successive vowels: " + result);

// Q8
// function converttometers(kilometer) {
//     return kilometer * 1000;
// }

// function converttofeet(kilometer) {
//     return kilometer * 3280.84;
// }

// function convertToInches(kilometer) {
//     return kilometer * 39370.1;
// }

// function convertToCentimeters(kilometer) {
//     return kilometer * 100000;
// }

// function convertAndPrintDistance(kilometer) {
//     const meters = converttometers(kilometer);
//     const feet = converttofeet(kilometer);
//     const inches = convertToInches(kilometer);
//     const centimeters = convertToCentimeters(kilometer);

//     console.log(`Distance in Kilometers: ${kilometer} km`);
//     console.log(`Distance in Meters: ${meters} meters`);
//     console.log(`Distance in Feet: ${feet} feet`);
//     console.log(`Distance in Inches: ${inches} inches`);
//     console.log(`Distance in Centimeters: ${centimeters} cm`);
// }

// const distanceInKilometers = +prompt("Enter distance in kilometres");
// convertAndPrintDistance(distanceInKilometers);

// Q9
// function calculateOvertimePay(hoursWorked) {
//     const standardHours = 40;
//     const overtimeRate = 12.00;

//     if (hoursWorked <= standardHours) {
//         return 0; 
//     } else {
//         const overtimeHours = hoursWorked - standardHours;
//         const overtimePay = overtimeHours * overtimeRate;
//         return overtimePay;
//     }
// }

// let hoursWorked = 50; 
// let overtimePay = calculateOvertimePay(hoursWorked);
// console.log(`Overtime Pay: Rs. ${overtimePay.toFixed(2)}`);

// Q10
// function calculateCurrencyNotes(amountInHundreds) {
//     let amountInRupees = amountInHundreds * 100;
//     let notesOf100 = 0;
//     let notesOf50 = 0;
//     let notesOf10 = 0;

//     while (amountInRupees >= 100) {
//         notesOf100++;
//         amountInRupees -= 100;
//     }

//     while (amountInRupees >= 50) {
//         notesOf50++;
//         amountInRupees -= 50;
//     }

//     while (amountInRupees >= 10) {
//         notesOf10++;
//         amountInRupees -= 10;
//     }

//     return {
//         notesOf100,
//         notesOf50,
//         notesOf10
//     };
// }

// let amountInHundreds = +prompt("Enter amount");
// let notes = calculateCurrencyNotes(amountInHundreds);
// console.log("Number of 100-rupee notes: " + notes.notesOf100);
// console.log("Number of 50-rupee notes: " + notes.notesOf50);
// console.log("Number of 10-rupee notes: " + notes.notesOf10);
