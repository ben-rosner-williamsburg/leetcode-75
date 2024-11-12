/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let word = s.split(" ")
  let resultArr = [];
     for (let i = word.length - 1; i >= 0; i--) {
       if (word[i]) {
           resultArr.push(word[i]);
       }
     }
     return resultArr.join(' ');
};