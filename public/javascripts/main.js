(function() {
    let button1 = document.getElementById('oneDie'), button2 = document.getElementById('twoDice'), button3 = document.getElementById('threeDice'), button4 = document.getElementById('fourDice');
    let howMany;
    button1.addEventListener('click', function() {howMany = 1;
        rollDice();
    });
    button2.addEventListener('click', function() {howMany = 2;
        rollDice();
    });
    button3.addEventListener('click', function() {howMany = 3;
        rollDice();
    });
    button4.addEventListener('click', function() {howMany = 4;
        rollDice();
    });

    function rollDice() {
        let type = prompt("How Many Faces Per Die?")-1;
        let total = 0;
        let rolls = [];
        for (let i = 0; i < howMany; i++) {
            let roll = Math.round(Math.random() * type + 1);
            rolls[i] = roll;
            total += roll;
        }
        alert(total);
        alert("Individual Rolls: " + rolls);
    }



}());