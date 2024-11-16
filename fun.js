"use strict";
// 1. Function power
function power(a, b) {
    var result = 1;
    for (var i = 0; i < b; i++) {
        result *= a;
    }
    return result;
}
console.log(power(2, 3));
console.log(power(6, 3));
// 2. leap year
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
var year = parseInt(prompt("Enter a year:") || "0", 10);
if (isNaN(year)) {
    console.log("Please enter a valid number.");
}
else {
    console.log("".concat(year, " is ").concat(isLeapYear(year) ? "" : "not ", "a leap year."));
}
//   3. triangle using
function calculateSemiPerimeter(a, b, c) {
    return (a + b + c) / 2;
}
function calculateArea(a, b, c) {
    var s = calculateSemiPerimeter(a, b, c);
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}
console.log(calculateArea(3, 4, 5));
// 4. average and percentage of marks
function calculateAverage(marks1, marks2, marks3) {
    return (marks1 + marks2 + marks3) / 3;
}
function calculatePercentage(totalMarks, fullMarks) {
    return (totalMarks / fullMarks) * 100;
}
function mainFunction(marks1, marks2, marks3) {
    var average = calculateAverage(marks1, marks2, marks3);
    var totalMarks = marks1 + marks2 + marks3;
    var percentage = calculatePercentage(totalMarks, 300); // Assuming full marks for each subject is 100
    console.log("Average: ".concat(average));
    console.log("Percentage: ".concat(percentage, "%"));
}
mainFunction(80, 95, 68);
// 5. indexOf function for a single character
function customIndexOf(str, char) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i;
        }
    }
    return -1;
}
console.log(customIndexOf("hello", "e"));
console.log(customIndexOf("hello", "z"));
//6.delete all vowels from a sentence
function removeVowels(sentence) {
    return sentence.replace(/[aeiouAEIOU]/g, '');
}
console.log(removeVowels("This is a test sentence."));
//7.Convert distance using different units
function toMeters(km) {
    return km * 1000;
}
function toFeet(km) {
    return km * 3280.84;
}
function toInches(km) {
    return km * 39370.1;
}
function toCentimeters(km) {
    return km * 100000;
}
var distanceInKm = 10;
console.log("Meters: ".concat(toMeters(distanceInKm)));
console.log("Feet: ".concat(toFeet(distanceInKm)));
console.log("Inches: ".concat(toInches(distanceInKm)));
console.log("Centimeters: ".concat(toCentimeters(distanceInKm)));
//10
function calculateNotes(amount) {
    var hundreds = Math.floor(amount / 100);
    amount %= 100;
    var fifties = Math.floor(amount / 50);
    amount %= 50;
    var tens = Math.floor(amount / 10);
    return { hundreds: hundreds, fifties: fifties, tens: tens };
}
console.log(calculateNotes(580));
//8
function calculateOvertimePay(hoursWorked) {
    var overtimeRate = 12.00;
    var standardHours = 40;
    if (hoursWorked > standardHours) {
        var overtimeHours = hoursWorked - standardHours;
        return overtimeHours * overtimeRate;
    }
    else {
        return 0;
    }
}
console.log(calculateOvertimePay(45));
//7
function countVowelPairs(text) {
    var count = 0;
    var vowels = "aeiouAEIOU";
    for (var i = 0; i < text.length - 1; i++) {
        var pair = text[i] + text[i + 1];
        if (vowels.includes(pair[0]) && vowels.includes(pair[1])) {
            count++;
        }
    }
    return count;
}
// Example usage:
console.log(countVowelPairs("Pleases read this application and give me gratuity")); // Output: 3
