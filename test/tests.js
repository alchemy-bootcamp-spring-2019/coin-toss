const test = QUnit.test;

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

test('get Heads', function(assert) {
    //Arrange
    const expected = 'heads';
    const randomResult = .4;
    //Act
    const side = getHeadsOrTails(randomResult);
    //Assert
    assert.equal(side, expected);
});