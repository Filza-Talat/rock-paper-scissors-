let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomId = Math.floor(Math.random() * 3);
    return options[randomId];
}

const drawGame = () => {
    console.log("Game was draw.");
    msg.innerText = "Game was draw. play again";
     msg.style.backgroundColor = "#141f33";
};

const showWinner = (userWin ,userChoice , compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `you win, your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "#28a745";
    }
    else{
         compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `you lost, ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "#8B0000"
    }
}

const playgame = (userChoice) => {
    console.log("user choice = ",userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice = ",compChoice);

    if(userChoice === compChoice){
        //draw game
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            // comp choice: scissors or paper
           userWin = compChoice === "paper" ? false : true;
        }else if (userChoice === "paper"){
            //comp choice : rock or scissors
            userWin = compChoice === "scissors" ? false : true;
        }else{
            //comp choice : rock or paper
             userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    })
})
 