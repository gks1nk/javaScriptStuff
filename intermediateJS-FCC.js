//intermediate algorithms - freecodecamp

//Sum All Numbers in a Range
function sumAll(arr) {
  var sum = 0;
  var max = arr.reduce(function (a, b) {return Math.max(a, b);});
  var min = arr.reduce(function (a, b) {return Math.min(a, b);});
  for (var x = min; x < max + 1; x++) {
      sum += x;
    }
  return sum;
  }

sumAll([1, 4]);

//Diff Two Arrays
function diffArray(arr1, arr2) {
  var newArr = [];
  function buildDiffArray (a1, a2) {
    for (var x = 0; x < a1.length; x++) {
      if (a2.indexOf(a1[x]) == -1) {
        newArr.push(a1[x]);
      }
    }
  }
  buildDiffArray(arr1, arr2);
  buildDiffArray(arr2, arr1);
  // Same, same; but different.
  return newArr;
}

console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));
