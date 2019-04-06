import getHeadsOrTails from '../src/get-heads-or-tails.js';
const test = QUnit.test;

test('get Heads', function(assert) {
    //Arrange
    const expected = 'heads';
    const randomResult = .4;
    //Act
    const side = getHeadsOrTails(randomResult);
    //Assert
    assert.equal(side, expected);
});

test('get tails', function(assert) {
    const side = getHeadsOrTails(.5);
    assert.equal(side, 'tails');
});