// strict mode
'use strict';

function strictFunc() {
    'use strict';
}

// being explicit
Object.defineProperty(obj, 'key', {
    enumerable: false, // should be inside for-in loop or Object.keys() ?
    configurable: false, // can i re configure?
    writable: false, // const-like for the value
    value: 'static' // the value
  });
  

var bValue = 38;
Object.defineProperty(o, 'b', {
  get() { return bValue; },
  set(newValue) { bValue = newValue; },
});



// Shape - superclass
function Shape() {
    this.x = 0;
    this.y = 0;
  }
  
  // superclass method
  Shape.prototype.move = function(x, y) {
    this.x += x;
    this.y += y;
    console.info('Shape moved.');
  };
  
  // Rectangle - subclass
  function Rectangle() {
    Shape.call(this); // call super constructor.
  }
  
  // subclass extends superclass
  Rectangle.prototype = Object.create(Shape.prototype);
  Rectangle.prototype.constructor = Rectangle;
  
  var rect = new Rectangle();
  
  console.log('Is rect an instance of Rectangle?',
    rect instanceof Rectangle); // true
  console.log('Is rect an instance of Shape?',
    rect instanceof Shape); // true
  rect.move(1, 1); // Outputs, 'Shape moved.'