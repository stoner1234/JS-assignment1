console.clear();

// Question 1:
// var str1 = 'Today is';
// var str2 = '      a beautiful day     '
// var str3 = ' In Hawaii.     '
// Result = 'Today is a beautiful day In Hawaii.'
// Use the str1, str2, str3 variables to create the Result string. Keep the extra spaces, lowercase and uppercase letters in mind.


var str1 = 'Today is';
var str2 = '      a beautiful day     ';
var str3 = ' In Hawaii.     ';
var result = str1.trim() + " " + str2.trim() + " " + str3.trim();
console.log(result);


console.log("Q1 END =====================")

// Question 2:
// var enteredAlphabet = 'd' or "D"
// Write a program to check vowel, consonant or non-alphabet using switch case. Change value of enteredAlphabet and check if your code works fine.


var enteredAlphabet = prompt('Enter a letter?');
var enteredAlphabet_low = enteredAlphabet.toLowerCase();
var result;
switch (enteredAlphabet_low) {
    case 'a':
        result = true;
        break;
    case 'e':
        result = true;
        break;
    case 'i':
        result = true;
        break;
    case 'o':
        result = true;
        break;
    case 'u':
        result = true;
        break;
}

if (result == true) {
    console.log("It is a vowel");
} else if (enteredAlphabet_low > "a" && enteredAlphabet_low <= "z") {
    console.log("It ia a consonant");
} else {
    console.log("It is a non-alphabet");
}


console.log("Q2 END =====================")

// Question 3:
// Write a JavaScript program to create menu driven calculator that performs basic arithmetic operations (add, subtract, multiply and divide) using switch case. The calculator should input two numbers and an operator: +, -, *, / from the user. It should perform operation according to the operator entered and must take input in given format.


var num1 = Number(prompt("Enter the first number "));
var num2 = Number(prompt("Enter the second number "));
var operator = prompt("Enter the operator +,-,*,/");
switch (operator) {
    case '+':
        console.log(num1 + num2);
        break;
    case '-':
        console.log(num1 - num2);
        break;
    case '*':
        console.log(num1 * num2);
        break;
    case '/':
        console.log(num1 / num2);
        break;
}


console.log("Q3 END =====================")


// Question 4:
// Write a JavaScript program to input sides of a triangle and check whether a triangle is equilateral, scalene or isosceles triangle using if else.
// Properties of triangle:
// A triangle is said Equilateral Triangle, if all its sides are equal. If a, b, c are three sides of triangle. Then, the triangle is equilateral only if a == b == c.
// A triangle is said Isosceles Triangle, if its two sides are equal. If a, b, c are three sides of triangle. Then, the triangle is isosceles if either a == b or a == c or b == c.
// A triangle is said Scalene Triangle, if none of its sides are equal.


var side1 = prompt("Please enter first triangle side.");
var side2 = prompt("Please enter second triangle side.");
var side3 = prompt("Please enter third triangle side.");

if (side1 == side2 && side1 == side3 && side2 == side3) {
    console.log("Given triangle is Equilateral Triangle");
} else if (side1 == side2 || side1 == side3 || side2 == side3) {
    console.log("Given triangle is Isosceles Triangle");
} else {
    console.log("Given triangle is  Scalene Triangle");
}



console.log("Q4 END =====================")


// Question 5:
// Write a JavaScript program to input electricity unit charge and calculate the total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit. An additional surcharge of 20% is added to the bill.
// For example, input: 20 units then bill is Rs10
// Total Units: 300
// 50 * 0.5 = 25
// 100 * 0.75 = 75
// 100 * 1.2 = 120
// 50 * 1.5 = 75
// Total = 295 + 20% surcharge on 295
// Result = INR 354


var input = Number(prompt("Enter the Units."));
var total;

if (input <= 50) {
    total = input * 0.50;
    console.log("For given unit bill is Rs: " + total);
} else if (input <= 150) {
    total = (50 * 0.50) + (input - 150) * 0.75;
    console.log("For given unit bill is Rs: " + total);
} else if (input <= 250) {
    total = (50 * 0.50) + (100 * 0.75) + (input - 250) * 1.20;
    console.log("For given unit bill is Rs: " + total);
} else if (input > 250) {
    total = (50 * 0.50) + (100 * 0.75) + (100 * 1.20) + (input - 250) * 1.50;
    total = total + total * 0.2;
    console.log("For given unit bill is Rs: " + total);
}



console.log("Q5 END =====================")