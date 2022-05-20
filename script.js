//function for computer player choice
function computerPlay(){
    let rand = Math.floor(Math.random()*3);
    return(rand == 0)? 'Rock':
    (rand == 1)? 'Paper':
    'Scissors';
}

function compare(a, b){
    if(a == "rock"){
        if(b == "scissors"){
            return 1;
        }else if(b == "paper"){
            return -1;
        }else{
            return 0;
        }
    }else if(a == "paper"){
        if(b == "scissors"){
            return -1;
        }else if(b == "rock"){
            return 1;
        }else{
            return 0;
        }
    }else{
        if(b == "paper"){
            return 1;
        }else if(b == "rock"){
            return -1;
        }else{
            return 0;
        }
    }
}

function playRound(player, computer){
    
    let result = compare(player.toLowerCase(), computer.toLowerCase());
    if(result == 0){
        return "It\'s a tie! You both played "+ player+ "!";
    }else if(result == 1){
        return "You win! "+player+ " beats "+computer+ "!";
    }else{
        return "You lose! "+computer+ " beats "+player+ "!";
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;

    for( i = 0; i < 5; i++){
        let player = prompt("Round "+(i+1)+ "! Choose your weapon!");
        player = player.toLowerCase();
        if(player !== "rock" && player !== "paper" && player !== "scissors"){
            alert("You know the rules! Make a valid choice.");
            i--;
        }else{ 
            let result = playRound(player, computerPlay());
            console.log(result);
            alert(result);
            if(result.includes("win")){
                playerScore = playerScore+1;
            }else if(result.includes("lose")){
                computerScore = computerScore +1;
            }else{
                playerScore = playerScore +1;
                computerScore = computerScore +1;
            }
        }
    }if(playerScore > computerScore){
        alert("Victory! Final score is: "+playerScore+" to "+computerScore);
    }else if(computerScore > playerScore){
        alert("Defeat! Final score is: "+playerScore+" to "+computerScore);
    }else{
        alert("It's a tie!")
    }
}

game();