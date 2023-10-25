'use strict';
const check= document.querySelector('.check');
let secretVal= Math.trunc(Math.random()*20)+1;
let score=20;
let highscore= 0;
const display= function(message){
    document.querySelector('.message').textContent= message;
}

document.querySelector('.again').addEventListener('click', function(){
    score= 20;
    secretVal= Math.trunc(Math.random()*20)+1;
    document.querySelector('.message').textContent= 'Start guesssing...';
    document.querySelector('.score').textContent= score;
    document.querySelector('.number').textContent= '?';
    document.querySelector('.guess').value= '';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
})

check.addEventListener('click', function() {
    const guess= Number(document.querySelector('.guess').value);
    console.log(guess, secretVal);

    if(!guess){
        display('⛔ No number!');
    } 
    //refactored code
    else if(guess !== secretVal){
        if(score > 1){
            display(guess > secretVal? '⬆️ Too High!' : '⬇️ Too Low!');
            score--;
            document.querySelector('.score').textContent= score;
        } else{
            display('😓 You lost the Game!');
            score=0;
        }
    }
    
    //original code
    //else if(guess > secretVal){
    //     if(score > 1){
    //         document.querySelector('.message').textContent= '⬆️ Too High!';
    //     score--;
    //     document.querySelector('.score').textContent= score;
    //     } else{
    //         document.querySelector('.message').textContent= '😓 You lost the Game!';
    //         score=0;
    //     }
    // } else if(guess < secretVal){
    //     if(score > 1){
    //         document.querySelector('.message').textContent= '⬇️ Too Low!';
    //         score--;
    //         document.querySelector('.score').textContent= score;
    //     } else{
    //         document.querySelector('.message').textContent= '😓 You lost the Game!';
    //         score=0;
    //     }
    // } 

    else if(guess === secretVal){
        display('🎊 Corr ect Number!');
        document.querySelector('body').style.backgroundColor='#60b247';
        document.querySelector('.number').textContent= secretVal;
        document.querySelector('.number').style.width='30rem';

        if(score > highscore){
            highscore= score;
            document.querySelector('.highscore').textContent= highscore;
        }
    }
});
