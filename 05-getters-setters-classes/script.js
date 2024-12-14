class Person {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  // Getter for fullName
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  // Setter for fullName
  set fullName(name) {
    const parts = name.split(' ');
    if (parts.length !== 2) {
      throw new Error('Full name must include first and last name');
    }
    this._firstName = parts[0];
    this._lastName = parts[1];
  }
}

const person1 = new Person('Crisostomo', 'Ibarra');

// Accessing fullName using getter
console.log(person1.fullName);

// Setting fullName using setter
person1.fullName = 'Maria Clara';
console.log(person1.fullName);

// Set invalid fullName
try {
  person1.fullName = 'Elias';
} catch (e) {
  console.log(`Error: ${e.message}`);
}
