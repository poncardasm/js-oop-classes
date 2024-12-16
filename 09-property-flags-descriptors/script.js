// [[Configurable]] - if `true`, the property can be deleted and these attributes can be modified, otherwise not
// [[Enumerable]] - if `true`, the property will be returned in a `for...in` loop, otherwise not
// [[Writable]] - if `true`, the value of the property can be changed, otherwise not
// [[Value]] - the value of the property

Math.PI = 4;
console.log(Math.PI);

let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
console.log(descriptor);

const shapeObj = {
  name: 'Rectangle',
  width: 200,
  height: 100,
};

Object.defineProperty(shapeObj, 'name', {
  writable: false,
  configurable: false,
  enumerable: false,
});

descriptor = Object.getOwnPropertyDescriptor(shapeObj, 'name');
console.log(descriptor);

shapeObj.name = 'Square';
console.log(shapeObj.name);
delete shapeObj.name;

console.log(shapeObj.name);

for (let [key, value] of Object.entries(shapeObj)) {
  console.log(key, value);
}

console.log(Object.getOwnPropertyDescriptors(shapeObj));
