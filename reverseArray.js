/*Eloquent Javascript Chapter 4: Second Exercise
These are examples of reversing an array
The first creates a new array
the second is my attempt at reversing in place using splice and pop
the third is the example from the book, using a classic pointer method
*/

function reverseArray(oldArray) {
  var newArray = [];
  for (var i = oldArray.length - 1; i >= 0; i--) {
    newArray.push(oldArray[i]);
  }
  return newArray;
}

function reverseArrayInPlace(oldArray) {
  x = 0;
  for (x = 0; x < oldArray.length; x++) {
    oldArray.splice(x, 0, oldArray.pop());
  }
  return oldArray;
}

function reverseArrayInPlace2(array) {
  for (var i = 0; i < Math.floor(array.length / 2); i++) {
    var old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}

var testArray = [1, 2, 3, 4];
console.log(reverseArrayInPlace2(testArray));
