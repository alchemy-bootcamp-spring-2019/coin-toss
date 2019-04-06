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
}


pickForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const userChoice = pickForm.elements.side.value;

    flipCoinAndReveal();
});