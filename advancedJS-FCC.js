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


//EXACT CHANGE
function checkCashRegister(price, cash, cid) {
  //function to calculate change needed
  function calcChangeAmount(price, cash) {
    var change = cash - price;
    return parseFloat(change.toFixed(2));
  }

  //function to total amount cash in drawer
  //had to modify to check that the proper bills/coins were available to make change
  function calcCashInDrawer(cid) {
    var cashTotal = 0;
    cid.forEach(function (element) {cashTotal += element[1];});
    return parseFloat(cashTotal.toFixed(2));
  }
  
  //function to calculate change based on what is in drawer and amount needed
  //had to modify to take amount of bills/coins into consideration for change
  function calcChangeNeeded(cid, change) {
    var changeInCash = [];
    var cashValues = [0.01, 0.05, 0.10, 0.25, 1.00, 5.00, 10.00, 20.00, 100.00];
    for (var x = cashValues.length - 1; x >= 0; x--) {
      var typeOfCash = [];
      var typeOfCashAmount = cid[x][1];
      while (change >= cashValues[x] && typeOfCashAmount >= cashValues[x]) {
        if (typeOfCash.length === 0) {
          typeOfCash.push(cid[x][0]);
          typeOfCash.push(0);
        }
        typeOfCashAmount -= cashValues[x];
        typeOfCashAmount = parseFloat(typeOfCashAmount.toFixed(2));
        change -= cashValues[x];
        change = parseFloat(change.toFixed(2));
        typeOfCash[1] += cashValues[x];
        typeOfCash[1] = parseFloat(typeOfCash[1].toFixed(2));
      }
      if (typeOfCash.length > 0) {
        changeInCash.push(typeOfCash);
      }
    }
    return changeInCash;
  }
  
  var changeAmount = calcChangeAmount(price, cash);
  var cashInDrawer = calcCashInDrawer(cid);
  var changeNeeded = calcChangeNeeded(cid, changeAmount);
  if (changeAmount > cashInDrawer) {
    return "Insufficient Funds";
  } else if (changeAmount > calcCashInDrawer(changeNeeded)) {
    return "Insufficient Funds";
  } else if (changeAmount == cashInDrawer) {
    return "Closed";
  } else {
    return changeNeeded;
  }
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

console.log(checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));
//END OF EXACT CHANGE

//Inventory Update
function scanInventory(item, curInv) {
  for (j = 0; j < curInv.length; j++) {
    if (item === curInv[j][1]) 
      return true;
  }
  return false;
}

function updateItem(itemArr, curInv) {
  for (k = 0; k < curInv.length; k++) {
    if (itemArr[1] === curInv[k][1])
      curInv[k][0] += itemArr[0];
  }
  return curInv;
}

function insertNewItem(itemArr, curInv) {
  var insertIndex = 0;
  for (l = 0; l < curInv.length; l++) {
    if (itemArr[1].localeCompare(curInv[l][1]) == -1) {
      insertIndex = l;
      break;
    }
    insertIndex = l + 1;
  }
  curInv.splice(insertIndex, 0, itemArr);
  return curInv;
}

function updateInventory(arr1, arr2) {
  /* Stuff I think I need
  -function to scan inventory for items
  -function to update existing item total
  -function to add new item to the inventory
  -Function to alphabetically sort the inventory by item name
  */
    // All inventory must be accounted for or you're fired!
  var newInv = arr1;
  for (i = 0; i < arr2.length; i++) {
    if (scanInventory(arr2[i][1], arr1)) {
      newInv = updateItem(arr2[i], arr1);
    } else {
      console.log("Didn't Find " + arr2[i][1]);
      newInv = insertNewItem(arr2[i], arr1);
    }
  }
    return newInv;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];
//var itemArr = [67, "Bowling Ball"]
console.log(updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]));
//console.log(scanInventory("Butter", curInv));
//console.log(updateItem(itemArr, curInv));
//console.log(insertNewItem(itemArr, curInv));


//NO REPEATS PLEASE
//Utilizing Heap's Algorithm

function permAlone(str) {
  //Using Heap's Algorithm
  function permute(str) {
    var permutedArr = [];
    var list = str.split('');
  
	  function swap(n,m) {
		  tmp = list[n]
		  list[n] = list[m]
		  list[m] = tmp
	  }

	  function generate(n) {
		  if (n==1) permutedArr.push(list.join(''))
		  else {
			  for (var i=0; i<n; i++) {
				  generate(n-1)
				  swap(n%2 ? 0 : i, n-1)
			  }
		  }
	  }
	  generate(list.length);
    return permutedArr;
  }
  
  var resultsArr = permute(str);
  var regex = /([A-Za-z])\1/;
  var total = resultsArr.reduce(function(sum, value) {
    if (!regex.test(value)) sum++;
    return sum;
  }, 0)
  return total;
}

console.log(permAlone('aac'));

