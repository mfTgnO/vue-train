/*
* JavaScript Math Object
* https://www.w3schools.com/js/js_math.asp
* */
// test1();
// test2();
// test3();
// test4();
// test5();
// test6();
// test7();
// test8();
test9();

// PI
function test1() {
    console.log(Math.PI);
}

// Math.round(x) returns the value of x rounded to its nearest integer:
function test2() {
    console.log(Math.round(4.7));
    console.log(Math.round(4.2));
}

// Math.pow(x, y) returns the value of x to the power of y:
function test3() {
    console.log(Math.pow(8, 2));
}

// Math.sqrt(x) returns the square root of x:
function test4() {
    console.log(Math.sqrt(64));
}

// Math.abs(x) returns the absolute (positive) value of x:
function test5() {
    console.log(Math.abs(-4.7));
}

// Math.ceil(x) returns the value of x rounded up to its nearest integer:
function test6() {
    console.log(Math.ceil(4.4));
}

// Math.floor(x) returns the value of x rounded down to its nearest integer:
function test7() {
    console.log(Math.floor(4.7));
}

// Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments:
function test8() {
    console.log(Math.min(0, 150, 30, 20, -8, -200));
    console.log(Math.max(0, 150, 30, 20, -8, -200));
}

// Math.random() returns a random number between 0 (inclusive), and 1 (exclusive):
function test9() {
    console.log(Math.random());
}