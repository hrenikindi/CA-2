let turn = 1
let diceSound = new Audio('./assets/rpg-dice-rolling-95182.mp3')
let celebrations = new Audio('./assets/win.mp3')
let playerMoveSound = new Audio('./assets/move.mp3');
let backGround = new Audio('./assets/backgound.mp3');
let player1moves = 0
let player2moves = 0
backGround.volume=0.7;
backGround.play();

// Function to move the players on the board
function play(player, playerSum, correction, num) {
    let currentMove
    //Snake and Ladder Logic
    if (playerSum == 'player1moves') 
    {

        player1moves = player1moves + num

        if (player1moves > 100) {
            player1moves = player1moves - num
        }
        if (player1moves == 1) {
            player1moves = 38
        }
        if (player1moves == 4) {
            player1moves = 14
        }
        if (player1moves == 9 ) {
            player1moves = 31
        }
        if(player1moves == 17){
            player1moves=7
        }
        if (player1moves == 21) {
            player1moves = 42
        }
        if (player1moves == 28) {
            player1moves = 84
        }
        if (player1moves == 54) {
            player1moves = 34
        }
        if (player1moves == 62) {
            player1moves = 19
        }
        if (player1moves == 64) {
            player1moves = 60
        }
        if (player1moves == 51) {
            player1moves = 67
        }
        if (player1moves == 87) {
            player1moves = 24
        }
        if (player1moves == 71) {
            player1moves = 91
        }
        if (player1moves == 80) {
            player1moves = 100
        }
        if (player1moves == 93) {
            player1moves = 73
        }
        if (player1moves == 95) {
            player1moves = 75
        }
        if (player1moves == 98) {
            player1moves = 79
        }
        currentMove = player1moves
    }

    if (playerSum == 'player2moves') {

        player2moves = player2moves + num

        if (player2moves > 100) {
            player2moves = player1moves - num
        }
        if (player2moves == 1) {
            player2moves = 38
        }
        if (player2moves == 4) {
            player2moves = 14
        }
        if (player2moves == 9 ) {
            player2moves = 31
        }
        if(player2moves == 17){
            player2moves = 7
        }
        if (player2moves == 21) {
            player2moves = 42
        }
        if (player2moves == 28) {
            player2moves = 84
        }
        if (player2moves == 54) {
            player2moves = 34
        }
        if (player2moves == 62) {
            player2moves = 19
        }
        if (player2moves == 64) {
            player2moves = 60
        }
        if (player2moves == 51) {
            player2moves = 67
        }
        if (player2moves == 87) {
            player2moves = 24
        }
        if (player2moves == 71) {
            player2moves = 91
        }
        if (player2moves == 80) {
            player2moves = 100
        }
        if (player2moves == 93) {
            player2moves = 73
        }
        if (player2moves == 95) {
            player2moves = 75
        }
        if (player2moves == 98) {
            player2moves = 79
        }
        currentMove = player2moves
    }
    setTimeout(function(){
        playerMoveSound.volume=0.7;
        playerMoveSound.play();
    },500)
    
    
    document.getElementById(`${player}`).style.transition = `linear all .5s`
    if (currentMove < 10) {
        document.getElementById(`${player}`).style.left = `${(currentMove - 1) * 62}px`;
        document.getElementById(`${player}`).style.top = `${-0 * 62 - correction}px`;
    } else if (currentMove === 100) {
        celebrations.play();
        if (player === 'p1') {
            displayGameOverMessage('p1');
        } else if (player === 'p2') {
            displayGameOverMessage('p2');
        }
    } else {
        numarr = Array.from(String(currentMove));
        n1 = eval(numarr.shift());
        n2 = eval(numarr.pop());

        if (n1 % 2 !== 0) {
            if (n2 === 0) {
                document.getElementById(`${player}`).style.left = `${9 * 62}px`;
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - correction}px`;
            } else {
                document.getElementById(`${player}`).style.left = `${(9 - (n2 - 1)) * 62}px`;
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - correction}px`;
            }
        } else if (n1 % 2 === 0) {
            if (n2 === 0) {
                document.getElementById(`${player}`).style.left = `${0}px`;
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - correction}px`;
            } else {
                document.getElementById(`${player}`).style.left = `${(n2 - 1) * 62}px`;
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - correction}px`;
            }
        }
    }
}
// Define arrays for winning and losing phrases
const winningPhrases = [
    "Congratulations! You won!",
    "You're the champion!",
    "Victory is yours!",
    "Well done! You conquered the game!",
    "You've triumphed! Great job!"
];

// Function to display game over message
function displayGameOverMessage(player) {
    let message;
    if (player === 'p1') {
        message = winningPhrases[Math.floor(Math.random() * winningPhrases.length)];
    } else if (player === 'p2') {
        message = winningPhrases[Math.floor(Math.random() * winningPhrases.length)];
    }
    alert(message+player+" "+'won!');
    location.reload(); // Reload the game after displaying the message
}


document.getElementById("diceButton").addEventListener("click", function () {
    setTimeout(function(){
        diceSound.volume=0.6;
        diceSound.play()
    },100)
    num = Math.floor(Math.random() * (6 - 1 + 1) + 1)
    document.getElementById("dice").innerText = num

    if (turn % 2 != 0) {
        document.getElementById('toggle').innerText = "Yellow's Turn : "
        play('p1', 'player1moves', 0, num)

    }

    else if (turn % 2 == 0) {
        document.getElementById('toggle').innerText = "Red's Turn : "

        play('p2', 'player2moves', 55, num)

    }

    turn+=1
})