"use strict";
//BASICS - tsc compiler, tsconfig.js
const x = 1;
console.log(x);
let yourname = "Thom";
let isBool = true;
let xvar = null;
let yvar = undefined;
function greet(firstName) {
    console.log("hi" + firstName);
}
greet("yorke");
// Sum of two numbers
function sum(a, b) {
    return a + b;
}
console.log(sum(1, 25));
// Return True or False if user is 18+
function user(num) {
    if (num > 18)
        return true;
    return false;
}
//console.log(user(22));
// Create a function that takes another function as input, and runs it after 1 second.
function runAfter1Second(func) {
    setTimeout(func, 1000);
}
runAfter1Second(() => console.log("you waited a second!?"));
function runAfter2Second(func) {
    setTimeout(func, 2000);
}
runAfter2Second(() => console.log("hello duhhh"));
// Create a function isLegal that returns true or false if a user is above 18. It takes a user as an input.
function isAge(user) {
    console.log(user);
    if (user.age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isAge({
    firstname: 'John',
    lastname: 'Doe',
    age: 19
}));
function maxValue(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(maxValue([1, 2, 3, 4, 5])); // 5
