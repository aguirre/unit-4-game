var fighterSelected = false;
var enemySelected = false;
var enemiesDefeated = 0;
var fighter = {};
var enemy = {};
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

function initializeFighter(selectedFighter) {
  fighter.name = selectedFighter.name;
  fighter.health = selectedFighter.health;
  fighter.baseAttack = selectedFighter.baseAttack;
  fighter.attack = selectedFighter.attack;
}

function initializeEnemy(selectedEnemy) {
  enemy.name = selectedEnemy.name;
  enemy.health = selectedEnemy.health;
  enemy.baseAttack = selectedEnemy.baseAttack;
  enemy.attack = selectedEnemy.attack;
}

function moveEnemy() {
  $(".availableFighter")
    .removeClass("availableFighter")
    .addClass("availableEnemies");
  $("#enemyRow").append($(".availableEnemies"));
}

function resetGame() {
  $("#symbioteImage")
    .children(".health")
    .html(symbiote.health);
  $("#spidermanImage")
    .children(".health")
    .html(spiderman.health);
  $("#carnageImage")
    .children(".health")
    .html(carnage.health);
  $("#venomImage")
    .children(".health")
    .html(venom.health);
  $(".character")
    .removeClass("fighter availableEnemies enemyCharacter")
    .addClass("availableFighter");
  var available = $(".availableFighter").show();
  $("#fighterRow").html(available);
  $("#gameMessage").empty();
  $("#fighterRow").show();
  $("#gameplayRow").hide();
  $("#messageRow").hide();
  $("#restartRow").hide();
  $("#enemyRow").hide();
  fighterSelected = false;
  enemySelected = false;
  enemiesDefeated = 0;
  gameOver = false;
  fighter = {};
  enemy = {};
}

$(document).ready(function() {
  $("#symbioteImage").on("click", function() {
    console.log("Symbiote Suit has been selected");
    if (fighterSelected == false) {
      $("#gameMessage").empty();
      initializeFighter(symbiote);
      fighterSelected = true;
    }
  });
});
