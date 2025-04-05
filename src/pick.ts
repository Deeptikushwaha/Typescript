// interface Usert {
//     name: string;
//     age: number;
// };

// function sumOfAge(user1:Usert, user2:Usert){
//     return user1.age + user2.age;
// }

// const age = sumOfAge(
//      {name:"Jane", age:21}
//     ,{name:'John', age:20});
// console.log(age);


interface User3 {
  id: string;
  name: string;
  age: number;
  email: string;
  password: string;
};

// Pick the properties that we want to update from the User interface and create a new type UpdateProps that will be used in the update function.
type UpdateProps = Pick<User3, 'name' | 'age' | 'email'>;

// Create a function that will update the user information
function update(props: UpdateProps) {
  console.log(`Name: ${props.name}, Age: ${props.age}, Email: ${props.email}`);
}
 
// Create a new user
const user3: User3 = {
  id: '12345',
  name: 'veer',
  age: 12,
  email: 'veraaa@gmail.com',
  password: 'password'
};

// Update the user information
update({ name: 'Chandan Kumar', age: 31, email: 'chanda@gmail.com' });

