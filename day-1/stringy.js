// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
function length(string) {
  // YOUR CODE BELOW HERE //
return string.length;
  // YOUR CODE ABOVE HERE //
}

 
/*
I:function with string valued peremeter
O:return string forced lowerCased
C:
E:
*/
function toLowerCase(inputString){
return inputString.toLowerCase();
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
/*
I:string
O:new string forced upperCase 
C:always string
E:
*/
function toUpperCase(string) {
return string.toUpperCase();
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
/*
I: string
O: string with dashes replacing spaces and converted to lowerCase
C:should covert all spaces to dashes 
e: empty string
*/
function toDashCase(string) {
  // create  variable to convert sting tolowerCase
var lowerCaseString = string.toLowerCase();
// replace spaces with dashes
// all occurrences
var dashCaseString = lowerCaseString.replace(/\s+/g, "-");
return dashCaseString;
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
// Check if the input string is empty. An empty string cannot begin with any character.
//Get the first character of the string and convert it to lowercase
// Convert the input character to lowercase for case-insensitive comparison. 

function beginsWith(string, char) {
  // YOUR CODE BELOW HERE //
 
 if (string.length === 0) {
  return false;
}

 var firstCharOfString = string[0].toLowerCase();
  var lowerCaseChar = char.toLowerCase();
   return firstCharOfString === lowerCaseChar;

   // YOUR CODE ABOVE HERE //
 }
  


/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
  // YOUR CODE BELOW HERE //
// Convert both the string and the character to lowercase to make the comparison case-insensitive.
  // Access the last character of the string.
  // Compare the lowercase versions of the last character of the string and the input character.
  return string.toLowerCase()[string.length - 1] === char.toLowerCase();
  // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
  // YOUR CODE BELOW HERE //
return stringOne + stringTwo;
  // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
  // YOUR CODE BELOW HERE //
  var args = Array.from(arguments);
return args.join("");
  // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
  // YOUR CODE BELOW HERE //
  if (stringOne.length > stringTwo.length) {
    return stringOne;
  } else {
    return stringTwo;
  }
  // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first string is higher in alphabetical order (meaning earlier in the alphabet) than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
    
 function sortAscending(stringOne, stringTwo) {
  // YOUR CODE BELOW HERE // 
    if (stringOne === stringTwo) {
      return 0;
    } else if (stringOne < stringTwo) {
      return 1;
    } else {
      return -1;
    }
 
  // YOUR CODE ABOVE HERE //
 }

/**
 * Given two Strings, return 1 if the first is lower in alphabetical order (meaning later in the alphabet) than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
  // YOUR CODE BELOW HERE //
    if (stringOne === stringTwo) {
      return 0;
    } else if (stringOne > stringTwo) {
      return 1; 
    } else {
      return -1;
    }
  
  // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.length = length;
  module.exports.toLowerCase = toLowerCase;
  module.exports.toUpperCase = toUpperCase;
  module.exports.toDashCase = toDashCase;
  module.exports.beginsWith = beginsWith;
  module.exports.endsWith = endsWith;
  module.exports.concat = concat;
  module.exports.join = join;
  module.exports.longest = longest;
  module.exports.sortAscending = sortAscending;
  module.exports.sortDescending = sortDescending;
}


