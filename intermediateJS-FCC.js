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

//Convert To Roman Numeral
function convertToRoman(num) {
    var roman = "";
    var decimalNums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var romanNums = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    for (var i = 0; i < decimalNums.length; i++) {
        while (num >= decimalNums[i]) {
            roman += romanNums[i];
            num -= decimalNums[i];
        }
    }
    return roman;
}
  
  console.log(convertToRoman(798));

//wherefor art thou
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var sourceKeys = Object.keys(source);
  
  //console.log(sourceKeys);
  for (var x = 0; x < collection.length; x++) {
    var pushFlag = true;
    for (var y = 0; y < sourceKeys.length; y++) {
      if (collection[x].hasOwnProperty(sourceKeys[y])) {
        if (collection[x][sourceKeys[y]] != source[sourceKeys[y]]) {
          pushFlag = false;
        }
      } else {
        pushFlag = false;
      }
    }
    if (pushFlag) {
      arr.push(collection[x]);
    }
  } 
  // Only change code above this line
  return arr;
}

console.log(whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 }));

//Search and Replace
function myReplace(str, before, after) {
  if (before[0] === before[0].toUpperCase()) {
    var upper = after[0].toUpperCase() + after.slice(1);
    after = upper;
  }
  var newstr = str.replace(before, after);
  console.log(newstr);
  return newstr;
}

myReplace("Let us get back to more Coding", "Coding", "algorithms");

//Pig Latin
function translatePigLatin(str) {
  var vowels = ["a", "e", "i", "o", "u"];
  var indexOf = -1;
  var indexCount = 0;
  var pigStr = "";
  while (indexOf == -1 && indexCount < str.length) {
    indexOf = vowels.indexOf(str[indexCount]);
    indexCount++;
  }
  if (indexCount == 1) {
    pigStr = str + "way";
  } else {
    pigStr = str.substr(indexCount - 1) + str.substr(0, indexCount - 1) + "ay";
  }
  return pigStr;
}

console.log(translatePigLatin("program"));

//DNA Pairing
function pairElement(str) {
  var pairedElements = {A: "T", T: "A", C: "G", G: "C"};
  var splitElements = str.split("");
  var finalElements = [];
  for (var x = 0; x < splitElements.length; x++) {
    var workingPair = [];
    workingPair.push(splitElements[x]);
    workingPair.push(pairedElements[splitElements[x]]);
    finalElements.push(workingPair);
  }
  return finalElements;
}

console.log(pairElement("CTCTA"));

//Missing Letters
function fearNotLetter(str) {
  var missingLetter;
  for (var x = 0; x < str.length - 1; x++) {
    if (str.charCodeAt(x) + 1 != str.charCodeAt(x + 1)) {
      missingLetter = String.fromCharCode(str.charCodeAt(x) + 1);
    }
  }
  return missingLetter;
}

console.log(fearNotLetter("abcdefghjklmno"));

//Boo Who
function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  if (bool === true || bool === false) {
    return true;
  } else {
    return false;
  }
}

console.log(booWho([1, 2, 3]));

//Sorted Union
function uniteUnique(arr) {
  var array = [];
  for (var x = 0; x < arguments.length; x++) {
    array.push(arguments[x]);
  }
  var flat = array.reduce((a, b) => a.concat(b), []);
  var flatUniq = flat.filter(function(item, pos) {
    return flat.indexOf(item) == pos; });
  return flatUniq;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

//Convert HTML Entities
function convertHTML(str) {
  // &colon;&rpar;
  function replacer(match) {
    var entities = {"&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&apos;"}
    return entities[match];
  }
  var newStr = str.replace(/[&<>"']/g, replacer);
  return newStr;
}

convertHTML("Hamburgers < Pizza < Tacos");

//spinal tap case
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  var str2 = str.split(/\s|_|(?=[A-Z])/g).join("-");
  function replacer(match) {
      return match.toLowerCase();
  }
  var newStr = str2.replace(/[A-Z]/g, replacer);
  return newStr;
}

console.log(spinalCase('AllThe-small Things'));

//spinal tap case v2
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  var newStr = str.split(/\s|_|(?=[A-Z])/g).join("-").toLowerCase();
  return newStr;
}

console.log(spinalCase('AllThe-small Things'));

//Sum Odd Fibonacci Numbers
function sumFibs(num) {
  var fibOdds = 0;
  var a = 0, b = 1, f = 1;
  while (f <= num) {
      if (f % 2 > 0) {
        fibOdds += f;
      }
      f = a + b;
      a = b;
      b = f;
      
    }
    return fibOdds;
}

sumFibs(4);

//sum all primes
function sumPrimes(num) {
  var primesArray = [];
  var upperLimit = Math.sqrt(num);
  var primesOutput = [];
  //My attempt at the Sieve of Eratosthenes
  //I am not a math wizard lol
  for (var i = 0; i <= num; i++) {
    primesArray.push(true);
  }

  for (var j = 2; j <= upperLimit; j++) {
    if (primesArray[j]) {
      for (var k = j * j; k < num; k += j) {
        primesArray[k] = false;
      }
    }
  }
  
  for (var l = 2; l <= num; l++) {
    if (primesArray[l]) {
      primesOutput.push(l);
    }
  }
  if (num % 2 == 0) {
    primesOutput.pop();
  }
  console.log(primesOutput)
  return primesOutput.reduce(function(a, b) {return a + b}, 0);
}

console.log(sumPrimes(100));

//Smallest Common Multiple of a range of numbers
//Using Euclidean Algorithm
function smallestCommons(arr) {
  var workArr = [];
  for (var x = Math.min(arr[0], arr[1]); x <= Math.max(arr[0], arr[1]); x++) {
    workArr.push(x);
  }
  //Euclidean Algorithm maybe... Math isn't my thing
  function gcd(a, b) {
      return !b ? a : gcd(b, a % b);
  }
  
  function lcm(a, b) {
      return (a * b) / gcd(a, b);   
  }

  var smallestCommon = workArr[0];
  workArr.forEach(function(n) {
    smallestCommon = lcm(smallestCommon, n);
    console.log(smallestCommon)
  });

  return smallestCommon;
}

console.log(smallestCommons([23,18]));

//Finders Keepers
function findElement(arr, func) {
  var num;
  for (var x = 0; x < arr.length; x++) {
    if (func(arr[x])) {
      num = arr[x];
      break;
    }
  }
  return num;
}

console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }));

//Drop It
function dropElements(arr, func) {
  // Drop them elements.
  var droppedArr = [];
  for (var x = 0; x < arr.length; x++) {
    if (func(arr[x])) {
      droppedArr = arr.slice(x);
      break;
    }
  }
  return droppedArr;
}

console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));

//steamroller (flatten a nested array)
function steamrollArray(arr) {
  // I'm a steamroller, baby
  var flatArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatArr = flatArr.concat(steamrollArray(arr[i]));
    } else {
      flatArr.push(arr[i]);
    }
  }
  return flatArr;
}

console.log(steamrollArray([1, {}, [3, [[4]]]]));
