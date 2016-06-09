//freecodecamp's check for palindrome function
function palindrome(str) {
  // Good luck!
  var isPalindrome = true;								          //will only change to false when mismatch occurs
  var lowerStr = str.toLowerCase();					      	//convert all letters to lower case
  var alphaNumStr = lowerStr.match(/[a-z0-9]/gi);		//will strip out any characters other than alphanumeric
  var forAlphaNum = alphaNumStr.slice(0);			    	//copy array, so I can reverse the original one
  alphaNumStr.reverse();							            	//reversing the initial array to test against the forAlphaNum copy
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
