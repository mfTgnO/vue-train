// test1();
// test2();
test3();

/**
* The addition operator
* https://www.learn-js.org/en/Operators
*
* The + (addition) operator is used for both addition and concatenation of strings.
* */
function test1() {
    var a = 1;
    var b = 2;
    var c = a + b;
    console.log(c);

    // The addition operator is used for concatenating strings to strings, strings to numbers, and numbers to strings:
    var name = "John";
    console.log("Hello " + name + "!");
    console.log("The meaning of life is " + 42);
    console.log(42 + " is the meaning of life");

    // JavaScript behaves differently when you are trying to combine two operands of different types.
    // The default primitive value is a string, so when you try to add a number to a string,
    // JavaScript will transform the number to a string before the concatenation.

    // To subtract, multiply and divide two numbers, use the minus (-), asterisk (*) and slash (/) signs.
    console.log(3 - 5);
    console.log(3 * 5);
    console.log(3 / 5);
}

/**
* Advanced mathematical operators
* JavaScript supports the modulus operator (%) which calculates the remainder of a division operation.
* */
function test2() {
    console.log(5 % 3);

    var myNumber = 4;
    myNumber += 2;
    console.log(myNumber);

    myNumber -= 2;
    console.log(myNumber);

    myNumber *= 2;
    console.log(myNumber);

    myNumber /= 2;
    console.log(myNumber);

    myNumber %= 2;
    console.log(myNumber);
}

/**
* JavaScript also has a Math module which contains more advanced functions:
*
* Math.abs calculates the absolute value of a number
* Math.exp calculates e to the power of a number
* Math.pow(x,y) calculates the result of x to the power of y
* Math.floor removes the fraction part from a number
* Math.random() will give a random number x where 0<=x<1
* */
function test3() {
    var myNumber = -2;
    console.log(Math.abs(myNumber));

    console.log(Math.exp(2));

    console.log(Math.pow(2, 4));

    myNumber = 1.234;
    console.log(Math.floor(myNumber));

    console.log(Math.random());
}