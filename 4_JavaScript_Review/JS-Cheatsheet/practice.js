// =============================                        
// 1. STATE (Program Memory)
// =============================

let game = {
    computerMove: "rock",
    playerMove: "",
    result: ""
};


// =============================
// 2. DOM CONNECTIONS
// (Grab HTML elements)
// =============================

let rockBtn = document.getElementById("rockBtn");
let paperBtn = document.getElementById("paperBtn");
let scissorsBtn = document.getElementById("scissorsBtn");

let result = document.getElementById("result");


// =============================
// 3. FUNCTION (The Logic)
// =============================

function makeMove(playerMove) {

    // At this moment:
    // playerMove = whatever button sent
    // game.computerMove = stored value


    if (playerMove === game.computerMove) {

        game.result = "It's a tie!";

    }

    else if (
        playerMove === "paper" && game.computerMove === "rock" ||
        playerMove === "scissors" && game.computerMove === "paper" ||
        playerMove === "rock" && game.computerMove === "scissors"
    ) {

        game.result = "You Win!";

    }

    else {

        game.result = "You Lose!";

    }


    // After logic runs:
    // object has new information

    result.textContent = game.result;

}


// =============================
// 4. USER ACTIONS
// =============================


rockBtn.addEventListener("click", function(){

    // New information enters program

    game.playerMove = "rock";


    // Send that information into function

    makeMove(game.playerMove);

});


paperBtn.addEventListener("click", function(){

    game.playerMove = "paper";

    makeMove(game.playerMove);

});


scissorsBtn.addEventListener("click", function(){

    game.playerMove = "scissors";

    makeMove(game.playerMove);

});

