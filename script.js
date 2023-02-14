/**
 * Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
 *
 * Examples
 * Input: [1, 5.2, 4, 0, -1]
 * Output: 9.2
 *
 * Input: []
 * Output: 0
 *
 * Input: [-2.398]
 * Output: -2.398
 *
 * Assumptions
 * You can assume that you are only given numbers.
 *     You cannot assume the size of the array.
 *     You can assume that you do get an array and if the array is empty, return 0.
 * What We're Testing
 * We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
 * Advanced users may find this extremely easy and can easily write this in one line.
 */

// my solution
function sum (numbers) {
    "use strict";
    let total = 0;
    for (let i = 0; i < numbers.length; i += 1) {
        total += numbers[i];
    }
    if (total > 0 | total < 0) {
        return total;
    } else {
        return 0;
    }
};

// other solution
function sum(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}

/**
 * Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
 *
 * For example (Input -> Output):
 *
 * 2 -> 3 (1 + 2)
 * 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
 */

// my solution - for every number that is less than and equal to num, add 1
// if num = 2: ill start at 0. Then as 1. then add another 1, which equals 2. then add 1 and 2.
var summation = function (num) {
    let sum = 0
    for(let i = 0; i <= num; i++) {
        sum += i
    }
    return sum
}

/*
* Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
*
* */
function bmi(weight, height) {
    let bmi = weight / (height * height);
    if (bmi <= 18.5) {
        return "Underweight";
    } else if (bmi <= 25) {
        return "Normal";
    } else if (bmi <= 30) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

/*
*
* You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
* If it is a square, return its area. If it is a rectangle, return its perimeter.

* Example(Input1, Input2 --> Output):
* 6, 10 --> 32
* 3, 3 --> 9
* */

// my solution

const areaOrPerimeter = function(l , w) {
    if (l === w) {
        return l * w;
    } else {
        return (l + w) * 2;
    }
};

// other solution

const areaOrPerimeter = function(l , w) {
    return l == w ? l*w : 2*(l + w)
};

/**
 * Given a non-negative integer, 3 for example, return a string with a murmur:
 * "1 sheep...2 sheep...3 sheep...".
 * Input will always be valid, i.e. no negative integers.
 * */

// solution
var countSheep = function (num){
    let str = "";
    for (let i = 1; i <= num; i++) {
        str += `${i} sheep...`;
    }
    return str;
}

/**
 * Create a function that takes an integer as an argument and returns "Even" for even numbers
 * or "Odd" for odd numbers.
 * */

// my solution
function evenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

// other solution

function even_or_odd(number) {
    return number % 2 ? "Odd" : "Even"
}

/**
 * Your goal is to create a function that removes the first and last characters of a string.
 * You're given one parameter, the original string.
 * You don't have to worry with strings with less than two characters.
 * */

// my solution
function removeChar(str){
    if (str.length >= 2) {
        return str.substring(1, str.length - 1);
    }
};

// other solution

function removeChar(str) {
    return str.slice(1, -1);
}

