/**
 * The Math.abs() function returns the absolute value of a number, that is
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
 */
// test1();
test2();

function test1() {
    console.log(difference(3, 5));
    console.log(difference(5, 3));
    console.log(difference(1.23456, 7.89012));
}

function test2() {
    console.log(Math.abs('-1'));// 1
    console.log(Math.abs(-2));// 2
    console.log(Math.abs(null));// 0
    console.log(Math.abs(''));// 0
    console.log(Math.abs([]));// 0
    console.log(Math.abs([2]));// 2
    console.log(Math.abs([1, 2]));// NaN
    console.log(Math.abs({}));// NaN
    console.log(Math.abs('string'));// NaN
    console.log(Math.abs());// NaN
}

function difference(a, b) {
    return Math.abs(a - b);
}