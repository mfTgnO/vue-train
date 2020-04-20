/**
 * The Number.EPSILON property represents the difference between 1 and the smallest floating point number greater than 1.
 * You do not have to create a Number object to access this static property (use Number.EPSILON).
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/EPSILON
 *
 * Description
 * The EPSILON property has a value of approximately 2.2204460492503130808472633361816E-16, or 2-52.
 */
test1();

function test1() {
    var result = Math.abs(0.2 - 0.3 + 0.1);
    console.log(result);
    // expected output: 2.7755575615628914e-17

    console.log(result < Number.EPSILON);
}