// Partial makes all properties of a type optional. This is useful when you want to update only a few properties of a type.

interface User4 {
  id: string;
  name: string;
  age: number;
  email: string;
  password: string;
};

type UpdateProps2 = Pick<User4, 'name' | 'age' | 'email'>

type UpdatePropsOptional = Partial<UpdateProps2>

function update2(props: UpdatePropsOptional) {
  console.log(`Name: ${props.name}, Age: ${props.age}, Email: ${props.email}`);
}

const user2: User4 = {
  id: '12345',
  name: 'harshit',
  age: 50,
  email: 'fndfvn@gmail.com',
  password: 'password'
}

// Here we are updating only the name property of the user object. but in last file "pick.ts" we have to update all the properties of the UpdateProps.
update2({ name: 'harshita' });