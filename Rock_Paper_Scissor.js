function scores(playergame,computergame)
{
    if(playergame == computergame)
    {
        return "It's Tie!";
    }
    else if((playergame == "rock" && computergame=="scissor") || (playergame=="paper" && computergame=="rock") || (playergame == "scissor" && computergame=="paper"))
    {
        return "It's Win!";
    }
    else
    {
        return "It's Lose!";
    }
}

async function game()
{
    
    let playerscore=0,compscore=0;
    for(let i=1;i<=5;i++)
    {
        const playerchoice = await playerch();
        const computerchoice = compchoice();
        // if(playerchoice == "rock")
        // {
        //     playerselected.innerHTML="You Selected: 🪨";
        // }
        // else if(playerchoice=="paper")
        // {
        //     playerselected.innerHTML="You Selected: 📃";
        // }
        // else 
        // {
        //     playerselected.innerHTML="You Selected: ✂️";
        // }

        // if(computerchoice=="rock")
        // {
        //     computerselected.innerHTML="Computer Selected: 🪨";
        // }
        // else if(computerchoice=="paper")
        // {
        //     computerselected.innerHTML="Computer Selected: 📃"
        // }
        // else
        // {
        //     computerselected.innerHTML="Computer Selected: ✂️"
        // }

        switch(playerchoice)
        {
            case "rock":
                playerselected.innerHTML="You Selected: 🪨";
                break;
            case "paper":
                playerselected.innerHTML="You Selected: 📃";
                break;
            default:
                playerselected.innerHTML="You Selected: ✂️";
                break;   
        }
        switch(computerchoice)
        {
            case "rock":
                computerselected.innerHTML="Computer Selected: 🪨";
                break;
            case "paper":
                computerselected.innerHTML="Computer Selected: 📃";
                break;
            default:
                computerselected.innerHTML="Computer Selected: ✂️";
                break;   
        }


        const score = scores(playerchoice,computerchoice)
        if(score == "It's Win!")
            {
                console.log(score)
                round_no.innerHTML = "Round "+i+"";
                win_lose_msg.innerHTML=score;
                playerscore++;
                playersc.innerHTML ="Your Score:"+playerscore;
                console.log("Your score:"+playerscore)
            }
        else if(score == "It's Lose!")
            {
                console.log(score)
                round_no.innerHTML = "Round "+i+"";
                win_lose_msg.innerHTML=score;
                compscore++;
                compsc.innerHTML="Computer Score:"+compscore;
                console.log("Computer score:"+compscore)
            }
        else
            {
                round_no.innerHTML = "Round "+i+"";
                win_lose_msg.innerHTML=score;
                console.log(score);
            }
    }
   finalscore(playerscore,compscore)

}

function playerch() {
    return new Promise((resolve) => {
      const rockch = document.getElementById("Rock");
      rockch.addEventListener("click", () => {
        resolve("rock");
      });
      const paperch = document.getElementById("Paper");
      paperch.addEventListener("click", () => {
        resolve("paper");
      });
      const scissorch = document.getElementById("Scissor");
      scissorch.addEventListener("click", () => {
        resolve("scissor");
      });
    });
  }

function compchoice()
{
    const compch1 = ["rock","paper","scissor"];
    let compch = compch1[Math.floor(Math.random()*compch1.length)];
    return compch;
}



function finalscore(playerscore,compscore)
{
    const button2 = document.getElementById("btn2");
    if(playerscore>compscore)
    {
        finalscores.innerHTML = "You Won the Match!!"
        console.log("You won the Match");
    }
    else if(compscore>playerscore)
    {
        finalscores.innerHTML="You Lost the Match!!";
        console.log("You lost the Match");
    }
    else
    {
        finalscores.innerHTML="Match is Tied!!";
        console.log("Match Tie!");
    }
    button2.style.display="block";
    button2.addEventListener('click',()=>{
        round_no.innerHTML="";
        win_lose_msg.innerHTML="";
        playersc.innerHTML="";
        compsc.innerHTML="";
        finalscores.innerHTML="";
        computerselected.innerHTML="";
        playerselected.innerHTML="";
        game();
        button2.style.display="none";
    })
}

let btn = document.getElementById("startbutton");
let gamesection = document.getElementById("gamesection")
const round_no = document.getElementById("round_no")
const win_lose_msg = document.getElementById("win_lose");
const playersc= document.getElementById("player_score");
const compsc = document.getElementById("computer_score");
const finalscores = document.getElementById("final_score");
const playerselected = document.getElementById("playerselected");
const computerselected = document.getElementById("computerselected");
btn.addEventListener('click',() =>{
    gamesection.style.display="block";
    btn.style.display="none";
    game();
});

