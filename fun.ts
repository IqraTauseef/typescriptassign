// 1. Function power
function power(a: number, b:number):number{
    let result = 1;
    for (let i = 0; i<b; i++){
        result*=a;
    }
    return result;
}
console.log(power(2,3));
console.log(power(6,3));

// 2. leap year
function isLeapYear(year: number): boolean {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }
  
  const year = parseInt(prompt("Enter a year:") || "0", 10);
  
  if (isNaN(year)) {
    console.log("Please enter a valid number.");
  } else {
    console.log(`${year} is ${isLeapYear(year) ? "" : "not "}a leap year.`);
  }
  
//   3. triangle using
function calculateSemiPerimeter(a: number, b: number, c: number): number {
    return (a + b + c) / 2;
}

function calculateArea(a: number, b: number, c: number): number {
    const s = calculateSemiPerimeter(a, b, c);
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}


console.log(calculateArea(3, 4, 5)); 

// 4. average and percentage of marks
function calculateAverage(marks1: number, marks2: number, marks3: number): number {
    return (marks1 + marks2 + marks3) / 3;
}

function calculatePercentage(totalMarks: number, fullMarks: number): number {
    return (totalMarks / fullMarks) * 100;
}

function mainFunction(marks1: number, marks2: number, marks3: number): void {
    const average = calculateAverage(marks1, marks2, marks3);
    const totalMarks = marks1 + marks2 + marks3;
    const percentage = calculatePercentage(totalMarks, 300); // Assuming full marks for each subject is 100

    console.log(`Average: ${average}`);
    console.log(`Percentage: ${percentage}%`);
}

mainFunction(80, 95, 68);

// 5. indexOf function for a single character
function customIndexOf(str: string, char: string): number {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i;
        }
    }
    return -1;
}
console.log(customIndexOf("hello", "e"))
console.log(customIndexOf("hello", "z")); 


//6.delete all vowels from a sentence
function removeVowels(sentence: string): string {
    return sentence.replace(/[aeiouAEIOU]/g, '');
}


console.log(removeVowels("This is a test sentence.")); 

//7.Convert distance using different units
function toMeters(km: number): number {
    return km * 1000;
}

function toFeet(km: number): number {
    return km * 3280.84;
}

function toInches(km: number): number {
    return km * 39370.1;
}

function toCentimeters(km: number): number {
    return km * 100000;
}


const distanceInKm = 10;
console.log(`Meters: ${toMeters(distanceInKm)}`);
console.log(`Feet: ${toFeet(distanceInKm)}`);
console.log(`Inches: ${toInches(distanceInKm)}`);
console.log(`Centimeters: ${toCentimeters(distanceInKm)}`);
 
//10
function calculateNotes(amount: number): { hundreds: number, fifties: number, tens: number } {
    const hundreds = Math.floor(amount / 100);
    amount %= 100;
    
    const fifties = Math.floor(amount / 50);
    amount %= 50;
    
    const tens = Math.floor(amount / 10);
    
    return { hundreds, fifties, tens };
}
console.log(calculateNotes(580)); 
 //8
 function calculateOvertimePay(hoursWorked: number): number {
    const overtimeRate = 12.00;
    const standardHours = 40;

    if (hoursWorked > standardHours) {
        const overtimeHours = hoursWorked - standardHours;
        return overtimeHours * overtimeRate;
    } else {
        return 0; 
    }
}


console.log(calculateOvertimePay(45)); 
 //7
 function countVowelPairs(text: string): number {
    let count = 0;
    const vowels = "aeiouAEIOU";

    for (let i = 0; i < text.length - 1; i++) {
        const pair = text[i] + text[i + 1];
        if (vowels.includes(pair[0]) && vowels.includes(pair[1])) {
            count++;
        }
    }

    return count;
}

// Example usage:
console.log(countVowelPairs("Pleases read this application and give me gratuity")); // Output: 3
