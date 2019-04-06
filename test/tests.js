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