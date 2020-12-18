/* Define a new class called Circle with appropriate attributes and instantiate a few Circle objects.
Write a function called circle_area that returns the area of the object.
Write a function total_sides that returns the number of sides of the object.
*/
class Circle {
  constructor (radius)
  {
    this.radius = radius;
    this.sides = 0;
  }

  circle_area () {
    return Math.PI * this.radius * this.radius;
  }

  circle_sides() {
    return this.sides;
}
  circle_color(typeofColor) {
      return "you selected awesome color which is " + typeofColor;
  }
}

const cir1 = new Circle(10);
console.log ("the area of the circle is : " + cir1.circle_area());
console.log ("number of sides of the circle is : " + cir1.circle_sides());
console.log (cir1.circle_color('blue'));

const cir2 = new Circle(25);
console.log ("the area of the circle is : " + cir2.circle_area());
console.log ("number of sides of the circle is : " + cir2.circle_sides());
console.log (cir2.circle_color('green'));

/* Define a new class called Rectangle with appropriate attributes and instantiate a few Rectangle objects.
Write a function called rectangle_area that returns the area of the given object.
Write a function total_sides that returns the number of sides of the object.
*/

class Rectangle {
  constructor (length, width)
  {
    this.length = length;
    this.width = width;
    this.sides = 4;
  }

  Rectangle_area () {
    return this.length * this.width;
  }

  Rectange_sides() {
    return this.sides;
}

}

const Rect1 = new Rectangle(4,5);
console.log ("the area of the Rectangle is : " + Rect1.Rectangle_area());
console.log ("the sides of the Rectangle is : " + Rect1.Rectange_sides());

const Rect2 = new Rectangle(3,6);
console.log ("the area of the Rectangle is : " + Rect2.Rectangle_area());
console.log ("the sides of the Rectangle is : " + Rect2.Rectange_sides());

/*Define a new class called Square with appropriate attributes and instantiate a few Square objects.
Write a function called square_area that returns the area of the given object.
Write a function total_sides that returns the number of sides of the object.
*/
class Square{
  constructor(length)
  {
    this.length = length;
    this.sides = 4;
  }

  Square_area(){
    return this.length * this.length;
  }
  Square_sides(){
    return this.sides;
  }
}
const Squr1 = new Square(8);
console.log("The area of the Square is : " + Squr1.Square_area());
console.log("The sides of the Square is : " + Squr1.Square_sides());
