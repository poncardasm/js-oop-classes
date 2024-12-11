class MathUtils {
  static circleArea(radius) {
    if (radius <= 0) {
      return 0;
    }
    return Math.PI * radius * radius;
  }

  static degreesToRadians(degrees) {
    return (degrees * Math.PI) / 180;
  }

  static randomInt(min, max) {
    if (min > max) {
      [min, max] = [max, min];
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

const area = MathUtils.circleArea(25);
console.log('Area of circle with radius 25: ', area.toFixed(1));

const radians = MathUtils.degreesToRadians(45);
console.log('45 degrees in radians: ', radians.toFixed(1));

const randomNum = MathUtils.randomInt(1, 99);
console.log('Random integer between 1 and 99: ', randomNum);
