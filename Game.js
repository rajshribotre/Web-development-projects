let userScore=0
let compScore=0;


const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorepara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const generateCompChoice= ()=>{
    const options=["rock", "paper", "scissors"];
    const randmIdx= Math.floor(Math.random()*3);
    return options[randmIdx];
}

const DrawGame=()=>{
    //console.log("Game was drawn");
    msg.innerText="Game was draw. Play again";
    msg.style.backgroundColor="#060C28";
    
}

const ShowWinner= (userWin, userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorepara.innerText=userScore;
        msg.innerText=`You win. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    } else {
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
    //console.log("user Choice= ",userChoice);

    const compChoice=generateCompChoice();
    //console.log("comp Choice= ",compChoice);

    if(userChoice===compChoice){
        DrawGame();
    } else{
        let userWin=true;
        if(userChoice==="rock"){
            //scissors, paper
            userWin=compChoice==="paper" ? false : true;
        } else if(userChoice==="paper"){
            //rock, scissors
            userWin=compChoice=== "scissors" ? false : true;
        }else {
            //rock, paper
            userWin=compChoice==="rock" ? false : true;
        }
        ShowWinner(userWin, userChoice, compChoice);
    }
   
}
choices.forEach((choice) =>{
    //console.log(choice);
    choice.addEventListener("click", () =>{
        const userChoice=choice.getAttribute("id");
        //console.log("choice was clicked",userChoice);
        playGame(userChoice); 
    })
})




