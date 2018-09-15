var fighterSelected = false;
var enemySelected = false;
var fighter = {};
var enemy = {};
var enemiesDefeated = 0;
gameOver = false;

var symbiote = {
  name: "Symbiote Suit",
  health: 120,
  baseAttack: 8,
  attack: 8
};

var spiderman = {
  name: "Spider-Man",
  health: 100,
  baseAttack: 5,
  attack: 5
};

var carnage = {
  name: "Carnage",
  health: 150,
  baseAttack: 20,
  attack: 20
};

var venom = {
  name: "Venom",
  health: 180,
  baseAttack: 25,
  attack: 25
};

fuction initializeFighter(selectedFighter)