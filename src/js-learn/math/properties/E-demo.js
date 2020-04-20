/**
 * The Math.E property represents the base of natural logarithms, e, approximately 2.718.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/E
 */
test1();

function test1() {
    console.log(Math.E);
    // expected output: 2.718281828459045

    console.log((1 + (1 / 1000000)) ** 1000000);
    // console.log((1 + (1 / 1000000)) ** 1000000);

    console.log(compoundOneYear(0.05, 100));
    // expected output: 105.12710963760242


}

function compoundOneYear(interestRate, currentVal) {
    return currentVal * (Math.E ** interestRate);
}