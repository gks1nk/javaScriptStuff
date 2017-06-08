//Validate US Telephone Numbers
//Here is the basic correct answer, My solution is messy in comparison
function telephoneCheck(str) {
   var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
   return regex.test(str);
}
telephoneCheck("555-555-5555");

//My version
function telephoneCheck(str) {
  // Good luck!
  var illegalChars = /[^0-9\-\(\)\s]/g;
  var testCase = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  if (illegalChars.test(str)) {
    return false;
  } else {
    var numDigits = str.replace(/\D/g, "").length;
    if (numDigits > 11 || numDigits < 10) {
      return false;
    } else {
      if (testCase.test(str)) {
        return true;
      } else {
        return false;
      }
    }
  }
}



telephoneCheck("555-555-5555");

//symmetric difference
function sym(args) {
  var theArguments = [].slice.call(arguments);
  function symDif (array1, array2) {
    var difsArray1 = array1.filter(function(x) {
      if (array2.indexOf(x) == -1) {
        return x;
      }
    });
    var difsArray2 = array2.filter(function(y) {
      if (array1.indexOf(y) == -1) {
        return y;
      }
    });
    return difsArray1.concat(difsArray2);
  }
  var symDifArguments = theArguments.reduce(symDif);
  var uniqueSymDifs = symDifArguments.filter(function(item, pos) {
    return symDifArguments.indexOf(item) == pos;
  });
  return uniqueSymDifs;
}

console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]));
