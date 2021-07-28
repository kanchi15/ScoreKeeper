const p1={
    score:0,
    button:document.querySelector('#player1'),
    display:document.querySelector('#score1')
}
const p2={
    score:0,
    button:document.querySelector('#player2'),
    display:document.querySelector('#score2')
}

const reset = document.querySelector('#reset')

let max = document.querySelector("#total select")
let result = document.querySelector("#result");

let maxScore = 5;
let isGameOver = false;

max.addEventListener('change',function(){

    maxScore = parseInt(this.value);
    resetvalues();
})

function scoreUpdate(player,opponent,no){
    if (!isGameOver){
        player.score+=1;
        player.display.innerText = player.score; 
        if (player.score === maxScore){
            player.display.classList.add("has-text-success");
            opponent.display.classList.add("has-text-danger");
            isGameOver=true;
            player.button.disabled = true;
            opponent.button.disabled = true;
            result.classList.remove("is-hidden")
            result.innerText=`! Player ${no} Win !`
        }
    }
}
p1.button.addEventListener('click',(e)=>{
    scoreUpdate(p1,p2,1);    
})
p2.button.addEventListener('click',(e)=>{
    scoreUpdate(p2,p1,2);
})

reset.addEventListener('click',resetvalues)

function resetvalues(){
    for (let p of [p1,p2]){
        p.display.innerText = 0;
        p.score = 0;
        isGameOver= false;
        p.display.classList.remove("has-text-danger","has-text-success");
        result.innerText="";
        p.button.disabled = false;
        result.classList.add("is-hidden")
    }
}

