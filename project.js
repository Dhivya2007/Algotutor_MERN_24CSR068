let againBtn = document.querySelector(".again");
let number = document.querySelector(".number");
let guess = document.querySelector(".guess");
let checkBtn =  document.querySelector(".check");
let msg = document.querySelector(".message");
let score  = document.querySelector(".score");
let highScore = document.querySelector(".highscore");

let randomval = Math.trunc(Math.random() * 20)+1;
let curScore = 20;
console.log(randomval);
checkBtn.addEventListener("click",()=>{
    let val = Number(guess.value);
    console.log(val,typeof val);
    if(!val){
        console.log("no value entered");
    }
    else if(val===randomval){
        document.body.style.backgroundColor="green";
        number.textContent = randomval;
        msg.textContent="correct number";
        if(curScore>Number(highScore.textContent)){
            highScore.textContent=curScore;
        }
    }
    else if(val>randomval){
        if(curScore>0){
            msg.textContent = "Too high";
            curScore--;
            score.textContent=curScore;
        }
    }
    else if(val<randomval){
        if(curScore>0){
            msg.textContent = "Too low";
            curScore--;
            score.textContent=curScore;
        }
    else{
        msg.textContent = "Game Ends";
    }
}
    else{
        msg.textContent = "you lost the Game";
    }
});

againBtn.addEventListner("click",() => {
    document.body.style.backgroundColor = "#222";
    randomVal = Math.trunc(Math.random()*20)+1;
    number.textContent = "?";
    curScore = 20;
    score.textContent = currScore;
    msg.textContent = "Start guessing.......";
});