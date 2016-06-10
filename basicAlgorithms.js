//freecodecamp's check for palindrome function
function palindrome(str) {
  // Good luck!
  var isPalindrome = true;						//will only change to false when mismatch occurs
  var lowerStr = str.toLowerCase();					//convert all letters to lower case
  var alphaNumStr = lowerStr.match(/[a-z0-9]/gi);			//will strip out any characters other than alphanumeric
  var forAlphaNum = alphaNumStr.slice(0);			    	//copy array, so I can reverse the original one
  alphaNumStr.reverse();						//reversing the initial array to test against the forAlphaNum copy
  //for loop to check for palindrome, each array element should match when comparing alphaNumStr and forAlphaNum
  for (var i = 0; i < alphaNumStr.length; i++) {
  	if (alphaNumStr[i] != forAlphaNum[i]) {
  		isPalindrome = false;
  	}
  }
  return isPalindrome;
}

//freecodecamp's longest word in a string of words function
function findLongestWord(str) {
	var strArray = str.split(' ');					//split the str by " "
	var longestWord = 0;
	//for loop to run through the strArray and check the lengths of the elements against longestWord
	for (var i = 0; i < strArray.length; i++) {
		if (strArray[i].length >= longestWord) {
			longestWord = strArray[i].length;
		}
	}
  return longestWord;
}

//freecodecamp's convert strings of words into title format, 
//which is the first letter of each word is capitalized and the rest are lowercase
function titleCase(str) {
	var strArray = str.split(' ');				//spilt the str up by ' '
	var tempStr = "";
	var finalStr = "";
	//for loop to run through each element in strArray and alter them, adding them to finalStr
	for (i = 0; i < strArray.length; i++) {
		tempStr = strArray[i].toLowerCase();		//convert whole string to lowerCase
		if (i === 0) {								//the first word does not need a space in front of it
			//making the first character uppercase and adding in all character, except the first one
			finalStr = finalStr + tempStr.charAt(0).toUpperCase() + tempStr.slice(1);
		} else {
		finalStr = finalStr + " " + tempStr.charAt(0).toUpperCase() + tempStr.slice(1);
		}
	}
  return finalStr;
}

//freecodecamp's function to return an array of the largest number in each sub array of an array of arrays
function largestOfFour(arr) {
  // You can do this!
	var largestOfArrays = [];
	for (i = 0; i < arr.length; i++) {
		largestOfArrays.push(Math.max.apply(null, arr[i]));
	}
  return largestOfArrays;
}
//test data for largestOfFour()
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//freecodecamp checking to see if a strig ends with the string passed in as target
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  if (str.substr(-target.length) == target) {
  	return true;
  } else {
  	return false;
  }
}
//test example for confirmEnding()
confirmEnding("Bastian", "ian");
