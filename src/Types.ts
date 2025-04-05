//TYPES - same as interface. And Can't implement classes

//Difference between type and interface
//both type and interface are used to define the shape of objects or structure of data.
//types can be extended using & operator to combine multiple types together. Can be used to define union types and intersection types.
//interface can be extended using extends keyword to inherit properties from other interfaces. used to define object types, function types, and array types.

type User1 = {
  name: string;
  age: number;
  email: string;
};

interface User2 {
  name: string;
  age: number;
  email: string;
}

const u1 : User1 = {
  name: "John",
  age: 25,
  email: "johntest@gmail.com"
};

const u2: User2 = {
  name: "Jane",
  age: 30,
  email: "jane@example.com",
};

console.log(u1);
console.log(u2);

//UNION
type GreetArgs = string | number; // interface gives error

function greet2(id: GreetArgs, name: string) {
  if (typeof id === "string") {
    console.log(`Hello ${name}!`);
  } else {
    console.log(`Hello user with id ${id}!`);
  }
}

greet2("123", "John");
greet2(123, "John"); 

//Intersection

type Employee = {
  name: string;
  startDate: Date;
};
interface Manager {
  name: string; 
  department: string;
};

type TeamLead = Employee & Manager; // both are same 10 and 11 line
// type TeamLead = {name: string; startDate: Date, department: string};

const t: TeamLead = {
  name: "John",
  startDate: new Date(),
  department: "IT",
};
console.log(t);