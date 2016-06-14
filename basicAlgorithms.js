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

//freecodecamp repeating a string a number of times and returning a new string
function repeatStringNumTimes(str, num) {
  // repeat after me
  if (num > 0) {
  	return (new Array(num + 1)).join(str);
  } else {
  	return "";
  }
}
//test data for repeatStringNumTimes
repeatStringNumTimes("abc", 3);

//freecodecamp truncating string function
function truncateString(str, num) {
  // Clear out that junk in your trunk
  var sliceNum = num;					//establish variable to alter num
  if (num <= 3) {					//we want up to three characters to show at all times, this adds a buffer
  	sliceNum += 3;
  } else if (num >= str.length) {			//if num equals or exceeds the length of the str, we return the string
  	return str;
  }
  var truncStr = str.slice(0, sliceNum - 3) + "...";	//slicing based on sliceNum - 3, to make room for the "..."
  return truncStr;
}
//test data for truncateString
truncateString("A-tisket a-tasket A green and yellow basket", 11);

//freecodecamp function to break up array elements into smaller arrays, then return a 2-d array
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var chunkArr = [];				//setting up new, empty array to push() into
  var x = 0;					//the x counter is used for start position in array
  var y = size;					//the y counter is used for the end position in array
  while (x < arr.length) {			//looping while start position less than array length
  	chunkArr.push(arr.slice(x, y));		//slicing and pushing into new array
  	x += size;				//increment based on size
  	y += size;
  }
  return chunkArr;
}
//test data for chunkArrayInGroups
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);

//freecode camp function to slash off so many items form and array and return a new array of the remaining array elements
function slasher(arr, howMany) {
  // it doesn't always pay to be first
  var slashArr = arr.splice(0, howMany);
  return arr;
}
//test data fro slasher()
slasher([1, 2, 3], 9);

//freecodecamp function for mutations, it compares two strings, checking to see if all the letters of the second str are present in
//the first string, returns true or false based on the testing
function mutation(arr) {
	//convert the strings to lowercase for testing
	var testStr = arr[0].toLowerCase();
	var testVal = arr[1].toLowerCase();
	var result = 0;
	//for loop using indexOf to make the check, and charAt to get at the individual characters in testVal
	for (var i = 0; i < testVal.length; i++) {
		result = testStr.indexOf(testVal.charAt(i));
		if (result == -1) {
			return false;
		}
	}
  return true;
}
//test data for mutation function
mutation(["voodoo", "do"]) ;

//-----------------------------------------------------------------------------------
//freecodecamp bouncer function, i am to take an array and drop any 'falsy' values:
//false, "", null, undefined, 0, and NaN
//isFalsy function written to work with the .filter() method
function isFalsy(val) {
	if (typeof val === 'string') {			//testing for strings
		if (val === "") {			//if the string equals "", return false
			return false;			//all other strings are kept
		} else {
			return true;
		}
	}
	if (isNaN(val)) {				//since strings will test true in isNaN()
		return false;				//I run that test after testing for "" and other strings
	} else {					
		switch (val) {				//switch to test the remaining falsy cases
			case false:			//false, null, 0, undefined all return false
			case null:			//anything left at this point return true
			case 0:
			case undefined:
				return false;
			default:
				return true;
		}
	}
}
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var filteredArr = arr.filter(isFalsy);		//creating the filtered array using my isFalsy() function
  return filteredArr;
}

//test data for bouncer
bouncer([7, "ate", "", false, 9]) ;

//--------------------------------------------------------------------
//freecodecamp search and destroy function, taking an array with the first element a sub array, and filtering out 
//anything in the sub array that matches the other elements in the main array
function destroyer(arr) {
	var args = Array.prototype.slice.call(arguments); 	//converts the array into something normal to be worked with
  	args.splice(0, 1);					//splicing off the sub array, first element
  	return arr.filter(function(element) {			//running a filter with a function that tests the first sub array
    	return args.indexOf(element) === -1;			//against the additional elements in the original array
  	});
}
//test data for destroyer
destroyer([1, 2, 3, 1, 2, 3], 2, 3);

//-----------------------------------------------------------------
//freecodecamp function to return the index value, where a number can be inserted into a sorted array, while keeping the 
//array in ascended sorted order
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  var sortedArr = arr.sort(function(a, b) {return a - b;});			//simple sort via a - b for ascending
  var i = 0;
  while (num > sortedArr[i]) {							//loop until we find a value greater than target
  	i++									//this represents the index in the array to insert the number
  }
  return i;
}

getIndexToIns([5, 3, 20, 3], 5);

//---------------------------------------------------------------------
//freecodecamp simple ceasar's cipher function. all capital letters are shifted backwards 13 places
function rot13(str) { // LBH QVQ VG!
  var chk = 0;										//creating a variable to hold the unicode #
  var decodedStr = "";
  for (var i = 0; i < str.length; i++) {						//looping through the whole string
  	chk = str.charCodeAt(i);							//convert char to unicode number
  	if (chk >= 65 && chk <= 90) {							//check to make sure value is A-Z
  		if (chk + 13 > 90) {							//check to see if the shift goes past the Z
  			decodedStr += String.fromCharCode(65 + (chk + 13 - 91));	//wrap around to front of alphabet
  		} else {
  			decodedStr += String.fromCharCode(chk + 13);			//straight up shift
  		}
  	} else {
  		decodedStr += String.fromCharCode(chk);					//any other character is left the same, like spaces or punctuation
  	}
  }
  return decodedStr;
}
//test data for rot13
rot13("SERR CVMMN!");
