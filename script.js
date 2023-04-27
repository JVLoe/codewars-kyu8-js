// Transportation on vacation
const rentalCarCost = d => {
    if (d >= 1 && d < 3){
        return d * 40;
    } else if (d >= 3 && d < 7) {
        return (d * 40) - 20;
    } else if (d >= 7) {
        return (d * 40) - 50;
    }
}

// Count by X
const countBy = (x, n) => {
    let result = [];
    for (let i = 1; i <= n; i ++){
        result.push(x * i);
    }
    return result;
}

// Switch It Up!

const switchItUp = number => ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"][number]

const switchItUp2 = number => {
    const words = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"]
    return words[number];
}

// Sum of positive

const positiveSum = arr => {
    const positiveArr = arr.filter(n => n > 0);
    return positiveArr.reduce((a, b) => a + b, 0);
}

// Binary Addition
function addBinary(a,b) {
    return (a+b).toString(2)
}

// Descending Order

function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
}

function descendingOrder2(n){
    let decend = n.toString().split('').sort().reverse().join('');
    return Number(decend)
}

// The Feast of Many Beasts

function feast(beast, dish) {
    return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
}

function feast2(beast, dish) {
  beast = beast.split('');
  let beasty = beast.shift();
  beasty += beast.pop()

  dish = dish.split('');
  let dishy = dish.shift();
  dishy += dish.pop();

  if (beasty === dishy) {
    return true;
  } else {
    return false;
  }
}

function feast3(beast, dish) {
    beast = beast.split('');
    let beasty = beast.shift();
    beasty += beast.pop()

    dish = dish.split('');
    let dishy = dish.shift();
    dishy += dish.pop();

    if (beasty === dishy) {
        return true;
    } else {
        return false;
    }
}

// Cat years, Dog years

const humanYearsCatYearsDogYears = (humanYears) => {
    let cat = 0;
    let dog = 0;

    if (humanYears === 1) {
        cat = 15;
        dog = 15;
    }

    if (humanYears === 2) {
        cat = 24;
        dog = 24;
    }

    if (humanYears > 2) {

        cat = (humanYears - 2) * 4 + 24;
        dog = (humanYears - 2) * 5 + 24;
    }

    return [humanYears, cat, dog]
}


// Simple multiplications

const simpleMultiplication = number => number % 2 === 0 ? number * 8 : number * 9;

// Calculate average

const findAverage = array => {
    return array.length === 0 ? 0 : array.reduce((a, b)=> a + b, 0)/array.length
}

const findAverage1 = array => {
    let total = 0;
    for (let i = 0; i < array.length; i ++) {
        total += array[i];
    }
    if (array.length > 0) {
        return total / array.length;
    } else {
        return 0;
    }
}

// Is it a palindrome?

const isPalindrome = x => x.toLowerCase().split('').reverse().join('') == x.toLowerCase();

const isPalindrome1 = x => {
    const lowercase = x.toLowerCase();
    const reverse = lowercase.split('').reverse().join('');
    if (lowercase === reverse){
        return true;
    } else {
        return false;
    }
}

// Double Char

const doubleChar = (str) => str.split("").map(char => char + char).join("");

function doubleChar1(str) {
    const arr = str.split('').map(char => {
        return char + char;
    })
    return arr.join('')
}

// Testing 1-2-3

const number = array => {
    return array.map(function (line, index) {
        return (index + 1) + ": " + line;
    });
}

function number1(array){
    let newArray = [];
    if (array.length === 0) {
        return [];
    } else {
        for (let i = 0; i < array.length; i++){
            newArray.push((i + 1) + ": " +array[i]);
        }
    }
    return newArray
}

// Volume of a Cuboid

class Kata {
    static getVolumeOfCuboid(length, width, height) {
        return length * width * height
    }
}

// You only need one - Beginner
const check = (a,x) => a.includes(x);

function check1(a, x) {
    if (a.includes(x)){
        return true
    } else {
        return false
    }
}

// altERnaTIng cAsE <=> ALTerNAtiNG CaSe

String.prototype.toAlternatingCase = function () {
    return this
        .split("")
        .map(
            character =>
                character === character.toUpperCase() ?
                    character.toLowerCase() :
                    character.toUpperCase()
        )
        .join("");
}

// Opposite number - broski abs
const opposite = number => number < 0 ? Math.abs(number) : -number;

// Disemvowel Trolls
function disemvowel(str) {
    const vowels = (/[aeiou]/gi);
    return str.replace(vowels, '');
}


// A Needle in the Haystack
function findNeedle(haystack) {
    let needle = haystack.indexOf('needle');
    return `found the needle at position ${needle}`;
}

// Convert number to reversed array of digits
function digitize(n) {
    return String(n).split('').map(Number).reverse()
}

function digitize1(n) {
    let arr = String(n).split('').map((num) => {
        return Number(num);
    })
    return arr.reverse();
}

// Counting sheep...

function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
}

function countSheeps1(arrayOfSheep) {
    let count = 0;
    let total = 0;
    for(let i = 0; i < arrayOfSheep.length; i++) {
        if (arrayOfSheep[i] === true){
            count ++;
        } else if (arrayOfSheep === null || undefined) {
            return false;
        }
    }
    return count;
}

// Convert boolean values to strings 'Yes' or 'No'.
const boolToWord = bool => bool ? "Yes" : "No";

const boolToWord1 = bool => bool === true ? "Yes" : "No";

// Function 1 - hello world
const greet = () => {
    return "hello world!";
}

// Square(n) Sum
function squareSum(numbers){
    return numbers.reduce(function(sum, n){
        return (n*n) + sum;
    }, 0)
}

// Is he gonna survive?
function hero(bullets, dragons){
    return bullets / 2 >= dragons ? true : false;
}

function hero1(bullets, dragons){
    return bullets / 2 === dragons || bullets / 2 > dragons ? true : false;
}

// Odd or Even?
function oddOrEven(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    if (total % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}

// Convert a Number to a String!
function numberToString(num) {
    return String(num);
}

// Convert a String to a Number!

const stringToNumber = function(str){
    return parseInt(str);
}

// Beginner - Lost Without a Map
function maps(x){
    return x.map(x => x * 2);
}

// L1: Set Alarm
function setAlarm(employed, vacation){
    if (employed === true && vacation === false) {
        return true;
    } else {
        return false;
    }
}

// How good are you really?
function betterThanAverage(classPoints, yourPoints) {
    let average = classPoints.reduce((a, b) => a + b, 0) / classPoints.length;
    return yourPoints > average ? true : false;
}

// Keep up the hoop
function hoopCount (n) {
    return n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it";
}

// Sentence Smash
function smash (words) {
    return words.join(' ');
};

// String repeat
function repeatStr (n, s) {
    return s.repeat(n);
}

// Sum without highest and lowest number
function sumArray(array) {
    if (array == null || array.length <= 2){
        return 0;
    }

    let max = Math.max.apply(Math, array);
    let min = Math.min.apply (Math, array);
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total - min - max;
}

// Remove First and Last Character
function removeChar(str){
    if (str.length >= 2) {
        return str.substring(1, str.length - 1);
    }
};

// Even or Odd
function evenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

// If you can't sleep, just count sheep!!
function countSheep(num){
    let str = "";
    for (let i = 1; i <= num; i++) {
        str += `${i} sheep...`;
    }
    return str;
}

// Area or Perimeter
const areaOrPerimeter = function(l , w) {
    if (l === w) {
        return l * w;
    } else {
        return (l + w) * 2;
    }
};

// Calculate BMI
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

// Grasshopper - Summation
function summation(num) {
    let sum = 0
    for(let i = 0; i <= num; i++) {
        sum += i
    }
    return sum
}

// Sum Arrays
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

// Parse nice int from char problem
function getAge(inputString){
    const arr = inputString.split(" ");
    return Number(arr[0]);
}

function getAge1(inputString){
    return parseInt(inputString);
}


// Grasshopper - Personalized Message
function greet (name, owner) {
    if (name === owner) {
        return `Hello boss`;
    }
    return `Hello guest`;
}

function greet2(name, owner) {
    return name === owner ? 'Hello boss' : 	'Hello guest';
}

// Century From Year
const century = year => Math.floor((year-1)/100) + 1;
const century2 = year => Math.ceil(year/100)

// Exes and Ohs
function XO(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
}
const XO1 = str => {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}