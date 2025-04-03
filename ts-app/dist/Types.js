"use strict";
//TYPES - same as interface. And Can't implement classes
const u1 = {
    name: "John",
    age: 25,
    email: "johntest@gmail.com"
};
const u2 = {
    name: "Jane",
    age: 30,
    email: "jane@example.com",
};
console.log(u1);
console.log(u2);
function greet2(id, name) {
    if (typeof id === "string") {
        console.log(`Hello ${name}!`);
    }
    else {
        console.log(`Hello user with id ${id}!`);
    }
}
greet2("123", "John");
greet2(123, "John");
;
// type TeamLead = {name: string; startDate: Date, department: string};
const t = {
    name: "John",
    startDate: new Date(),
    department: "IT",
};
console.log(t);
