import getHeadsOrTails from './get-heads-or-tails.js';

const status = document.getElementById('status');
const coinImage = document.getElementById('coin-image');
const pickForm = document.getElementById('pick-form');
const winCount = document.getElementById('win-count');
const lossCount = document.getElementById('loss-count');

let wins = 0;
let losses = 0;

function flipCoinAndReveal() {
    const random = Math.random();
    const tossedSide = getHeadsOrTails(random);
    let imageSource = '';
    if(tossedSide === 'heads') {
        imageSource = 'assets/heads.jpg';
    }
    else {
        imageSource = 'assets/tails.jpg';
    }
    coinImage.src = imageSource;

    return tossedSide;
}

function winOrLoseAndSetStatus(userChoice, tossedSide) {
    if(userChoice === tossedSide) {
        status.textContent = 'You win!';
        status.classList.remove('lose');
        status.classList.add('win');
        wins++;
        winCount.textContent = wins;
    }
    else {
        status.textContent = 'You lose!';
        status.classList.remove('win');
        status.classList.add('lose');
        losses++;
        lossCount.textContent = losses;
    } 
}

pickForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const userChoice = pickForm.elements.side.value;

    const result = flipCoinAndReveal();

    winOrLoseAndSetStatus(userChoice, result);
});