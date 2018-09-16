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

function moveEnemies() {
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
  $("#restart").hide();
  fighterSelected = false;
  enemySelected = false;
  enemiesDefeated = 0;
  gameOver = false;
  fighter = {};
  enemy = {};
}

$(document).ready(function() {
  $("#restart").hide();
  $("#selectEnemy").hide();

  $("#symbioteImage").on("click", function() {
    console.log("Symbiote Suit has been selected");
    if (fighterSelected == false) {
      $("#gameMessage").empty();
      initializeFighter(symbiote);
      fighterSelected = true;
      $("#symbioteImage")
        .removeClass("col-md-3 availableFighter")
        .addClass("fighter");
      $("#fighter").append(this);
      moveEnemies();
      $("#selectEnemy").show();
      $("#selectFighter").hide();
    } else if (fighterSelected == true && enemySelected == false) {
      if ($("#symbioteImage").hasClass("availableEnemies")) {
        $("#gameMessage").empty();
        initializeEnemy(symbiote);
        enemySelected = true;
        $("#symbioteImage")
          .removeClass("col-md-3 availableEnemies")
          .addClass("enemyCharacter");
        $("#enemy").append(this);
      }
    }
  });

  $("#spidermanImage").on("click", function() {
    console.log("Spider-Man has been selected");
    if (fighterSelected == false) {
      $("#gameMessage").empty();
      initializeFighter(spiderman);
      fighterSelected = true;
      $("#spidermanImage")
        .removeClass("col-md-3 availableFighter")
        .addClass("fighter");
      $("#fighter").append(this);
      moveEnemies();
      $("#selectEnemy").show();
      $("#selectFighter").hide();
    } else if (fighterSelected == true && enemySelected == false) {
      if ($("#spidermanImage").hasClass("availableEnemies")) {
        $("#gameMessage").empty();
        initializeEnemy(spiderman);
        enemySelected = true;
        $("#spidermanImage")
          .removeClass("col-md-3 availableEnemies")
          .addClass("enemyCharacter");
        $("#enemy").append(this);
      }
    }
  });

  $("#carnageImage").on("click", function() {
    console.log("Carnage has been selected");
    if (fighterSelected == false) {
      $("#gameMessage").empty();
      initializeFighter(carnage);
      fighterSelected = true;
      $("#carnageImage")
        .removeClass("col-md-3 availableFighter")
        .addClass("fighter");
      $("#fighter").append(this);
      moveEnemies();
      $("#selectEnemy").show();
      $("#selectFighter").hide();
    } else if (fighterSelected == true && enemySelected == false) {
      if ($("#carnageImage").hasClass("availableEnemies")) {
        $("#gameMessage").empty();
        initializeEnemy(carnage);
        enemySelected = true;
        $("#carnageImage")
          .removeClass("col-md-3 availableEnemies")
          .addClass("enemyCharacter");
        $("#enemy").append(this);
      }
    }
  });

  $("#venomImage").on("click", function() {
    console.log("Venom has been selected");
    if (fighterSelected == false) {
      $("#gameMessage").empty();
      initializeFighter(venom);
      fighterSelected = true;
      $("#venomImage")
        .removeClass("col-md-3 availableFighter")
        .addClass("fighter");
      $("#fighter").append(this);
      moveEnemies();
      $("#selectEnemy").show();
      $("#selectFighter").hide();
    } else if (fighterSelected == true && enemySelected == false) {
      if ($("#venomImage").hasClass("availableEnemies")) {
        $("#gameMessage").empty();
        initializeEnemy(venom);
        enemySelected = true;
        $("#venomImage")
          .removeClass("col-md-3 availableEnemies")
          .addClass("enemyCharacter");
        $("#enemy").append(this);
      }
    }
  });
});
