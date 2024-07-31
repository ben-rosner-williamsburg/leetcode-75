/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
  let wordStr = ""
  let counterOne = 0
  let counterTwo = 0
  if (word1.length === word2.length) {
    for (letter in word1 || word2){
      wordStr += word1.charAt(counterOne)
      wordStr += word2.charAt(counterTwo)
      counterOne++
      counterTwo++
    }
  }
  else if (word1.length > word2.length) {
     for (letter in word1 || word2){
      wordStr += word1.charAt(counterOne)
      wordStr += word2.charAt(counterTwo)
      counterOne++
      counterTwo++
     }
     for(letter in word1){
      wordStr += word1.charAt(counterOne)
      counterOne++
     }
    }
    else if (word2.length > word1.length) {
      for (letter in  word2) {
      wordStr += word1.charAt(counterOne)
      wordStr += word2.charAt(counterTwo)
      counterOne++
      counterTwo++
     }
     for(letter in word2) {
      wordStr += word2.charAt(counterTwo)
      counterTwo++
     }
    }
      return wordStr
};