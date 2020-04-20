/**
 * The Number.MAX_SAFE_INTEGER constant represents the maximum safe integer in JavaScript (253 - 1).
 * For larger integers, consider using BigInt.
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER
 */
test1();

function test1() {
    const x = Number.MAX_SAFE_INTEGER + 1;
    const y = Number.MAX_SAFE_INTEGER + 2;
    console.log(Number.MAX_SAFE_INTEGER);// 9007199254740991
    console.log(x);// 9007199254740992
    console.log(y);// 9007199254740992
    console.log(x === y);// true
}