// 1) Sum Zero
let array = [1, 2, 3, -2]

let value = "False"
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (i !== j) {
      if (array[i] + array[j] === 0) {
        value = "True"
      } 
    }
  }
}
//console.log(value)
// The runtime of addToZero is O(n^2) – square complexity. 
// space complexity grows proportionally to the square of the input size.


// 2) Unique Characters
function hasUniqueChars(word) {
    let uniqueChars = new Set([])
    for (let i = 0; i < word.length; i++) {
      uniqueChars.add(word[i])
    }
    return uniqueChars.size === word.length
    
  }
hasUniqueChars("Monday");
// -> True
hasUniqueChars("Moonday");
// -> False
// The runtime of hasUniqueChars is O(n^2) – square complexity 
// space complexity grows proportionally to the square of the input size.


// 3) Pangram Sentence
function isPangram(string){
    let stringArr = string.toLowerCase();
    let alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < alphabets.length; i++) {
      if(stringArr.indexOf(alphabets[i]) < 0){
        return false;
      }
    }
    return true;
  }
  
isPangram("The quick brown fox jumps over the lazy dog!");
// -> True
  isPangram("I like cats, but not mice");
// -> False
// The runtime of isPangram is O(n) – linear complexity. 
// – takes space directly proportional to the input size.



// 4) Longest Word
function findLongestWord(arr) {
    let len = 0
    for (let i = 0; i < arr.length; i++) {
      if( arr[i].length > len) {
        len = arr[i].length
      }
    }
    return len
  }

findLongestWord(["hi", "hello"]);
// -> 5
// The runtime of findLongestWord is O(n)– linear complexity. 
// – takes space directly proportional to the input size.