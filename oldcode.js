// function game(playergame,computergame)
// {
//     let userval = 0,compval = 0;
//         if(playergame == "rock")
//         {
//             if(computergame == "scissor")
//             {
//                 console.log("As Rock Beat Scissor, You Won");
//                 usercount = userval+1;
//                 console.log("Your Points:"+userval)
                
//             }
//             else if(computergame == "paper")
//             {
//                 console.log("As Paper beats Rock, You lost!")
//                 compcount=compval+1;            
//                 console.log("Computer Points:"+compval);
//             }
//             else
//             {
//                 console.log ("Tie!!")
//             }
//         }
//         else if(playergame == "paper")
//         {
//             if(computergame == "scissor")
//             {
//                 console.log("As scissor beats paper, You Lost!");
//                 compcount=compval+1;
//                 console.log("Computer Points:"+compval)
//             }
//             else if(computergame == "rock")
//             {
//                 console.log("As Paper beats Rock, You Won!");
//                 usercount = userval+1;
//                 console.log("Your Points:"+userval)
//             }
//             else
//             {
//                 console.log ("Tie!!")
//             }
//         }
//         else 
//         {
//            if(computergame == "paper")
//            {
//             console.log("As Scissor beats Paper, You won!");
//             usercount = userval+1;
//             console.log("Your Points:"+userval)
//            }
//            else if(computergame == "rock")
//            {
//             console.log("As rock beats scissor, You Lost!");
//             compcount=compval+1;
//             console.log("Computer Points is:"+compval)
        
//            }
//            else
//            {
//             console.log ("Tie!!")

//            }

//         }
        
     

// }

// const computerchoice1 = ["rock","paper","scissor"]
// let computerchoice = computerchoice1[Math.floor(Math.random()*computerchoice1.length)];
// let count=0;
// let usercount=0,compcount=0;
// while(count<5)
// {
//     let userchoice = prompt("Enter your choice:").toLowerCase();
//     if(computerchoice1.includes(userchoice))
//     {
//         game(userchoice,computerchoice,count);
//         count++;
       
//     }
//     else
//     {
//     console.log("Invalid Choice");
//     count=5;
//     }
// }
// if(count==5)
// {
//     if(usercount>compcount)
//     {
//         console.log("You won!");
//     }
//     else if(compcount>usercount)
//     {
//         console.log("You Lost!");
//     }
//     else
//     {
//         console.log("Tie!")
//     }
// }



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

function game()
{
    let playerscore=0,compscore=0;
    for(let i=0;i<5;i++)
    {
        const playerchoice = prompt("\n1.Rock \n2.Paper\n3.Scissor\nEnter your Choice:").toLowerCase()
        if(!["rock","paper","scissor"].includes(playerchoice))
            {
            console.log("Invalid Choice");
            i--;
            continue;
            }
        const computerchoice = compchoice();
        const score = scores(playerchoice,computerchoice)
        if(score == "It's Win!")
            {
                console.log(score)
                playerscore++;
                console.log("Your score:"+playerscore)
            }
        else if(score == "It's Lose!")
            {
                console.log(score)
                compscore++;
                console.log("Computer score:"+compscore)
            }
        else
            {
                console.log(score);
            }
    }
   finalscore(playerscore,compscore)

}

function compchoice()
{
    const compch1 = ["rock","paper","scissor"];
    let compch = compch1[Math.floor(Math.random()*compch1.length)];
    return compch;
}


function finalscore(playerscore,compscore)
{
    if(playerscore>compscore)
    {
        console.log("You won the Match");
    }
    else if(compscore>playerscore)
    {
        console.log("You lost the Match")
    }
    else
    {
        console.log("Match Tie!")
    }
}

game()