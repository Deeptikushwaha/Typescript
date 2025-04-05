//RECORD - creates an object type with keys of a specific type and values of a specific type.

// Record<K, T> - Constructs an object type whose property keys are K and whose property values are T.

//typing objects verbosely ---
// type Users = {
//     [key: string] : {age: number, name: string};
// }


//typing objects in a concise way using record ----

type Users = Record<string, {age: number, name: string}>

const users: Users = {
  '1': {age: 40, name: 'Thom'},
  'def': {age: 38, name: 'Alex'},
  'ghi': {age: 22, name: 'Kanmani'}
}

console.log(users['1']);
 
//MAP - creates a map object with keys of a specific type and values of a specific type. some functions are .set .get .delete .has .clear .size

const user4 = new Map()
user4.set('abc', {age: 22, name: 'aloo'})
user4.set('2', {age: 10, name: 'duhhh'})
user4.set('1', {age: 22, name: 'manish'})

const ans = user4.get('1')
console.log(ans);
