class Rectangle {
  constructor(name, width, height) {
    this.name = name;
    this.width = width;
    this.height = height;
  }

  area() {
    return this.height * this.width;
  }

  perimeter() {
    return 2 * (this.height + this.width);
  }

  log() {
    console.log(
      `Name: ${this.name}, width: ${this.width}, height: ${this.height}`
    );
  }
}

const rect1 = new Rectangle('Rect 1', 25, 20);
const rect2 = new Rectangle('Rect 2', 10, 5);

console.log(rect1);
console.log(rect1.name);
console.log(rect1.area());
console.log(rect1.perimeter());
console.log(rect2.area());
rect1.log();
rect2.log();
