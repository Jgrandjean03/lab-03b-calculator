import {add, minus, multi, div} from '../MathUtils.js';

const test = QUnit.test;

test('Adds 5 +5 ', function(expect) {
    //Arrange
    // Set up your parameters and expectations
    const number1 = 5
    const number2 = 5
    const expected = 10;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(number1,number2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(expected, actual)
});

test('Adds 6+6', function(expect) {
    //Arrange
    // Set up your parameters and expectations
    const number1 = 6
    const number2 = 6
    const expected = 12;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(number1,number2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(expected, actual)
});

test('Adds the words hello and world', function(expect) {
    //Arrange
    // Set up your parameters and expectations
    const number1 = 'hello '
    const number2 = 'world'
    const expected = 'hello world';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(number1,number2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(expected, actual)
});



test('Subtracts 5 from 50', function(expect) {
    //Arrange
    // Set up your parameters and expectations
    const number1 = 50
    const number2 = 5
    const expected = 45;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = minus(number1,number2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(expected, actual);
});

test('subtracrts 5 from 5', function(expect) {
    //Arrange
    // Set up your parameters and expectations
    const number1 = 5
    const number2 = 5
    const expected = 0;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = minus(number1,number2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(expected, actual);
});

test('subtracrts 12 from 6', function(expect) {
    //Arrange
    // Set up your parameters and expectations
    const number1 = 6
    const number2 = 12
    const expected = -6;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = minus(number1,number2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(expected, actual);
});

test('Multiplies 0 times 0', function(expect) {
    //Arrange
    // Set up your parameters and expectations
    const number1 = 0
    const number2 = 0
    const expected = 0;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = multi(number1,number2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(expected, actual);
});

test('Multiplies 5 times 5', function(expect) {
    //Arrange
    // Set up your parameters and expectations
    const number1 = 5
    const number2 = 5
    const expected = 25;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = multi(number1,number2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(expected, actual);
});

test('Multiplies 7 times 7', function(expect) {
    //Arrange
    // Set up your parameters and expectations
    const number1 = 7
    const number2 = 7
    const expected = 49;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = multi(number1,number2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(expected, actual);
});

test('Divides 6 into 60', function(expect) {
    //Arrange
    // Set up your parameters and expectations
    const number1 = 60
    const number2 = 6
    const expected = 10;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = div(number1,number2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(expected, actual);
});

test('Divides 6 into 30', function(expect) {
    //Arrange
    // Set up your parameters and expectations
    const number1 = 30
    const number2 = 6
    const expected = 5;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = div(number1,number2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(expected, actual);
});
test('Divides 7 into 49', function(expect) {
    //Arrange
    // Set up your parameters and expectations
    const number1 = 49
    const number2 = 7
    const expected = 7;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = div(number1,number2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(expected, actual);
});