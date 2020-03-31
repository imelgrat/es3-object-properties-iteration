// Parent
function Shape(x, y) {
  this.x = x;
  this.y = y;
}
Shape.prototype.constructor = Shape;
Shape.prototype.pos = function() {
  return [this.x, this.y];
};

// Child
function Rect(x, y, w, h) {
  Shape.call(this, x, y);
  this.w = w;
  this.h = h;
}

// Temp, intermediate variable
var p = {};
p.__proto__ = Shape.prototype;
Rect.prototype = p;
Rect.prototype.constructor = Rect;

var rectangle = new Rect(1, 2, 4, 10);

// Add a method to the rectangle object.
rectangle.area = function() {
  return this.w * this.h;
};
// Show all proppertiers, including the ones in the Prototype chain
var appchain = document.getElementById("appchain");
for (var property in rectangle) {
  appchain.insertAdjacentHTML("beforeend", "Property: " + property + "<br>");
}
// Show only the properties that belong to the object
var appown = document.getElementById("appown");
for (var property in rectangle) {
  if (rectangle.hasOwnProperty(property)) {
    appown.insertAdjacentHTML("beforeend", "Property: " + property + "<br>");
  }
}
