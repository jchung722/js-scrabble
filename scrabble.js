'use strict';
var prompt = require('prompt');

prompt.start();

prompt.get(['word'], wordEntry);

var letters = {
  "AEIOULNRST": 1,
  "DG": 2,
  "BCMP": 3,
  "FHVWY": 4,
  "K": 5,
  "JX": 8,
  "QZ": 10
};

var Scrabble = function() {
  this.score = function wordEntry(err, result) {
    var total = 0;
    var word = result.word.toUpperCase();
    for (var i = 0; i < word.length; i++) {
      for (var group in letters) {
        if (group.includes(word[i])) {
          total += letters[group];
          return total;
        }
      }
    }
  };

  Scrabble.score();
  // this.highestScoreFrom = function (arrayOfWords) {
  //
  // }
};

// YOUR CODE HERE
// Scrabble.prototype.helloWorld = function() {
//   return 'hello world!';
// };
//
// module.exports = Scrabble;
