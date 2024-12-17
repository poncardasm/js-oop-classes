---
date created: 2024-12-18
tags:
  - js-101
  - modern-js-bt
---
In JavaScript, **sealing** and **freezing** are techniques used to restrict changes to objects. These methods come from the `Object` built-in methods: `Object.seal()` and `Object.freeze()`. 

---

### 1. Object.seal()

When an object is **sealed**:

- You **cannot add new properties**.
- You **cannot delete existing properties**.
- However, you **can still modify the values of existing properties**.

Sealing an object essentially "locks down" its structure but allows changes to property values.

#### Example:

```javascript
const user = {
  name: "Alice",
  age: 25
};

// Seal the object
Object.seal(user);

// Trying to add a new property (will fail in strict mode)
user.email = "alice@example.com"; // Doesn't work
console.log(user.email); // undefined

// Trying to delete an existing property (will fail in strict mode)
delete user.age; // Doesn't work
console.log(user.age); // 25

// Modifying an existing property still works
user.age = 26;
console.log(user.age); // 26
```

#### Explanation:

- After calling `Object.seal(user)`, you cannot add or delete properties from the `user` object.
- However, you can still modify the values of existing properties (e.g., changing `age` to 26).

---

### 2. Object.freeze()

When an object is **frozen**:

- You **cannot add new properties**.
- You **cannot delete existing properties**.
- You **cannot modify the values** of existing properties.

Freezing an object makes it **completely immutable** (unchangeable).

#### Example:

```javascript
const car = {
  brand: "Toyota",
  model: "Corolla"
};

// Freeze the object
Object.freeze(car);

// Trying to add a new property (will fail in strict mode)
car.year = 2024;
console.log(car.year); // undefined

// Trying to delete an existing property (will fail in strict mode)
delete car.model;
console.log(car.model); // "Corolla"

// Trying to modify an existing property (will fail in strict mode)
car.model = "Camry";
console.log(car.model); // "Corolla"
```

#### Explanation:

- After calling `Object.freeze(car)`, you cannot change the `car` object in any way. No new properties can be added, existing properties cannot be removed, and values cannot be modified.

---

### **When to Use Sealing or Freezing?**

- **Use `Object.seal()`** when you want to prevent structural changes to an object (like adding or removing properties) but still allow updates to existing property values. For example:
    
    - Preventing new properties from being added to a settings/configuration object.
- **Use `Object.freeze()`** when you want an object to be completely immutable (unchangeable). For example:
    
    - Freezing constant configuration data to ensure it doesn't accidentally change.

---

### Example of Both Together:

```javascript
const config = {
  appName: "MyApp",
  version: "1.0.0"
};

// Seal the config
Object.seal(config);
config.version = "1.0.1"; // Modifying works
config.author = "John"; // Adding fails
console.log(config); // { appName: "MyApp", version: "1.0.1" }

// Freeze the config
Object.freeze(config);
config.version = "1.0.2"; // Modifying fails
console.log(config.version); // "1.0.1"
```

### Output:

```javascript
{ appName: "MyApp", version: "1.0.1" }
```

---

### Summary Table

| Operation                  | Sealed (`Object.seal`) | Frozen (`Object.freeze`) |
| -------------------------- | ---------------------- | ------------------------ |
| **Add properties**         | ❌ Not Allowed          | ❌ Not Allowed            |
| **Delete properties**      | ❌ Not Allowed          | ❌ Not Allowed            |
| **Modify property values** | ✅ Allowed              | ❌ Not Allowed            |

---

By using `Object.seal()` or `Object.freeze()`, you gain control over object behavior, which is especially useful in large applications where data integrity is important.