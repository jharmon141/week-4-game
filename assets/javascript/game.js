//character objects
var luke = {hp: 100, attack: 5};
var obiWan = {hp: 120, attack: 8};
var darthMaul = {hp: 180, attack: 25};
var darthSid = {hp: 150, attack: 15};

//set variables

var canChooseCharacter = true;
var canChooseDefender = false;
var canAttack = false;
var yourCharacter = "";
var yourCharacterAttack;
var defender = "";
var gameOver = false;
var defeatedEnemy = false;

$(document).ready(function() {

    //set functions

    //click div to choose character and move other characters to second row
    //change class of characters not clicked resulting in changed css
    $('#Obi-Wan, #Luke, #DarthSid, #DarthMaul').click(function() {
        if (this.id == 'Obi-Wan' && canChooseCharacter) {
            $('#Luke, #DarthSid, #DarthMaul').toggleClass('character, enemy').prependTo('#enemyrow');
            yourCharacterAttack = obiWan.attack;
            canChooseCharacter = false;
            canChooseDefender = true;
            yourCharacter = "Obi-Wan";
        } else if (this.id == 'Luke' && canChooseCharacter) {
            $('#Obi-Wan, #DarthSid, #DarthMaul').toggleClass('character, enemy').prependTo('#enemyrow');
            yourCharacterAttack = luke.attack;
            canChooseCharacter = false;
            canChooseDefender = true;
            yourCharacter = "Luke";
        } else if (this.id == 'DarthSid' && canChooseCharacter) {
            $('#Luke, #Obi-Wan, #DarthMaul').toggleClass('character, enemy').prependTo('#enemyrow');
            yourCharacterAttack = darthSid.attack;
            canChooseCharacter = false;
            canChooseDefender = true;
            yourCharacter = "Darth Sidious";
        } else if (this.id == 'DarthMaul' && canChooseCharacter) {
            $('#Luke, #DarthSid, #Obi-Wan').toggleClass('character, enemy').prependTo('#enemyrow');
            yourCharacterAttack = darthMaul.attack;
            canChooseCharacter = false;
            canChooseDefender = true;
            yourCharacter = "Darth Maul";
        }
    });

    //click defender div to move it to third row and change it's css class
    $('#Obi-Wan, #Luke, #DarthSid, #DarthMaul').click(function() {
        if (this.id == "Obi-Wan" && canChooseDefender && yourCharacter !== "Obi-Wan") {
            $('#Obi-Wan').toggleClass('enemy, defender').prependTo('#defenderRow');
            canChooseDefender = false;
            canAttack = true;
            defender = "Obi-Wan";
            $("#gamelogA").empty();
        } else if (this.id == "Luke" && canChooseDefender && yourCharacter !== "Luke") {
            $('#Luke').toggleClass('enemy, defender').prependTo('#defenderRow');
            canChooseDefender = false;
            canAttack = true;
            defender = "Luke";
            $("#gamelogA").empty();
        } else if (this.id == "DarthSid" && canChooseDefender && yourCharacter !== "Darth Sidious") {
            $('#DarthSid').toggleClass('enemy, defender').prependTo('#defenderRow');
            canChooseDefender = false;
            canAttack = true;
            defender = "Darth Sidious";
            $("#gamelogA").empty();
        } else if (this.id == "DarthMaul" && canChooseDefender && yourCharacter !== "Darth Maul") {
            $('#DarthMaul').toggleClass('enemy, defender').prependTo('#defenderRow');
            canChooseDefender = false;
            canAttack = true;
            defender = "Darth Maul";
            $("#gamelogA").empty();
        }
    });

    //click attack button to decrease enemy hp and your character hp and display results
    $('#attack').click(function(){
      if (defender === "Obi-Wan" && canAttack) {
        $("#gamelogA").text("You attacked " + defender + " for " + yourCharacterAttack + " damage");
        $("#gamelogB").text(defender + " attacked back for " + obiWan.attack + " damage");
        obiWan.hp -= yourCharacterAttack;
        yourCharacterAttack *= 2;
        $("#obiwandamage").text(obiWan.hp);
        if (yourCharacter === "Luke"){
          luke.hp -= obiWan.attack;
          $("#lukedamage").text(luke.hp);
          if (obiWan.hp <= 0){
            $('#Obi-Wan').hide()
            $("#gamelogA").text("You have defeated Obi-Wan");
            $("#gamelogB").empty();
            canChooseDefender = true;
            defeatedEnemy = true;
            canAttack = false;
            defender = "";
          }
        } else if (yourCharacter === "Darth Sidious"){
          darthSid.hp -= obiWan.attack;
          $("#darthsiddamage").text(darthSid.hp);
          if (obiWan.hp <= 0){
            $('#Obi-Wan').hide()
            $("#gamelogA").text("You have defeated Obi-Wan");
            $("#gamelogB").empty();
            canChooseDefender = true;
            defeatedEnemy = true;
            canAttack = false;
            defender = "";
          }
        } else if (yourCharacter === "Darth Maul"){
          darthMaul.hp -= obiWan.attack;
          $("#darthmaldamage").text(darthMaul.hp);
          if (obiWan.hp <= 0){
            $('#Obi-Wan').hide()
            $("#gamelogA").text("You have defeated Obi-Wan");
            $("#gamelogB").empty();
            canChooseDefender = true;
            defeatedEnemy = true;
            canAttack = false;
            defender = "";
          }
        }
      } else if (defender === "Luke" && canAttack) {
        $("#gamelogA").text("You attacked " + defender + " for " + yourCharacterAttack + " damage");
        $("#gamelogB").text(defender + " attacked back for " + luke.attack + " damage");
        luke.hp -= yourCharacterAttack;
        yourCharacterAttack *= 2;
        $("#lukedamage").text(luke.hp);
        if (yourCharacter === "Obi-Wan"){
          obiWan.hp -= luke.attack;
          $("#obiwandamage").text(obiWan.hp);
          if (luke.hp <= 0){
            $('#Luke').hide()
            $("#gamelogA").text("You have defeated Luke Skywalker");
            $("#gamelogB").empty();
            canChooseDefender = true;
            defeatedEnemy = true;
            canAttack = false;
            defender = "";
          }
        } else if (yourCharacter === "Darth Sidious"){
          darthSid.hp -= luke.attack;
          $("#darthsiddamage").text(darthSid.hp);
          if (luke.hp <= 0){
            $('#Luke').hide()
            $("#gamelogA").text("You have defeated Luke Skywalker");
            $("#gamelogB").empty();
            canChooseDefender = true;
            defeatedEnemy = true;
            canAttack = false;
            defender = "";
          }
        } else if (yourCharacter === "Darth Maul"){
          darthMaul.hp -= luke.attack;
          $("#darthmaldamage").text(darthMaul.hp);
          if (luke.hp <= 0){
            $('#Luke').hide()
            $("#gamelogA").text("You have defeated Luke Skywalker");
            $("#gamelogB").empty();
            canChooseDefender = true;
            defeatedEnemy = true;
            canAttack = false;
            defender = "";
          }
        }
      } else if (defender === "Darth Sidious" && canAttack) {
        $("#gamelogA").text("You attacked " + defender + " for " + yourCharacterAttack + " damage");
        $("#gamelogB").text(defender + " attacked back for " + darthSid.attack + " damage");
        darthSid.hp -= yourCharacterAttack;
        yourCharacterAttack *= 2;
        $("#darthsiddamage").text(darthSid.hp);
        if (yourCharacter === "Luke"){
          luke.hp -= darthSid.attack;
          $("#lukedamage").text(luke.hp);
          if (darthSid.hp <= 0){
            $('#DarthSid').hide()
            $("#gamelogA").text("You have defeated Darth Sidious");
            $("#gamelogB").empty();
            canChooseDefender = true;
            defeatedEnemy = true;
            canAttack = false;
            defender = "";
          }
        } else if (yourCharacter === "Obi-Wan"){
          obiWan.hp -= darthSid.attack;
          $("#obiwandamage").text(obiWan.hp);
          if (darthSid.hp <= 0){
            $('#DarthSid').hide()
            $("#gamelogA").text("You have defeated Darth Sidious");
            $("#gamelogB").empty();
            canChooseDefender = true;
            defeatedEnemy = true;
            canAttack = false;
            defender = "";
          }
        } else if (yourCharacter === "Darth Maul"){
          darthMaul.hp -= darthSid.attack;
          $("#darthmaldamage").text(darthMaul.hp);
          if (darthSid.hp <= 0){
            $('#DarthSid').hide()
            $("#gamelogA").text("You have defeated Darth Sidious");
            $("#gamelogB").empty();
            canChooseDefender = true;
            defeatedEnemy = true;
            canAttack = false;
            defender = "";
          }
        }
      } else if (defender === "Darth Maul" && canAttack) {
        $("#gamelogA").text("You attacked " + defender + " for " + yourCharacterAttack + " damage");
        $("#gamelogB").text(defender + " attacked back for " + darthMaul.attack + " damage");
        darthMaul.hp -= yourCharacterAttack;
        yourCharacterAttack *= 2;
        $("#darthmaldamage").text(darthMaul.hp);
        if (yourCharacter === "Luke"){
          luke.hp -= darthMaul.attack;
          $("#lukedamage").text(luke.hp);
          if (darthMaul.hp <= 0){
            $('#DarthMaul').hide()
            $("#gamelogA").text("You have defeated Darth Maul");
            $("#gamelogB").empty();
            canChooseDefender = true;
            defeatedEnemy = true;
            canAttack = false;
            defender = "";
          }
        } else if (yourCharacter === "Darth Sidious"){
          darthSid.hp -= darthMaul.attack;
          $("#darthsiddamage").text(darthSid.hp);
          if (darthMaul.hp <= 0){
            $('#DarthMaul').hide()
            $("#gamelogA").text("You have defeated Darth Maul");
            $("#gamelogB").empty();
            canChooseDefender = true;
            defeatedEnemy = true;
            canAttack = false;
            defender = "";
          }
        } else if (yourCharacter === "Obi-Wan"){
          obiWan.hp -= darthMaul.attack;
          $("#obiwandamage").text(obiWan.hp);
          if (darthMaul.hp <= 0){
            $('#DarthMaul').hide()
            $("#gamelogA").text("You have defeated Darth Maul");
            $("#gamelogB").empty();
            canChooseDefender = true;
            defeatedEnemy = true;
            canAttack = false;
            defender = "";
          }
        }
      }

      if (!canAttack && !defeatedEnemy) {
        $("#gamelogA").text("No enemy selected")
        $("#gamelogB").empty();
      }
    });

    //losing the game
    if (yourCharacter === "Luke" && luke.hp <= 0){
      $("#gamelogA").text("You have been defeated Luke Skywalker!");
      $("#gamelogB").empty();
      canChooseCharacter = false;
      canChooseDefender = false;
      canAttack = false;
      gameOver = true;
      defender = "";
    }
    if (yourCharacter === "Obi-Wan" && obiWan.hp <= 0){
      $("#gamelogA").text("You have been defeated Obi-Wan!");
      $("#gamelogB").empty();
      canChooseCharacter = false;
      canChooseDefender = false;
      canAttack = false;
      gameOver = true;
      defender = "";
    }
    if (yourCharacter === "Darth Sidious" && darthSid.hp <= 0){
      $("#gamelogA").text("You have been defeated Darth Sidious!");
      $("#gamelogB").empty();
      canChooseCharacter = false;
      canChooseDefender = false;
      canAttack = false;
      gameOver = true;
      defender = "";
    }
    if (yourCharacter === "Darth Maul" && darthMaul.hp <= 0){
      $("#gamelogA").text("You have been defeated Darth Maul!");
      $("#gamelogB").empty();
      canChooseCharacter = false;
      canChooseDefender = false;
      canAttack = false;
      gameOver = true;
      defender = "";
    }


    //reset game
  $('#reset').click(function(){
    $('#Obi-Wan, #Luke, #DarthSid, #DarthMaul').removeClass().show().prependTo('#characterrow');
    $('#Obi-Wan, #Luke, #DarthSid, #DarthMaul').addClass('col-md-2 character');
    canChooseCharacter = true;
    canChooseDefender = false;
    canAttack = false;
    yourCharacter = "";
    yourCharacterAttack;
    defender = "";
    gameOver = false;
    $("#gamelogA").empty();
    $("#gamelogB").empty();
    $("#obiwandamage").text("120");
    $("#lukedamage").text("100");
    $("#darthsiddamage").text("150");
    $("#darthmaldamage").text("180");
    luke.hp = 100;
    obiWan.hp = 120;
    darthSid.hp = 150;
    darthMaul.hp = 180;
  });
});
