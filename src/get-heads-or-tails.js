function getHeadsOrTails(randomNumber) {   
    let side = '';
     
    if(randomNumber < .5) {
        side = 'heads';
    }
    else {
        side = 'tails';
    }

    return side;
}

export default getHeadsOrTails;