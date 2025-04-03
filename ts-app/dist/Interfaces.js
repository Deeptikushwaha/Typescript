"use strict";
//Interfaces -- to asign types to user object
;
function isLegal(user) {
    if (user.age > 18) {
        return true;
    }
    return false;
}
function greet1(user) {
    return `Hello ${user.firstname} ${user.lastname} ${user.age} ${user.email}`;
}
console.log(isLegal({
    firstname: 'Alex',
    lastname: 'Turner',
    age: 19
}));
console.log(greet1({
    firstname: 'Monkey',
    lastname: 'Reckless',
    age: 19,
    email: 'AM3@gmail.com'
}));
class Employe {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
}
const e = new Employe('Deepti', 22);
e.greet('Hello');
class Dog {
    constructor(name) {
        this.name = name;
    }
    eat(food) {
        console.log(`${this.name} is eating ${food}`);
    }
}
const d = new Dog('Rex');
d.eat('meat');
