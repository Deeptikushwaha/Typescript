//Interfaces -- to asign types to user object

// without interface -----
// function isAge(user: {
//   firstname: string,
//   lastname: string,
//   age: number
// }) {
//   console.log(user);
//   if(user.age >= 18) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isAge({
//   firstname: 'John',
//   lastname: 'Doe',
//   age: 19
// })); 

interface User{
    firstname: string,
    lastname: string,
    age : number,
    email? : string    //? for making email an optional property
};

function isLegal(user: User) {
  if( user.age > 18){
    return true;
  }
  return false;
}
function greet1(user: User) {
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

//interface can be extended using extends keyword to inherit properties from other interfaces. used to define object types, function types, and array types.

//Implementing interfaces as classes - interface can be implemented by a class using implements keyword.

interface Person{
    name: string;
    age: number;
}

class Employe implements Person{
    name: string;
    age: number;
    constructor(n: string, a: number){
        this.name = n;
        this.age = a;
    }
    greet(phrase: string){
        console.log(`${phrase} ${this.name}`);
    }
}
const e = new Employe('Deepti', 22);
e.greet('Hello');

interface Animal {
  name: string;
  eat(food: string): void;
}

class Dog implements Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  eat(food: string): void {
    console.log(`${this.name} is eating ${food}`);
  }
}

const d = new Dog('Jacky');
d.eat('doggofood');