var inquirer = require("inquirer");

function game(letter) {
	this.letter = letter;

	var guessesRemaining = 10;
	var guessedLetters = [];

	this.startGame = function() {
		if(this.guessedLetters.length > 0) {
			this.guessedLetters = [];
		}

		inquirer.prompt([
			{
				name: "play",
				type: "confirm",
				message: "Would you like to play a game of hangman?"

			},

		]).then(function(answer) {
			if(answer.play) {
				this.newGame();
			}
			else {
				console.log("Ok, maybe some other time");
			}
		});
	}

	this.newGame = function() {
		if (this.guessesRemaining === 10) {
			console.log("Let's begin");
			console.log("******************");
		}

	}

	this.wordToGuess = function() {
		var wordList = ["javascript", "node", "debug", "firebase", "constructor", "jquery"];
		var newWordToGuess = wordList[Math.floor(Math.random() * wordList.length)];
	}

	this.showGuesses = function() {
		guessedLetters.push(this.letter);
		console.log("Letters guessed so far: " + guessedLetters);
	}
};

game();