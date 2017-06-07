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

//
