const gameConstructor = require("./game.js");

const game = new gameConstructor();

game.move("rock", "paper");
game.move("scissors", "scissors");
game.move("paper", "scissors");
game.move("paper", "rock");

const savaGame = function (currentGame) {
  return {
    prototype: Object.getPrototypeOf(currentGame),
    properties: JSON.stringify(currentGame),
  };
};

const loadGame = function (savedGame) {
  const retrievedGame = Object.create(savedGame.prototype);
  const state = JSON.parse(savedGame.properties);
  Object.assign(retrievedGame, state);
  return retrievedGame;
};

const storedGame = savaGame(game);
const loadedGame = loadGame(storedGame);

loadedGame.move("paper", "scissors");
