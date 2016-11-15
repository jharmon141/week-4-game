$(document).ready(function() {
    //set variables
    canChooseCharacter = true;
    canChooseDefender = false;
    yourCharacter = "";
    defender = "";

    //set functions

    //click div to choose character and move other characters to second row
    //change class of characters not clicked resulting in changed css
    $('#Obi-Wan, #Luke, #DarthSid, #DarthMaul').click(function() {
        if (this.id == 'Obi-Wan' && canChooseCharacter) {
            $('#Luke, #DarthSid, #DarthMaul').toggleClass('character, enemy').prependTo('#enemyrow');
            canChooseCharacter = false;
            canChooseDefender = true;
            yourCharacter = "Obi-Wan";
        } else if (this.id == 'Luke' && canChooseCharacter) {
            $('#Obi-Wan, #DarthSid, #DarthMaul').toggleClass('character, enemy').prependTo('#enemyrow');
            canChooseCharacter = false;
            canChooseDefender = true;
            yourCharacter = "Luke";
        } else if (this.id == 'DarthSid' && canChooseCharacter) {
            $('#Luke, #Obi-Wan, #DarthMaul').toggleClass('character, enemy').prependTo('#enemyrow');
            canChooseCharacter = false;
            canChooseDefender = true;
            yourCharacter = "Darth Sidious";
        } else if (this.id == 'DarthMaul' && canChooseCharacter) {
            $('#Luke, #DarthSid, #Obi-Wan').toggleClass('character, enemy').prependTo('#enemyrow');
            canChooseCharacter = false;
            canChooseDefender = true;
            yourCharacter = "Darth Maul";
        }
    });

    //click defender div to move it to third row and change it's css class
    $('#Obi-Wan, #Luke, #DarthSid, #DarthMaul').click(function() {
        if ( this.id == "Obi-Wan" && canChooseDefender && yourCharacter != "Obi-Wan") {
            $('#Obi-Wan').toggleClass('enemy, defender').prependTo('#defenderRow');
            canChooseDefender = false;
            defender = "Obi-Wan";
        }
        if ( this.id == "Luke" && canChooseDefender && yourCharacter != "Luke") {
            $('#Luke').toggleClass('enemy, defender').prependTo('#defenderRow');
            canChooseDefender = false;
            defender = "Luke";
        }
        if ( this.id == "DarthSid" && canChooseDefender && yourCharacter != "Darth Sidious") {
            $('#DarthSid').toggleClass('enemy, defender').prependTo('#defenderRow');
            canChooseDefender = false;
            defender = "Darth Sidious";
        }
        if ( this.id == "DarthMaul" && canChooseDefender && yourCharacter != "Darth Maul") {
            $('#DarthMaul').toggleClass('enemy, defender').prependTo('#defenderRow');
            canChooseDefender = false;
            defender = "Darth Maul";
        }
    });



    //click attack button to decrease enemy hp and your character hp and display results
});
