const user = {
  name: 'Juan',
  age: 23,
};

// Sealing the object
Object.seal(user);

// Trying to add a new property
user.email = 'juan@example.com';
console.log(user.email); // undefined

// Trying to delete a property
delete user.age;
console.log(user.age); // 23

// Trying to change the value of a property
user.name = 'Pedro';
console.log(user.name);

const car = {
  brand: 'Ford',
  model: 'Mustang',
};

// Freezing the object
Object.freeze(car);

// Trying to add a new property
car.color = 'red';

// Trying to delete a property
delete car.model;
console.log(car.model);

// Trying to change the value of a property
car.brand = 'Toyota';
console.log(car.brand);
