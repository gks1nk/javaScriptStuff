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
