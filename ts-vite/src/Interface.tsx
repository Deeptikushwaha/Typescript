import React from 'react'

const Interface = () => {
  const employee = new Employee("John", 30);

 return (
    <>
      <h2>Implementing Interface</h2>
      {employee.render()}
    </>
 )
}

interface Person{
    name: string,
    age: number,
    greet(phrase:string): void;
}

class Employee implements Person{
    name: string;
    age: number;

    constructor(n:string, a:number){
        this.name = n;
        this.age = a;
    }

    greet(phrase: string){
        console.log(`${phrase} ${this.name}`);
    }

    render() {
    return (
      <div>
        <p>Name: {this.name}</p>
        <p>Age: {this.age}</p>
      </div>
    );
 }
}


export default Interface 