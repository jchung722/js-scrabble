// 'use strict';
// var prompt = require('prompt');
//
// prompt.start();

// var Scrabble = prompt.get(['word'], function(err, result) {
//   this._word = result.word.toUpperCase();
// });

var letters = {
  "AEIOULNRST": 1,
  "DG": 2,
  "BCMP": 3,
  "FHVWY": 4,
  "K": 5,
  "JX": 8,
  "QZ": 10
};

var Scrabble = { //is it possible to initialize this as a constructor? function()

};

Scrabble.score = function(entry) {
  var total = 0;
  var word = entry.toUpperCase();
  if (word.length == 7) {
    total = 50;
  }
  for (var i = 0; i < word.length; i++) {
    for (var group in letters) {
      if (group.includes(word[i])) {
        total += letters[group];
      }
    }
  }
  return total;
};

Scrabble.highestScoreFrom = function(arrayOfWords) {
  var bestScore = 0;
  var bestWord = "";
  arrayOfWords.forEach(function(word) {
    if (Scrabble.score(word) > bestScore) {
      bestScore = Scrabble.score(word);
      bestWord = word;
    } else if (Scrabble.score(word) == bestScore) {
      if (bestWord.length > word.length && bestWord.length != 7) {
        bestWord = word;
      } else if (word.length > bestWord.length && word.length == 7) {
        bestWord = word;
      }
    }
  });
  return bestWord;
};

var Player = function(name) {
  this._name = name;
  this.plays = [];
};

Player.prototype = Scrabble;

Player.prototype.play = function(word) {
  if (this.hasWon() === true) {
    return false;
  }
  this.plays.push(word);
};

Player.prototype.totalScore = function() {
  var totalScore = 0;
  this.plays.forEach(function(word){
    totalScore += Scrabble.score(word);
  });
  return totalScore;
};

Player.prototype.hasWon = function() {
  if (this.totalScore() >= 100) {
    return true;
  } else {
    return false;
  }
};

jess = new Player("Jessica");
jess.play("hi");
jess.play("another");
console.log(jess);
console.log(jess.totalScore());
console.log(jess.hasWon());


console.log(Scrabble.score("hi")); //5
console.log(Scrabble.score("elevens")); //60
console.log(Scrabble.highestScoreFrom(["hello", "blah", "test", "elevens"])); //should return "elevens"
console.log(Scrabble.highestScoreFrom(["hi", "dig"])); //should return "hi"
console.log(Scrabble.highestScoreFrom(["lost", "tons"])); //should return "lost"
console.log(Scrabble.highestScoreFrom(["AEIOULD", "QZQZQJ"])); //should return "AEIOULD"

// YOUR CODE HERE
// Scrabble.prototype.helloWorld = function() {
//   return 'hello world!';
// };
//
// module.exports = Scrabble;
