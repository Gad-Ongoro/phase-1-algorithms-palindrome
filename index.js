function isPalindrome(word) {
  // Write your algorithm here
  const palindromeMatch = word.split('').reverse().join('');
  if (word === palindromeMatch) {
    return (true);
  } 
  else if (word !== palindromeMatch){
    return (false);
  }
}

/* 
  Add your pseudocode here
   Declare a function that takes a string as an argument when called
   Declare a variable, palindromeMatch, to store a reverse of the function argument; achieved by string methods(split(), reverse(), join())
   if (sting is equal to the palindromeMatch)
            return true;
   else if (string is not equal to palindromeMatch)
            return false;
*/

/*
  Add written explanation of your solution here
  A function, isPalindrome, is declared an initialized with a parameter to store the value of a passed string when called
  A variable, palindromeMatch, is declared to store a reverse of the function argument; achieved by string methods(
    split() ~ converts the string into an array of characters
    reverse() ~ reverses the array
    join()) ~ converts the array back to a string of characters
  An if condition is used to check truthy or falsy comparison of the string and the palindromeMatch
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("level"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("civic"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("rotor"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("motor"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("noon"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("moon"));
}

module.exports = isPalindrome;
